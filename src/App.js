import { Button, Nav } from 'components';
import { ReactComponent as BlueRightIcon } from 'assets/icons/blue-right.svg';
import { ReactComponent as DownArrowIcon } from 'assets/icons/down-arrow.svg';

function App() {
  return (
    <header className="bg-orange bg-opacity-[0.04] w-[100vw] sm:pt-3 px-3 sm:px-5">
      <Nav />

      <section className="mt-20 mx-4 sm:mx-8 lg:mx-28 pt-8 sm:pt-0">
        <div>
          <h1 className="font-normal text-4xl sm:text-[70px] leading-[40px] sm:leading-[80px] font-head">
            Access <span className="text-blue">Fast Finance</span> <br className='hidden sm:block' />
            and <span className="text-orange">Easy Shipping</span> <br className='hidden sm:block' />
            Around The World
          </h1>
          <p className="mt-5 mb-9 text-sm sm:w-[53%]">
            MVX offers you freight financing, freight tracking, door to door
            shipping and more, all at the tip of your fingers. We eliminate the
            headache of global shipping for you.
          </p>
          <div className="flex">
            <span>
              <Button>Move Cargo</Button>
              <Button classes={'bg-inherit text-blue pl-[18px] sm:pl-inherit ml-0 sm:ml-3'}>
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
      </section>
    </header>
  );
}

export default App;
