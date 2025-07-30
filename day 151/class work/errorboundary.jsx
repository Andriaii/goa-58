import React, { Component } from 'react';

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    // error მდგომარეობა
    this.state = { error: null };
  }

  // ეს static მეთოდი გამოიყენება მაშინ, როცა შვილ კომპონენტში მოხდება შეცდომა
  static getDerivedStateFromError(error) {
    return { error }; // ვაყენებთ error-ს state-ში
  }

  render() {
    // თუ არსებობს შეცდომა, ვაჩვენებთ fallback UI-ს
    if (this.state.error) {
      return (
        <div style={{ padding: '1rem', backgroundColor: 'salmon', color: 'white' }}>
          <h2>🚨 რაღაც შეცდომა მოხდა!</h2>
          <p>{this.state.error.message}</p>
        </div>
      );
    }

    // თუ შეცდომა არ არსებობს, ჩვეულებრივად ვაბრუნებთ შვილ კომპონენტებს
    return this.props.children;
  }
}
