import { FaArrowRightLong } from "react-icons/fa6";
import Link from "next/link";

const Plans = () => {
  return (
    <div className="felx flex-col w-full h-[160vh]">
      <div className="flex flex-row h-[60vh] w-auto items-center justify-center m-20">
        <div
          className="h-full w-1/2 bg-contain bg-center bg-no-repeat"
          style={{ backgroundImage: "url(/protecting.png)" }}
        />
        <div className="flex flex-col items-start justify-evenly h-full w-1/2 px-16">
          <h1 className="text-6xl font-heroTitle">
            Protecting people, one policy at a time.
          </h1>
          <p className="text-xl font-textRegular text-slate-500">
            We are committed to delivering the higest standard of protection,
            tailored to meet the unique needs of each individual and family. Our
            dedicated team of professionals works tirelessly to offer
            comprehensive insurance solutions that not only safeguard your
            assets but also offer you the support and assistance you need in
            times of uncertainty.
          </p>
          <button className="h-12 w-72 text-lg font-textRegular text-white rounded-full bg-lightBlue">
            LEARN MORE
          </button>
        </div>
      </div>
      <div className="flex flex-col w-auto h-full items-center justify-center">
        <h2 className="text-6xl font-heroTitle m-10">We're here to help</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-32 w-full h-full px-4 md:px-12 lg:px-64 bg-white">
          <div className="flex flex-col">
            <div
              className="w-full h-[510px] bg-cover bg-center"
              style={{ backgroundImage: "url(/doctor.jpg)" }}
            />
            <div className="flex flex-col justify-evenly w-full h-full">
              <h3 className="font-heroTitle text-3xl m-10">Health Insurance</h3>
              <p className="font-textRegular text-xl text-slate-400 mx-10">
                Get the Coverage You Nedd Today. Speak with an Agent to Learn
                about Our Plan Options Now. Our Health Insurance Agency Provides
                You with Plans That Meet Your Needs.
              </p>
              <Link
                href={"/"}
                className="flex items-center text-xl font-textRegular text-lightBlue mx-10"
              >
                Compare plans <FaArrowRightLong />
              </Link>
            </div>
          </div>
          <div className="flex flex-col">
            <div
              className="w-full h-[510px] bg-cover bg-center"
              style={{ backgroundImage: "url(/family-together.jpg)" }}
            />
            <div className="flex flex-col justify-evenly w-full h-full">
              <h3 className="font-heroTitle text-3xl m-10">Life Insurance</h3>
              <p className="font-textRegular text-xl text-slate-400 mx-10">
                Life insurance allows you to save and build wealth over time
                while also protecting your family should the worst happen
              </p>
              <Link
                href={"/"}
                className="flex items-center text-xl font-textRegular text-lightBlue mx-10"
              >
                Compare plans <FaArrowRightLong />
              </Link>
            </div>
          </div>
          <div className="flex flex-col">
            <div
              className="w-full h-[510px] bg-cover bg-center"
              style={{ backgroundImage: "url(/medical-appointment.jpg)" }}
            />
            <div className="flex flex-col justify-evenly w-full h-full">
              <h3 className="font-heroTitle text-3xl m-10">
                Medicare Supplement
              </h3>
              <p className="font-textRegular text-xl text-slate-400 mx-10">
                With Medicare supplements, you won't have medical cost
                surprises, wich could wreck your budget. Medicare supplements
                can help protect your finances from high costs, wich can destroy
                your nest egg.
              </p>
              <Link
                href={"/"}
                className="flex items-center text-xl font-textRegular text-lightBlue mx-10"
              >
                Compare plans <FaArrowRightLong />
              </Link>
            </div>
          </div>
          <div className="flex flex-col">
            <div
              className="w-full h-[510px] bg-cover bg-center"
              style={{ backgroundImage: "url(/man-signing.jpg)" }}
            />
            <div className="flex flex-col justify-evenly w-full h-full">
              <h3 className="font-heroTitle text-3xl m-10">
                Medicare Advantage
              </h3>
              <p className="font-textRegular text-xl text-slate-400 mx-10">
                Medicare Advantage Plans cover all Original Medicare services,
                and some offer drug, vision, hearing, dental, or wellness
                coverage.
              </p>
              <Link
                href={"/"}
                className="flex items-center text-xl font-textRegular text-lightBlue mx-10"
              >
                Compare plans <FaArrowRightLong />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Plans;
