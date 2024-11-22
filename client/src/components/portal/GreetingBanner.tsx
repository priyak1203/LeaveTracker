import { AppContextType, useAppContext } from '@/context/appContext';
import Container from '../globals/Container';
import RequestForm from './RequestForm';

function GreetingBanner() {
  const { user } = useAppContext() as AppContextType;

  return (
    <Container>
      <div className="flex flex-wrap justify-between items-center my-4 ">
        <h1 className="text-lg font-bold leading-tight lg:text-xl capitalize">
          Welcome {user?.name || 'user'}
        </h1>
        <RequestForm />
      </div>
    </Container>
  );
}

export default GreetingBanner;
