import { ReactComponent as HeroIcon } from 'assets/icons/hero-icon.svg';
import { Button } from 'components';

export const Nav = () => {
  return (
    <nav className="bg-white rounded-2xl mx-16 flex items-center py-4 px-12 justify-between">
      <a href="#">
        <HeroIcon className="cursor-pointer" />
      </a>
      <ul className="flex gap-x-8 text-sm">
        <li className="hover:text-orange transition duration-300">
          <a href="#">About</a>
        </li>
        <li className="hover:text-orange transition duration-300">
          <a href="#">Services</a>
        </li>
        <li className="hover:text-orange transition duration-300">
          <a href="#">Resources</a>
        </li>
        <li className="hover:text-orange transition duration-300">
          <a href="#">Partners</a>
        </li>
        <li className="hover:text-orange transition duration-300">
          <a href="#">Speak to us</a>
        </li>
      </ul>
      <div className="flex items-center">
        <a href="#" className="mr-4">
          Sign in
        </a>
        <Button>Sign up</Button>
      </div>
    </nav>
  );
};
