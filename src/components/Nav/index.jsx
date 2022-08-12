import { ReactComponent as HeroIcon } from 'assets/icons/hero-icon.svg';
import { ReactComponent as MenuIcon } from 'assets/icons/menu.svg';
import { Button } from 'components';
import { useState } from 'react';

export const Nav = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <nav className="xs:mx-4 900:!mx-7 1100:!mx-16 bg-white fixed xs:static left-0 transition duration-300 w-[100vw] xs:w-[unset] xs:rounded-2xl flex items-center py-4 px-8 800:px-6 1100:px-16 justify-between">
      <a href="#">
        <HeroIcon className="cursor-pointer w-20 xs:w-[unset]" />
      </a>
      <ul className="gap-x-8 text-sm hidden 800:flex">
        <li className="hover:text-orange focus:text-orange transition duration-300">
          <a href="#">About</a>
        </li>
        <li
          className="relative"
          onClick={() => setServicesOpen((prev) => !prev)}
        >
          <a
            href="#"
            className="hover:text-orange focus:text-orange transition duration-300"
          >
            Services
          </a>
          <ul
            className="origin-top-right absolute right-[-4px] py-[22px] px-7 mt-2 w-32 h-56 rounded-xl shadow-md bg-white"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="services-pane"
          >
            <li>
              <a href="#" className="" role="menuitem">
                Account settings
              </a>
            </li>
          </ul>
        </li>
        <li className="hover:text-orange focus:text-orange transition duration-300">
          <a href="#">Resources</a>
        </li>
        <li className="hover:text-orange focus:text-orange transition duration-300">
          <a href="#">Partners</a>
        </li>
        <li className="hover:text-orange focus:text-orange transition duration-300">
          <a href="#">Speak to us</a>
        </li>
      </ul>
      <div className="flex items-center hidden 800:block">
        <a
          href="#"
          className="mr-4 hover:text-orange focus:text-orange transition duration-300"
        >
          Sign in
        </a>
        <Button>Sign up</Button>
      </div>
      <MenuIcon
        className="800:hidden h-8"
        onClick={() => setDrawerOpen(true)}
      />
    </nav>
  );
};
