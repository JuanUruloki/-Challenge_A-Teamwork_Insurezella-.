const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row hero w-full h-96 xl:h-[70vh] bg-base-200 bg-gray">
      {/* Contenedor de Texto */}
      <div className="flex flex-col items-center justify-center pl-10 xl:px-14 2xl:px-14 py-8 2xl:py-0 h-full w-full md:w-1/2">
        <h1 className="text-xl lg:text-3xl 2xl:text-5xl text-start lg:text-left text-lightBlue font-heroTitle leading-none mb-4 lg:mb-4">
          YOUR GUIDE TO QUALITY COVERAGE
        </h1>
        <h3 className="text-xs lg:text-base xl:text-xl text-start font-textRegular text-slate-500 mb-6 lg:mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </h3>
        <div className="flex w-full justify-center lg:justify-start">
          <button className="flex items-center justify-evenly h-8 xl:h-14 w-36 xl:w-56 bg-cyan rounded-full text-white text-base xl:text-2xl font-texts">
            FIND PLANS
          </button>
        </div>
      </div>

      {/* Contenedor de Imagen */}
      <div
        className="flex h-full lg:h-full w-full lg:w-1/2 bg-cover bg-left bg-no-repeat"
        style={{ backgroundImage: "url('/hero-bg.jpg')" }}
      />
    </div>
  );
};

export default Hero;
