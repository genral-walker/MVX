import { Nav } from 'components';

export const Home = () => {
  return (
    <>
      <header className="bg-hero-bg bg-no-repeat bg-center bg-cover h-[100vh] w-[100%] xs:pt-3 px-3 xs:px-5">
        <div className="bg-orange h-[100%] w-[100%] rounded-[10px] bg-opacity-[0.04] xs:pt-2">
          <Nav />
        </div>
      </header>
    </>
  );
};
