import DarwinTracker from './DarwinTracker'; 

export default function App() {
  return (
    <div>
      {/* Initialize Tracking (Use a unique ID for your repo) */}
      <DarwinTracker repoId="BoscoZhangers_my-startup" /> 
      
      {/* Add data-darwin-id to elements you want to track */}
      <button data-darwin-id="btn-signup">
        Click Me
      </button>
    </div>
  )
}
