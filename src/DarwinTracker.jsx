// src/DarwinTracker.jsx
import { useEffect, useMemo } from 'react';
import { initializeApp } from "firebase/app";
import { getDatabase, ref, onDisconnect, set, increment, push, update, remove } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCa-wRwPRlqvJzbVOpU88N-kOWXt5OzLuE", 
  authDomain: "darwin-hackathon.firebaseapp.com",
  databaseURL: "https://darwin-hackathon-default-rtdb.firebaseio.com/",
  projectId: "darwin-hackathon",
  storageBucket: "darwin-hackathon.firebasestorage.app",
  messagingSenderId: "1019141547180",
  appId: "1:1019141547180:web:9c8bb0826f8de52a82ab09"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export default function DarwinTracker({ repoId }) {
  const sessionId = useMemo(() => {
    let stored = sessionStorage.getItem('darwin_session_id');
    if (!stored) {
      stored = Math.random().toString(36).substr(2, 9);
      sessionStorage.setItem('darwin_session_id', stored);
    }
    return stored;
  }, []);

  useEffect(() => {
    if (!repoId) return;

    // 0. SANITIZE REPO ID
    const safeRepoId = repoId.replace('/', '_').toLowerCase();

    // 1. Initialize User State
    const userRef = ref(db, `swarm/${safeRepoId}/active_sessions/${sessionId}`);
    
    update(userRef, { 
      last_seen: Date.now(), 
      target: null // Start wandering
    });

    // Handle Tab Close / Crash (Fallback)
    onDisconnect(userRef).remove();

    const handleClick = (e) => {
      const target = e.target.closest('[data-darwin-id]'); 
      
      if (target) {
        const elementId = target.getAttribute('data-darwin-id');
        
        // 2. Increment Global Count
        set(ref(db, `swarm/${safeRepoId}/clicks/${elementId}`), increment(1));
        
        // 3. IMPORTANT: Save the target to the USER session
        // This allows the dashboard to "sync" them immediately.
        update(userRef, {
          target: elementId,
          last_seen: Date.now()
        });

        // 4. Push Event History
        push(ref(db, `swarm/${safeRepoId}/events`), {
          type: 'click',
          elementId: elementId,
          userId: sessionId,
          timestamp: Date.now()
        });
      }
    };

    window.addEventListener('click', handleClick);
    
    // CLEANUP: Remove user immediately when component unmounts
    return () => {
      window.removeEventListener('click', handleClick);
      remove(userRef); 
      onDisconnect(userRef).cancel();
    };
  }, [repoId, sessionId]);

  return null;
}