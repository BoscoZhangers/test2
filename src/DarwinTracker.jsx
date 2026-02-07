// src/DarwinTracker.jsx (In the user's repo)
import { useEffect } from 'react';
import { initializeApp } from "firebase/app";
import { getDatabase, ref, onDisconnect, set, increment, push } from "firebase/database";

// 1. USE THE SAME FIREBASE CONFIG AS YOUR DASHBOARD
const firebaseConfig = {
  // ... your firebase config keys ...
  // In a real product, these would be public keys or proxied via an API
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export default function DarwinTracker({ repoId }) {
  useEffect(() => {
    // --- 1. TRACK ACTIVE USERS ---
    // Generate a random session ID for this visitor
    const sessionId = Math.random().toString(36).substr(2, 9);
    const userRef = ref(db, `swarm/${repoId}/active_sessions/${sessionId}`);

    // Set user as active
    set(userRef, { last_seen: Date.now(), x: Math.random(), y: Math.random() });

    // If they close the tab, remove them automatically (Magic of Firebase)
    onDisconnect(userRef).remove();

    // --- 2. TRACK CLICK EVENTS ---
    const handleClick = (e) => {
      // Check if the clicked element has a 'darwin-id' or specific tag
      // We use the 'data-darwin-id' attribute which we can add to elements
      const target = e.target.closest('[data-darwin-id]'); 
      
      if (target) {
        const elementId = target.getAttribute('data-darwin-id');
        
        // Increment the click count for this specific button
        const clickRef = ref(db, `swarm/${repoId}/clicks/${elementId}`);
        set(clickRef, increment(1));
        
        // Optional: Push a "particle" event for the 3D scene
        push(ref(db, `swarm/${repoId}/events`), {
          type: 'click',
          elementId: elementId,
          timestamp: Date.now()
        });
      }
    };

    window.addEventListener('click', handleClick);
    return () => window.removeEventListener('click', handleClick);
  }, [repoId]);

  return null; // This component renders nothing visual
}
