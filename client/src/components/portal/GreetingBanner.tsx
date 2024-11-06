import Container from '../globals/Container';
import RequestForm from './RequestForm';

function GreetingBanner() {
  const user = {
    name: 'John Smilga',
  };

  return (
    <Container>
      <div className="flex flex-wrap justify-between items-center my-4 px-2">
        <h2 className="text-lg font-bold leading-tight lg:text-xl">
          Welcome {user.name}
        </h2>
        <RequestForm />
      </div>
    </Container>
  );
}

export default GreetingBanner;
