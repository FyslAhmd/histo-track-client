import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slider1 from "../assets/slider1.jpg";
import slider2 from "../assets/slider2.jpg";
import slider3 from "../assets/slider3.jpg";
import slider4 from "../assets/slider4.webp";

const HomeSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 1,
    cssEase: "linear",
  };

  const slides = [
    {
      title: "The Majestic Taj Mahal",
      text: "An eternal symbol of love and a UNESCO World Heritage site located in India.",
      image: slider1,
    },
    {
      title: "The Great Wall of China",
      text: "A marvel of engineering stretching thousands of miles, echoing stories of ancient dynasties.",
      image: slider2,
    },
    {
      title: "The Egyptian Pyramids",
      text: "Mystical wonders of the ancient world, built with incredible precision and purpose.",
      image: slider3,
    },
    {
      title: "Machu Picchu",
      text: "A breathtaking Incan citadel nestled high in the Andes Mountains of Peru.",
      image: slider4,
    },
  ];

  return (
    <div className="w-full">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="px-2">
            <div
              className="relative h-[60vh] bg-cover bg-center rounded-xl overflow-hidden"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div
                className="absolute inset-0 flex flex-col justify-center items-center text-white p-4 text-center"
                style={{ backgroundColor: "rgba(0, 0, 0, 0.55)" }}
              >
                <h2 className="text-4xl font-bold mb-4">{slide.title}</h2>
                <p className="mb-6 max-w-xl">{slide.text}</p>
                <button className="bg-white text-black font-bold px-6 py-2 rounded hover:bg-gray-200">
                  Explore More
                </button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HomeSlider;
