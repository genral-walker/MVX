import { ReactComponent as HeroIcon } from 'assets/icons/hero-icon.svg';
import { ReactComponent as MenuIcon } from 'assets/icons/menu.svg';
import { ReactComponent as Service1Icon } from 'assets/icons/service-1.svg';
import { ReactComponent as Service2Icon } from 'assets/icons/service-2.svg';
import { ReactComponent as Service3Icon } from 'assets/icons/service-3.svg';
import { ReactComponent as Service4Icon } from 'assets/icons/service-4.svg';
import { ReactComponent as CancelIcon } from 'assets/icons/cancel.svg';
import { ReactComponent as RightIcon } from 'assets/icons/right.svg';
import { ReactComponent as LeftIcon } from 'assets/icons/left.svg';
import { Button } from 'components';
import { useState } from 'react';


export const Nav = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <>
      {drawerOpen && (
        <>
          {servicesOpen ? (
            <nav className="bg-white h-[100vh] w-[100vw] fixed top-0 left-0 z-[200] py-4">
              <div
                className="flex items-center px-5 pb-5 border-b-[0.4px] border-[#545454] border-solid cursor-pointer"
                onClick={() => setServicesOpen(false)}
              >
                <LeftIcon className="h-5" />
                <h2 className="font-semibold ml-2">Services</h2>
              </div>
              <ul
                className="left-[-5px] py-[24px] px-4 mt-4"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="services-pane"
              >
                <li className="flex items-center gap-x-[17px] py-[5px] text-gray-600 mb-3 transition duration-[400ms] hover:bg-blue hover:bg-opacity-[0.05] cursor-pointer rounded-[6px]">
                  <Service1Icon className="w-10 h-10 ml-3" />
                  <div className="self-baseline">
                    <h3 className="font-semibold text-[15px]">
                      Freight Forwarding
                    </h3>
                    <p className="font-normal text-[11px]">
                      Easy Freight Forwarding Service
                    </p>
                  </div>
                </li>
                <li className="flex items-center gap-x-[17px] py-[5px] text-gray-600 mb-3 transition duration-[400ms] hover:bg-orange hover:bg-opacity-[0.1] cursor-pointer rounded-[6px]">
                  <Service2Icon className="w-10 h-10 ml-3" />
                  <div className="self-baseline">
                    <h3 className="font-semibold text-[15px]">
                      Freight Finance
                    </h3>
                    <p className="font-normal text-[11px]">
                      Get finance for your freight forwarding needs
                    </p>
                  </div>
                </li>
                <li className="flex items-center gap-x-[17px] py-[5px] text-gray-600 mb-3 transition duration-[400ms] hover:bg-blue hover:bg-opacity-[0.05] cursor-pointer rounded-[6px]">
                  <Service3Icon className="w-10 h-10 ml-3" />
                  <div className="self-baseline">
                    <h3 className="font-semibold text-[15px]">Haulage</h3>
                    <p className="font-normal text-[11px]">
                      Overland Logistics You Can Rely On
                    </p>
                  </div>
                </li>
                <li className="flex items-center gap-x-[17px] py-[5px] text-gray-600 mb-3 transition duration-[400ms] hover:bg-orange hover:bg-opacity-[0.1] cursor-pointer rounded-[6px]">
                  <Service4Icon className="w-10 h-10 ml-3" />
                  <div className="self-baseline">
                    <h3 className="font-semibold text-[15px]">Customs</h3>
                    <p className="font-normal text-[11px]">
                      Clear your cargo fast
                    </p>
                  </div>
                </li>
              </ul>
            </nav>
          ) : (
            <nav className="bg-white h-[100vh] w-[100vw] fixed top-0 left-0 z-[200] py-4 px-7 sm:px-8">
              <div className="flex justify-between">
                <a href="#">
                  <HeroIcon className="cursor-pointer w-20 sm:w-[unset]" />
                </a>
                <CancelIcon
                  className="h-8 translate-x-[4px]"
                  onClick={() => setDrawerOpen(false)}
                />
              </div>
              <ul className="gap-4 text-md flex flex-col mt-14">
                <li>
                  <a href="#">About</a>
                </li>
                <li
                  className="flex justify-between items-center mb-[-3px] cursor-pointer"
                  onClick={() => setServicesOpen(true)}
                >
                  <a href="#">Services</a>
                  <RightIcon className="h-8 translate-x-[7px]" />
                </li>
                <li>
                  <a href="#">Resources</a>
                </li>
                <li>
                  <a href="#">Partners</a>
                </li>
                <li>
                  <a href="#">Speak to us</a>
                </li>
                <li className="text-orange">
                  <a href="#">Sign in</a>
                </li>
                <li>
                  <Button
                    classes={'w-[100%] mx-auto sm:w-[200px] sm:max-[unset]'}
                  >
                    Sign up
                  </Button>
                </li>
              </ul>
            </nav>
          )}
        </>
      )}
      <nav className="sm:mx-4 lg:!mx-16 bg-white sm:rounded-2xl flex items-center py-4 px-7 lg:px-16 justify-between fixed sm:!static top-0 left-0 w-[100%] sm:!w-[unset]">
        <a href="#">
          <HeroIcon className="cursor-pointer w-20 sm:w-[unset]" />
        </a>
        <ul className="gap-x-8 text-sm hidden md:flex">
          <li>
            <a href="#">About</a>
          </li>
          <li className="relative">
            <a href="#" onClick={() => setServicesOpen((prev) => !prev)}>
              Services
            </a>
            {servicesOpen && (
              <ul
                className="origin-top-right hidden md:block absolute left-[-5px] py-[24px] w-[370px] md:w-[420px] px-3 mt-5 rounded-xl shadow-md bg-white"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="services-pane"
              >
                <li className="flex items-center gap-x-[17px] py-[5px] text-gray-600 mb-3 transition duration-[400ms] hover:bg-blue hover:bg-opacity-[0.05] cursor-pointer rounded-[6px]">
                  <Service1Icon className="w-10 h-10 ml-3" />
                  <div className="self-baseline">
                    <h3 className="font-semibold text-[15px]">
                      Freight Forwarding
                    </h3>
                    <p className="font-normal text-[11px]">
                      Easy Freight Forwarding Service
                    </p>
                  </div>
                </li>
                <li className="flex items-center gap-x-[17px] py-[5px] text-gray-600 mb-3 transition duration-[400ms] hover:bg-orange hover:bg-opacity-[0.1] cursor-pointer rounded-[6px]">
                  <Service2Icon className="w-10 h-10 ml-3" />
                  <div className="self-baseline">
                    <h3 className="font-semibold text-[15px]">
                      Freight Finance
                    </h3>
                    <p className="font-normal text-[11px]">
                      Get finance for your freight forwarding needs
                    </p>
                  </div>
                </li>
                <li className="flex items-center gap-x-[17px] py-[5px] text-gray-600 mb-3 transition duration-[400ms] hover:bg-blue hover:bg-opacity-[0.05] cursor-pointer rounded-[6px]">
                  <Service3Icon className="w-10 h-10 ml-3" />
                  <div className="self-baseline">
                    <h3 className="font-semibold text-[15px]">Haulage</h3>
                    <p className="font-normal text-[11px]">
                      Overland Logistics You Can Rely On
                    </p>
                  </div>
                </li>
                <li className="flex items-center gap-x-[17px] py-[5px] text-gray-600 mb-3 transition duration-[400ms] hover:bg-orange hover:bg-opacity-[0.1] cursor-pointer rounded-[6px]">
                  <Service4Icon className="w-10 h-10 ml-3" />
                  <div className="self-baseline">
                    <h3 className="font-semibold text-[15px]">Customs</h3>
                    <p className="font-normal text-[11px]">
                      Clear your cargo fast
                    </p>
                  </div>
                </li>
              </ul>
            )}
          </li>
          <li>
            <a href="#">Resources</a>
          </li>
          <li>
            <a href="#">Partners</a>
          </li>
          <li>
            <a href="#">Speak to us</a>
          </li>
        </ul>
        <div className="hidden md:flex items-center">
          <a href="#" className="mr-4">
            Sign in
          </a>
          <Button>Sign up</Button>
        </div>
        <MenuIcon
          className="md:hidden h-8"
          onClick={() => setDrawerOpen(true)}
        />
      </nav>
    </>
  );
};
