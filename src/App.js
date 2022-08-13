import { Button, Nav } from 'components';
import { ReactComponent as BlueRightIcon } from 'assets/icons/blue-right.svg';
import { ReactComponent as DownArrowIcon } from 'assets/icons/down-arrow.svg';
import { ReactComponent as PopupIcon } from 'assets/icons/popup.svg';
import { ReactComponent as HeroIcon } from 'assets/icons/hero-icon.svg';
import { ReactComponent as PlayIcon } from 'assets/icons/play.svg';
import { ReactComponent as FooterIcon } from 'assets/icons/footer-icon.svg';
import { ReactComponent as FbIcon } from 'assets/icons/fb.svg';
import { ReactComponent as MediumIcon } from 'assets/icons/medium.svg';
import { ReactComponent as Instacon } from 'assets/icons/insta.svg';
import { ReactComponent as Twittercon } from 'assets/icons/twitter.svg';
import { ReactComponent as LinkedInIcon } from 'assets/icons/linkedIn.svg';

function App() {
  return (
    <>
      <header className="bg-orange bg-opacity-[0.04] w-[100vw] sm:pt-3 px-3 sm:px-5 mb-20 pb-16">
        <Nav />

        <section className="mt-20 mx-4 sm:mx-8 lg:mx-28 pt-16 sm:pt-0 text-sm">
          <div>
            <h1 className="font-normal text-4xl sm:text-[70px] leading-[40px] sm:leading-[80px] font-head">
              Access <span className="text-blue">Fast Finance</span>{' '}
              <br className="hidden sm:block" />
              and <span className="text-orange">Easy Shipping</span>{' '}
              <br className="hidden sm:block" />
              Around The World
            </h1>
            <p className="mt-5 mb-9 sm:w-[53%]">
              MVX offers you freight financing, freight tracking, door to door
              shipping and more, all at the tip of your fingers. We eliminate
              the headache of global shipping for you.
            </p>
            <div className="flex">
              <span>
                <Button>Move Cargo</Button>
                <Button
                  classes={
                    'bg-inherit !text-blue pl-[18px] sm:pl-inherit ml-0 sm:ml-3'
                  }
                >
                  <span className="flex">
                    Get Financed <BlueRightIcon className="h-4 self-center" />
                  </span>
                </Button>
              </span>
              <span className="gap-y-3 items-center cursor-pointer w-max hidden sm:flex flex-col translate-x-[15vw] sm:translate-x-[27vw] md:translate-x-[40vw] xl:translate-x-[47vw] translate-y-[-38px]">
                <DownArrowIcon />
                Scroll down
              </span>
            </div>
          </div>
          <PopupIcon className="fixed top-[82vh] right-8 w-[70px] cursor-pointer" />

          <div className="mt-16 sm:mt-10 mb-16">
            <div className="bg-hero-bg bg-no-repeat bg-cover bg-center h-[190px] sm:h-[300px] md:h-[374px] lg:h-[440px] w-[100%] rounded-md grid place-items-center">
              <PlayIcon className="h-14 translate-x-[-10px]" />
            </div>
          </div>

          <div className="w-100%">
            <p className="text-[18px]">Trusted by global companies</p>
            <div className="flex justify-between mt-7 flex-wrap gap-x-7 gap-y-4">
              <span className="basis-[42%] md:basis-[unset]">
                <h3 className="text-blue mb-1 font-bold text-lg">300+</h3>
                <p>Companies serviced</p>
              </span>
              <span className="basis-[42%] md:basis-[unset]">
                <h3 className="text-blue mb-1 font-bold text-lg">
                  $2.3million+
                </h3>
                <p>Generated for partners in revenue</p>
              </span>
              <span className="basis-[42%] md:basis-[unset]">
                <h3 className="text-blue mb-1 font-bold text-lg">5000+</h3>
                <p>Containers delivered</p>
              </span>
              <span className="basis-[42%] md:basis-[unset]">
                <h3 className="text-blue mb-1 font-bold text-lg">5000+</h3>
                <p>Trade transactions financed</p>
              </span>
              <span className="basis-[42%] md:basis-[unset]">
                <h3 className="text-blue mb-1 font-bold text-lg">80%</h3>
                <p>Of our customers have returned again</p>
              </span>
            </div>
          </div>
        </section>
      </header>

      <section className="bg-blue bg-opacity-[0.03] px-8 lg:px-28 pt-16 text-sm pb-8">
        <div className="flex flex-col gap-y-6 md:gap-y-0 md:flex-row md:justify-between px-5 md:px-0">
          <span className="md:basis-[70%] text-center md:text-left">
            <h2 className="font-bold text-[20px] md:text-[25px] mb-4 leading-9">
              Ready to Unlock Supply Chain Opportunities?
            </h2>
            <p>
              Join 300+ top brands that have trusted us with their freight
              forwarding
            </p>
          </span>
          <Button btnType={'secondary'} classes={'self-center'}>
            Get started
          </Button>
        </div>

        <footer className="mt-16 sm:mt-24">
          <div className="flex flex-wrap justify-between gap-y-7">
            <span className="basis-[23%] hidden sm:block">
              <a href="#">
                <HeroIcon className="cursor-pointer w-20 sm:w-[unset] mb-4" />
              </a>
              <p className="mb-1 font-semibold">T: +2347040119703</p>
              <p className="font-semibold">E: hello@mvx.trade</p>
              <p className="font-semibold my-2">Austin:</p>
              <p>
                7000 North Mopac Expressway, <br />
                Austin, TX, 78731 <br />
                T: +1 512 514 6221
              </p>
              <p className="font-semibold mt-2 mb-1">Lagos:</p>
              <p>
                19 Dr. S Ezekuse Close, <br />
                Lekki Phase 1, Lagos
              </p>
            </span>
            <span className="basis-[50%] md:basis-0 translate-y-4">
              <h4 className="text-blue font-semibold text-[16px] mb-4">Home</h4>
              <ul className="flex flex-col gap-y-4 font-medium sm:w-max">
                <li className="cursor-pointer">Home</li>
                <li className="cursor-pointer">About</li>
                <li className="cursor-pointer">Partners</li>
                <li className="cursor-pointer">Careers</li>
              </ul>
            </span>
            <span className="basis-[50%] md:basis-0 translate-y-4">
              <h4 className="text-blue font-semibold text-[16px] mb-4">
                Services
              </h4>
              <ul className="flex flex-col gap-y-4 font-medium sm:w-max">
                <li className="cursor-pointer">Freight Forwarding</li>
                <li className="cursor-pointer">Customs</li>
                <li className="cursor-pointer">Trade Finance</li>
                <li className="cursor-pointer">Land Haulage</li>
                <li className="cursor-pointer">Track Shipment</li>
              </ul>
            </span>
            <span className="basis-[50%] md:basis-[10%] translate-y-4">
              <h4 className="text-blue font-semibold text-[16px] mb-4 sm:w-max">
                Resources
              </h4>
              <ul className="flex flex-col gap-y-4 font-medium">
                <li className="cursor-pointer">Help & Support</li>
                <li className="cursor-pointer">Feedback</li>
                <li className="cursor-pointer">Referral</li>
              </ul>
            </span>
            <span className="basis-[50%] md:basis-0 translate-y-4">
              <h4 className="text-blue font-semibold text-[16px] mb-4">
                Legal
              </h4>
              <ul className="flex flex-col gap-y-4 font-medium sm:w-max">
                <li className="cursor-pointer">Privacy policy</li>
                <li className="cursor-pointer">Cookie policy</li>
                <li className="cursor-pointer">Terms & Conditions</li>
              </ul>
            </span>
          </div>

          <div className=" sm:hidden mt-20">
            <span className="flex justify-between">
              <p className="font-semibold basis-2/4">T: +2347040119703</p>
              <p className="font-semibold basis-2/4">E: hello@mvx.trade</p>
            </span>
            <div className="text-center">
              <p className="font-semibold mt-3 mb-2">Lagos:</p>
              <p>
                19 Dr. S Ezekuse Close, <br />
                Lekki Phase 1, Lagos
              </p>
            </div>
            <div className="text-center border-b-[1px] border-[#000] pb-10">
              <p className="font-semibold mt-3 mb-2">Austin:</p>
              <p>
                7000 North Mopac Expressway, <br />
                Austin, TX, 78731 <br />
                T: +1 512 514 6221
              </p>
            </div>
          </div>

          <div className="flex justify-between mt-6 sm:mt-16 items-center flex-col sm:flex-row gap-y-5 sm:gap-y-0">
            <span className="flex items-center flex-col sm:flex-row gap-y-3 sm:gap-y-0">
              <FooterIcon className="cursor-pointer w-20 sm:w-[unset]" />
              <p className="self-end ml-3">
                &copy; MVXchange Technologies Limited
              </p>
            </span>
            <span className="flex gap-x-3 cursor-pointer">
              <FbIcon />
              <Instacon />
              <MediumIcon />
              <LinkedInIcon />
              <Twittercon />
            </span>
          </div>
        </footer>
      </section>
    </>
  );
}

export default App;
