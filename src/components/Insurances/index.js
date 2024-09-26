const Insurances = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen w-full bg-blueishGray">
      <h1 className="font-heroTitle text-4xl md:text-5xl text-center mb-12">
        Pick the insurance that suits your needs
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full px-4 md:px-12 lg:px-64">
        <div className="flex flex-col items-center text-center p-6 px-24">
          <div className="h-16 w-16 bg-cover bg-center mb-4" style={{ backgroundImage: 'url(/health-insurance-icon.png)' }}></div>
          <h3 className="font-heroTitle text-xl text-lightBlue mb-2">Health Insurance</h3>
          <p className="text-slate-400 font-textRegular">
            Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum is simply dummy.
          </p>
        </div>
        <div className="flex flex-col items-center text-center p-6 px-24">
          <div className="h-16 w-16 bg-cover bg-center mb-4" style={{ backgroundImage: 'url(/medicare-icon.png)' }}></div>
          <h3 className="font-heroTitle text-xl text-lightBlue mb-2">Medicare Supplement</h3>
          <p className="text-slate-400 font-textRegular">
            Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum is simply dummy.
          </p>
        </div>
        <div className="flex flex-col items-center text-center p-6 px-24">
          <div className="h-16 w-16 bg-cover bg-center mb-4" style={{ backgroundImage: 'url(/life-insurance-icon.png)' }}></div>
          <h3 className="font-heroTitle text-xl text-lightBlue mb-2">Life Insurance</h3>
          <p className="text-slate-400 font-textRegular">
            Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum is simply dummy.
          </p>
        </div>
        <div className="flex flex-col items-center text-center p-6 px-24">
          <div className="h-16 w-16 bg-cover bg-center mb-4" style={{ backgroundImage: 'url(/medicare-advantage-icon.png)' }}></div>
          <h3 className="font-heroTitle text-xl text-lightBlue mb-2">Medicare Advantage</h3>
          <p className="text-slate-400 font-textRegular">
            Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum is simply dummy.
          </p>
        </div>
        <div className="flex flex-col items-center text-center p-6 px-24">
          <div className="h-16 w-16 bg-cover bg-center mb-4" style={{ backgroundImage: 'url(/obamacare-icon.png)' }}></div>
          <h3 className="font-heroTitle text-xl text-lightBlue mb-2">ACA / Obamacare</h3>
          <p className="text-slate-400 font-textRegular">
            Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum is simply dummy.
          </p>
        </div>
        <div className="flex flex-col items-center text-center p-6 px-24">
          <div className="h-16 w-16 bg-cover bg-center mb-4" style={{ backgroundImage: 'url(/short-term-icon.png)' }}></div>
          <h3 className="font-heroTitle text-xl text-lightBlue mb-2">Short-Term Medical</h3>
          <p className="text-slate-400 font-textRegular">
            Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum is simply dummy.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Insurances;
