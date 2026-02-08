// src/DarwinTracker.jsx
import { useEffect, useMemo } from 'react';
import { initializeApp } from "firebase/app";
import { getDatabase, ref, onDisconnect, set, increment, push } from "firebase/database";

// ⚠️ CRITICAL: You must replace these with your REAL strings for the test site to work.
// The test site does not have access to your .env files by default.
const firebaseConfig = {
  apiKey: "AIzaSyCa-wRwPRlqvJzbVOpU88N-kOWXt5OzLuE",          // <--- PASTE REAL KEY HERE
  authDomain: "darwin-hackathon.firebaseapp.com",            // <--- PASTE REAL DOMAIN HERE
  databaseURL: "https://darwin-hackathon-default-rtdb.firebaseio.com/",           // <--- PASTE REAL DB URL HERE (Must start with https://)
  projectId: "darwin-hackathon",             // <--- PASTE REAL PROJECT ID HERE
  storageBucket: "darwin-hackathon.firebasestorage.app",         // <--- PASTE REAL BUCKET HERE
  messagingSenderId: "1019141547180",     // <--- PASTE REAL SENDER ID HERE
  appId: "1:1019141547180:web:9c8bb0826f8de52a82ab09"                  // <--- PASTE REAL APP ID HERE
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export default function DarwinTracker({ repoId }) {
  
  // --- 1. STABLE SESSION ID ---
  // We use useMemo to ensure we don't generate a new ID on every render (Strict Mode fix)
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

    // --- 2. TRACK ACTIVE USERS ---
    // Use the stable sessionId we created above
    const userRef = ref(db, `swarm/${repoId}/active_sessions/${sessionId}`);

    // Set user as active
    set(userRef, { last_seen: Date.now(), x: Math.random(), y: Math.random() });

    // If they close the tab, remove them automatically
    onDisconnect(userRef).remove();

    // --- 3. TRACK CLICK EVENTS ---
    const handleClick = (e) => {
      const target = e.target.closest('[data-darwin-id]'); 
      
      if (target) {
        const elementId = target.getAttribute('data-darwin-id');
        
        // Increment the click count
        const clickRef = ref(db, `swarm/${repoId}/clicks/${elementId}`);
        set(clickRef, increment(1));
        
        // Optional: Push a "particle" event
        push(ref(db, `swarm/${repoId}/events`), {
          type: 'click',
          elementId: elementId,
          timestamp: Date.now()
        });
      }
    };

    window.addEventListener('click', handleClick);
    return () => window.removeEventListener('click', handleClick);
  }, [repoId, sessionId]); // Add sessionId to dependencies

  return null;
}