import { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        this.props.fallback || (
          <div className="min-h-screen bg-[#545454] flex items-center justify-center p-6">
            <div className="bg-white rounded-[30px] p-8 max-w-md text-center">
              <h1 className="font-['Inter',sans-serif] font-bold text-2xl text-black mb-4">
                Something went wrong
              </h1>
              <p className="text-gray-600 font-['Inter',sans-serif] mb-6">
                Please refresh the page to continue.
              </p>
              <button
                onClick={() => window.location.reload()}
                className="bg-black text-white px-6 py-3 rounded-full font-['Inter',sans-serif] font-semibold hover:bg-gray-800 transition-colors"
              >
                Refresh Page
              </button>
            </div>
          </div>
        )
      );
    }

    return this.props.children;
  }
}
