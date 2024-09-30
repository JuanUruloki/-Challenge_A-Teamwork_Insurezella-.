/**
 * The Products component in JavaScript uses React and the react-slick library to display insurance
 * product cards in a slider format with responsive design.
 * @returns The `Products` component is being returned. It contains a layout with multiple sections
 * including a slider for displaying product cards, a section with individual product cards, and a
 * section with information about insurance plans and services.
 */
"use client";
import { useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"; 

const Products = () => {
  const cards = [
    { id: 1, image: "/medicare.jpg", title: "Health insurance" },
    { id: 2, image: "/medicare-advantage.jpg", title: "Medicare supplement" },
    { id: 3, image: "/advantage.jpg", title: "Medicare Advantage" },
    { id: 4, image: "/life.jpg", title: "Life insurance" },
    { id: 5, image: "/obamacare.jpg", title: "ACA obamacare" },
  ];

  const settings = {
    dots: true,
    customPaging: (i) => (
      <div className="w-3 h-3 rounded-full bg-lightBlue mt-6 cursor-pointer hover:bg-darkBlue" />
    ),
    dotsClass: "slick-dots flex space-x-2",
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="flex flex-col items-center justify-center w-full h-[120vh]">
      <div className="block 2xl:hidden w-[80vw] my-16">
  <Slider {...settings}>
    {cards.map((card) => (
      <div
        key={card.id}
        className=" flex-col  h-44 lg:h-64 xl:h-72 bg-white rounded-lg shadow-cards p-4 !flex !items-center !justify-center"
      >
        <div
          className="h-14 w-14 lg:h-16 lg:w-16 xl:h-20 xl:w-20 bg-cover bg-center mb-4"
          style={{ backgroundImage: `url(${card.image})` }}
        />
        <p className="text-lg 2xl:text-xl font-semibold text-center">{card.title}</p>
      </div>
    ))}
  </Slider>
</div>

      <div className="hidden 2xl:flex flex-row items-center justify-center h-72 w-full my-16">
        {cards.map((card) => (
          <div key={card.id} className="flex flex-col items-center justify-center h-full w-52 mx-8 rounded-lg bg-white shadow-cards">
            <div
              className="flex h-20 w-20 bg-cover bg-center"
              style={{ backgroundImage: `url(${card.image})` }}
            />
            <p className="font-heroTitle text-xl text-center px-10">{card.title}</p>
          </div>
        ))}
      </div>

      <div className="flex flex-col 2xl:flex-row w-auto h-[1000px] 2xl:h-full m-20">
        <div
          className="flex flex-col h-full w-1/2 bg-contain bg-right bg-no-repeat"
          style={{ backgroundImage: "url(/committed-help.png)" }}
        />
        <div className="flex flex-col items-start justify-evenly h-full 2xl:w-1/2 ml-28 px-28 2xl:px-16">
          <h2 className="text-lg lg:text-2xl xl:text-4xl 2xl:text-6xl font-heroTitle">
            Committed to help you find the right plan
          </h2>
          <p className="text-xs lg:text-base 2xl:text-xl font-textRegular text-slate-500">
            Insurance is an important financial tool that can help you protect
            yourself and your loved ones from financial losses in the event of
            an unexpected event. It is important to consider your individual
            needs and circumstances when choosing the right insurance coverage
            for you and your family.
          </p>
          <button className="h-7 w-48 xl:h-10 xl:w-64 2xl:h-12 2xl:w-72 text-xs xl:text-base 2xl:text-lg font-textRegular text-white rounded-full bg-lightBlue hover:bg-midBlue">
            ABOUT INSUREZELLA
          </button>
          <div className="flex flex-row w-full h-1/6">
            <div className="flex flex-row items-center w-1/2 h-full">
              <div
                className="w-1/2 h-5 lg:h-10 xl:h-14 2xl:h-16 bg-contain bg-center bg-no-repeat"
                style={{ backgroundImage: "url(/money.jpg)" }}
              />
              <p className="font-heroTitle text-xs lg:text-sm xl:text-base 2xl:text-xl text-start pr-4">
                Save Money Compare Plans
              </p>
            </div>
            <div className="flex flex-row items-center w-1/2 h-full">
              <div
                className="w-1/2 h-5 lg:h-10 xl:h-14 2xl:h-16 bg-contain bg-center bg-no-repeat"
                style={{ backgroundImage: "url(/agents.jpg)" }}
              />
              <p className="font-heroTitle text-xs lg:text-sm xl:text-base 2xl:text-xl text-start pr-4">
                Licensed Agents
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
