import React from 'react';
import LightSwitch from './LightSwitch';
import ErrorBoundary from 'Errorboundary';

function App() {
  return (
    <div className="App">
      <h1>🛠 Light Switch Panel</h1>
      
      {/* ErrorBoundary კომპონენტი გარს აკრავს LightSwitch-ს */}
      <ErrorBoundary>
        <LightSwitch switchNumber={1} />
      </ErrorBoundary>
    </div>
  );
}

export default App;
