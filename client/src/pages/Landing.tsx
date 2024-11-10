import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

function Landing() {
  return (
    <div>
      <h1 className="text-3xl  bg-slate-500 text-white p-8 text-center">
        Leave Tracker App Login Page
      </h1>
      <div className="m-10 flex gap-8  w-[250px]">
        <Button>
          <Link to={'/register'}>Register</Link>
        </Button>
        <Button>
          <Link to={'/login'}>Login</Link>
        </Button>
      </div>
    </div>
  );
}

export default Landing;
