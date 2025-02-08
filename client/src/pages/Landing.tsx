import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import mainImg from '../assets/main-img.svg';

function Landing() {
  return (
    <main>
      <nav className="w-[90vw] max-w-[1120px] h-[12vh] mx-auto flex items-center">
        <h3 className="font-semibold text-2xl sm:text-3xl md:text-4xl">
          Leave<span className="text-primary">Tracker</span>
        </h3>
      </nav>
      <section className="w-[90vw] max-w-[1120px] mx-auto min-h-[88vh] grid items-center mt-[-3rem] lg:grid-cols-[_1fr,400px] gap-x-12">
        <div>
          <h1 className="capitalize font-[700] text-[3rem] md:text-[4rem] text-accent-foreground mb-4">
            leave <span className="text-primary">tracker</span> app
          </h1>
          <p className="max-w-[35em] mb-6 leading-8 text-muted-foreground sm:text-md md:text-lg">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat
            quae veniam ipsam aperiam nostrum dolore consequatur. Autem aliquam
            inventore voluptatibus id, ad, accusantium similique earum molestias
            velit quisquam.
          </p>
          <Button className="px-7 py-4 mr-8">
            <Link to={'/register'}>Register</Link>
          </Button>
          <Button className="px-7 py-4">
            <Link to={'/login'}>Login</Link>
          </Button>
        </div>
        <img
          src={mainImg}
          alt="main-image"
          className="hidden w-full object-cover lg:block"
        />
      </section>
    </main>
  );
}

export default Landing;
