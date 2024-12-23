import { Button } from '@/components/ui/button';
import { ErrorResponse, Link, useRouteError } from 'react-router-dom';
import notFoundImg from '../assets/not-found.svg';

type CustomErrorResponse = ErrorResponse & { response: any };

function Error() {
  let error = useRouteError() as CustomErrorResponse;
  console.log(error);

  if (error.status === 404) {
    return (
      <section className="min-h-screen flex flex-col justify-center items-center gap-y-8">
        <img src={notFoundImg} alt="not found" className="max-w-[500px]" />
        <div className="text-center">
          <h3 className="font-semibold text-3xl capitalize mb-2">
            Ohh! page not found
          </h3>
          <p className="text-secondary-foreground text-lg">
            We can't seem to find the page you are looking for
          </p>
          <Button asChild variant="link" className="text-md">
            <Link to="/portal">Back Home</Link>
          </Button>
        </div>
      </section>
    );
  }

  return (
    <section>
      <h2>{error?.response?.data.msg}</h2>
    </section>
  );
}

export default Error;
