import { ReactComponent as HeroIcon } from 'assets/icons/hero-icon.svg';
import { ReactComponent as MenuIcon } from 'assets/icons/menu.svg';
import { Button } from 'components';
import { useState } from 'react';

export const Nav = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  return (
    <nav className="bg-white fixed xs:relative left-0 transition duration-300 w-[100vw] xs:w-[unset] xs:rounded-2xl xs:mx-4 900:mx-7 1100:mx-16 flex items-center py-4 px-8 800:px-6 1100:px-16 justify-between">
      <a href="#">
        <HeroIcon className="cursor-pointer w-20 xs:w-[unset]" />
      </a>
      <ul className="gap-x-8 text-sm hidden 800:flex">
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
      <div className="flex items-center hidden 800:block">
        <a href="#" className="mr-4">
          Sign in
        </a>
        <Button>Sign up</Button>
      </div>
      <MenuIcon className="800:hidden h-8" onClick={() => setDrawerOpen(true)} />
    </nav>
  );
};
