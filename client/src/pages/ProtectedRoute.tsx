import { AppContextType, useAppContext } from '@/context/appContext';
import { Navigate } from 'react-router-dom';

function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { user } = useAppContext() as AppContextType;
  if (user) {
    return <>{children}</>;
  }
  return <Navigate to="/" />;
}

export default ProtectedRoute;
