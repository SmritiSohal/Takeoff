import { RouterProvider } from 'react-router';
import { router } from './routes';
import { PremiumProvider } from './contexts/PremiumContext';
import { AuthProvider } from './contexts/AuthContext';
import { ErrorBoundary } from './components/ErrorBoundary';

export default function App() {
  return (
    <ErrorBoundary>
      <AuthProvider>
        <PremiumProvider>
          <RouterProvider router={router} />
        </PremiumProvider>
      </AuthProvider>
    </ErrorBoundary>
  );
}