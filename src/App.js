import { Button, Nav } from 'components';
import { ReactComponent as BlueRightIcon } from 'assets/icons/blue-right.svg';
import { ReactComponent as DownArrowIcon } from 'assets/icons/down-arrow.svg';
import { ReactComponent as PopupIcon } from 'assets/icons/popup.svg';
import { ReactComponent as PlayIcon } from 'assets/icons/play.svg';

function App() {
  return (
    <>
      <header className="bg-orange bg-opacity-[0.04] w-[100vw] sm:pt-3 px-3 sm:px-5 mb-24 pb-16">
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
          <PopupIcon className="fixed top-[82vh] right-12 w-[70px] cursor-pointer" />

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

      <section className="bg-blue bg-opacity-[0.03] px-4 sm:px-8 lg:px-28 pt-16 pb-12 text-sm">
        <div className="flex flex-col gap-y-6 md:gap-y-0 md:flex-row md:justify-between px-5 md:px-0">
          <span className='md:basis-[70%] text-center md:text-left'>
            <h2 className='font-bold text-[20px] md:text-[25px] mb-4 leading-9'>Ready to Unlock Supply Chain Opportunities?</h2>
            <p>
              Join 300+ top brands that have trusted us with their freight
              forwarding
            </p>
          </span>
          <Button btnType={'secondary'} classes={'self-center'}>Get started</Button>
        </div>
      </section>
    </>
  );
}

export default App;
