// App.jsx
import Counter from "./components/Counter";
import ErrorBoundary from "./components/ErrorBoundary";

const App = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6">Error Boundary Demo</h1>
      <ErrorBoundary>
        <Counter />
      </ErrorBoundary>
    </div>
  );
};

export default App;
