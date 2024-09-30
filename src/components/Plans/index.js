/**
 * The `Plans` component in JavaScript renders insurance plan information with images and descriptions
 * in a responsive layout using React and React Slick slider.
 * @returns The `Plans` component is being returned, which contains a section for displaying insurance
 * plans with images, titles, descriptions, and a link to compare plans. The component includes
 * responsive design for different screen sizes, utilizing the `Slider` component from `react-slick`
 * for smaller screens. The component also includes a section with a background image and text
 * introducing the insurance services offered.
 */
"use client";
import { useState } from "react";
import Slider from "react-slick";
import { FaArrowRightLong } from "react-icons/fa6";
import Link from "next/link";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Plans = () => {
  const plans = [
    {
      title: "Health Insurance",
      description: "Get the Coverage You Need Today. Speak with an Agent to Learn about Our Plan Options Now.",
      image: "/doctor.jpg",
    },
    {
      title: "Life Insurance",
      description: "Life insurance allows you to save and build wealth over time while also protecting your family.",
      image: "/family-together.jpg",
    },
    {
      title: "Medicare Supplement",
      description: "With Medicare supplements, you won't have medical cost surprises, which could wreck your budget.",
      image: "/medical-appointment.jpg",
    },
    {
      title: "Medicare Advantage",
      description: "Medicare Advantage Plans cover all Original Medicare services, and some offer additional coverage.",
      image: "/man-signing.jpg",
    },
  ];

  const settings = {
    dots: true,
    customPaging: (i) => (
      <div className="w-3 h-3 rounded-full bg-lightBlue mt-6 cursor-pointer hover:bg-darkBlue" />
    ),
    dotsClass: "slick-dots flex space-x-2", 
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="flex flex-col w-full min-h-screen ">
      <div className="flex flex-col 2xl:flex-row w-auto h-[600px] m-20 ">
        <div
          className="flex flex-col h-full w-1/2 bg-contain bg-right bg-no-repeat"
          style={{ backgroundImage: "url(/protecting.png)" }}
        />
        <div className="flex flex-col items-start justify-evenly h-full 2xl:w-1/2 ml-28 px-28 2xl:px-16">
          <h2 className="text-lg lg:text-2xl xl:text-4xl 2xl:text-6xl font-heroTitle">
            Protecting people, one policy at a time.
          </h2>
          <p className="text-xs lg:text-base 2xl:text-xl font-textRegular text-slate-500">
            We are committed to delivering the highest standard of protection,
            tailored to meet the unique needs of each individual and family. Our
            dedicated team of professionals works tirelessly to offer
            comprehensive insurance solutions that not only safeguard your
            assets but also offer you the support and assistance you need in
            times of uncertainty.
          </p>
          <button className="h-7 w-48 xl:h-10 xl:w-64 2xl:h-12 2xl:w-72 text-xs xl:text-base 2xl:text-lg font-textRegular text-white rounded-full bg-lightBlue hover:bg-midBlue">
            LEARN MORE
          </button>
        </div>
      </div>
      <div className="hidden 2xl:flex flex-col w-full items-center justify-center py-20">
        <h2 className="text-3xl 2xl:text-6xl font-heroTitle m-10">We're here to help</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-32 w-full px-4 md:px-12 xl:px-64 bg-white">
          {plans.map((plan, index) => (
            <div key={index} className="flex flex-col mb-10 md:mb-0">
              <div
                className="w-full h-[190px] 2xl:h-[510px] bg-cover bg-center"
                style={{ backgroundImage: `url(${plan.image})` }}
              />
              <div className="flex flex-col 2xl:justify-evenly w-full h-full">
                <h3 className="font-heroTitle text-xl 2xl:text-3xl m-8 2xl:m-10">{plan.title}</h3>
                <p className="font-textRegular text-sm 2xl:text-xl text-slate-400 mx-8 2xl:mx-10">
                  {plan.description}
                </p>
                <Link
                  href={"/"}
                  className="flex items-center text-sm 2xl:text-xl font-textRegular text-lightBlue hover:text-midBlue mx-8 2xl:mx-10"
                >
                  Compare plans<FaArrowRightLong />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex 2xl:hidden flex-col w-full items-center justify-center py-20">
        <h2 className="text-3xl 2xl:text-6xl font-heroTitle m-10">We're here to help</h2>
        <div className="w-full px-4 bg-white">
          <Slider {...settings}>
            {plans.map((plan, index) => (
              <div key={index} className="flex flex-col p-4">
                <div
                  className="w-full h-[190px] 2xl:h-[510px] bg-cover bg-center"
                  style={{ backgroundImage: `url(${plan.image})` }}
                />
                <div className="flex flex-col 2xl:justify-evenly w-full h-full">
                  <h3 className="font-heroTitle text-xl 2xl:text-3xl m-4">{plan.title}</h3>
                  <p className="font-textRegular text-sm 2xl:text-xl text-slate-400 mx-4">
                    {plan.description}
                  </p>
                  <Link
                    href={"/"}
                    className="flex items-center text-sm 2xl:text-xl font-textRegular text-lightBlue hover:text-midBlue mx-4"
                  >
                    Compare plans <FaArrowRightLong />
                  </Link>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Plans;
