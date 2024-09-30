import { FaArrowRightLong } from "react-icons/fa6";
import Link from "next/link";

const Plans = () => {
  return (
    <div className="flex flex-col w-full min-h-screen">
      <div className="flex flex-col xl:flex-row w-auto h-[600px] m-20">
        <div
          className="flex flex-col h-full w-1/2 bg-contain bg-right bg-no-repeat"
          style={{ backgroundImage: "url(/protecting.png)" }}
        />
        <div className="flex flex-col items-start justify-evenly h-full 2xl:w-1/2 ml-28 px-28 2xl:px-16">
          <h2 className="text-3xl 2xl:text-6xl font-heroTitle">
            Protecting people, one policy at a time.
          </h2>
          <p className="text-xs 2xl:text-xl font-textRegular text-slate-500">
            We are committed to delivering the higest standard of protection,
            tailored to meet the unique needs of each individual and family. Our
            dedicated team of professionals works tirelessly to offer
            comprehensive insurance solutions that not only safeguard your
            assets but also offer you the support and assistance you need in
            times of uncertainty.
          </p>
          <button className="h-7 w-48 2xl:h-12 2xl:w-72 text-xs 2xl:text-lg font-textRegular text-white rounded-full bg-lightBlue">
            LEARN MORE
          </button>
        </div>
      </div>
      <div className="flex flex-col w-full items-center justify-center py-20">
        <h2 className="text-3xl 2xl:text-6xl font-heroTitle m-10">We're here to help</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-32 w-full px-4 md:px-12 xl:px-64 bg-white">
          <div className="flex flex-col mb-10 md:mb-0">
            <div
              className="w-full h-[190px] 2xl:h-[510px] bg-cover bg-center"
              style={{ backgroundImage: "url(/doctor.jpg)" }}
            />
            <div className="flex flex-col 2xl:justify-evenly w-full h-full">
              <h3 className="font-heroTitle text-xl 2xl:text-3xl m-8 2xl:m-10">Health Insurance</h3>
              <p className="font-textRegular text-sm 2xl:text-xl text-slate-400 mx-8 2xl:mx-10">
                Get the Coverage You Need Today. Speak with an Agent to Learn
                about Our Plan Options Now. Our Health Insurance Agency Provides
                You with Plans That Meet Your Needs.
              </p>
              <Link
                href={"/"}
                className="flex items-center text-sm 2xl:text-xl font-textRegular text-lightBlue mx-8 2xl:mx-10"
              >
                Compare plans<FaArrowRightLong />
              </Link>
            </div>
          </div>
          <div className="flex flex-col mb-10 md:mb-0">
            <div
              className="w-full h-[190px] 2xl:h-[510px] bg-cover bg-center"
              style={{ backgroundImage: "url(/family-together.jpg)" }}
            />
            <div className="flex flex-col 2xl:justify-evenly w-full h-full">
              <h3 className="font-heroTitle text-xl 2xl:text-3xl m-8 2xl:m-10">Life Insurance</h3>
              <p className="font-textRegular text-sm 2xl:text-xl text-slate-400 mx-8 2xl:mx-10">
                Life insurance allows you to save and build wealth over time
                while also protecting your family should the worst happen
              </p>
              <Link
                href={"/"}
                className="flex items-center text-sm 2xl:text-xl font-textRegular text-lightBlue mx-8 2xl:mx-10"
              >
                Compare plans<FaArrowRightLong />
              </Link>
            </div>
          </div>
          <div className="flex flex-col mb-10 md:mb-0">
            <div
              className="w-full h-[190px] 2xl:h-[510px] bg-cover bg-center"
              style={{ backgroundImage: "url(/medical-appointment.jpg)" }}
            />
            <div className="flex flex-col 2xl:justify-evenly w-full h-full">
              <h3 className="font-heroTitle text-xl 2xl:text-3xl m-8 2xl:m-10">
                Medicare Supplement
              </h3>
              <p className="font-textRegular text-sm 2xl:text-xl text-slate-400 mx-8 2xl:mx-10">
                With Medicare supplements, you won't have medical cost
                surprises, which could wreck your budget. Medicare supplements
                can help protect your finances from high costs, which can destroy
                your nest egg.
              </p>
              <Link
                href={"/"}
                className="flex items-center text-sm 2xl:text-xl font-textRegular text-lightBlue mx-8 2xl:mx-10"
              >
                Compare plans <FaArrowRightLong />
              </Link>
            </div>
          </div>
          <div className="flex flex-col mb-10 md:mb-0">
            <div
              className="w-full h-[190px] 2xl:h-[510px] bg-cover bg-center"
              style={{ backgroundImage: "url(/man-signing.jpg)" }}
            />
            <div className="flex flex-col 2xl:justify-evenly w-full h-full">
              <h3 className="font-heroTitle text-xl 2xl:text-3xl m-8 2xl:m-10">
                Medicare Advantage
              </h3>
              <p className="font-textRegular text-sm 2xl:text-xl text-slate-400 mx-8 2xl:mx-10">
                Medicare Advantage Plans cover all Original Medicare services,
                and some offer drug, vision, hearing, dental, or wellness
                coverage.
              </p>
              <Link
                href={"/"}
                className="flex items-center text-sm 2xl:text-xl font-textRegular text-lightBlue mx-8 2xl:mx-10"
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
