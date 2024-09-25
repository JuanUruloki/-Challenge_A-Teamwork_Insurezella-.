const Hero = () => {
  return (
    <div className="flex flex-row hero w-screen h-[70vh] bg-base-200 bg-gray">
      <div className="flex flex-col items-center justify-center px-52 ml-14 h-full w-1/2 ">
        <h1 className="text-5xl text-left text-lightBlue font-heroTitle mb-12">YOUR GUIDE TO QUALITY COVERAGE</h1>
        <h3 className="text-xl text-left font-textRegular text-slate-500 mb-12">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h3>
        <div className="flex w-full">
        <button className="flex items-center justify-evenly h-14 w-56 bg-cyan rounded-full text-white text-2xl font-bold">FIND PLANS</button>
        </div>
      </div>
      <div className="flex h-full w-1/2 bg-cover bg-top bg-no-repeat"
      style={{ backgroundImage:"url('/hero-bg.jpg')"}}
      />
    </div>
  );
};

export default Hero;
