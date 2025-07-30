// components/ErrorBoundary.jsx
import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
    };
  }

  static getDerivedStateFromError(error) {
    // დააბრუნეთ განახლებული მდგომარეობა
    return { error: error };
  }

  render() {
    if (this.state.error) {
      return (
        <div className="text-red-600 text-center text-xl mt-10">
           Error has been observed!
        </div>
      );
    }

    // თუ არ არის ერორი, დააბრუნე შვილი კომპონენტები
    return this.props.children;
  }
}

export default ErrorBoundary;
