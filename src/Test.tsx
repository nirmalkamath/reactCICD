import React, { Suspense } from 'react';

// Error boundary component
class ErrorBoundary extends React.Component {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return <div>Error loading component</div>;
    }
    return this.props.children;
  }
}

// Lazy-loaded component
const Home = React.lazy(() => import('./Components/Home'));

const Test = () => {
  return (
    <ErrorBoundary>
      <Suspense fallback={<div>Loading...</div>}>
        <Home />
      </Suspense>
    </ErrorBoundary>
  );
};

export default Test;
