"use client";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// Custom Next Arrow
const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="absolute top-1/2 transform -translate-y-1/2 right-4 z-10 p-2 bg-black rounded-full text-white cursor-pointer"
      onClick={onClick}
    >
      <FaChevronRight size={20} />
    </div>
  );
};

// Custom Prev Arrow
const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="absolute top-1/2 transform -translate-y-1/2 left-4 z-10 p-2 bg-black rounded-full text-white cursor-pointer"
      onClick={onClick}
    >
      <FaChevronLeft size={20} />
    </div>
  );
};

const Tutors = () => {
  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  // Testimonial data
  const tutors = [
    {
        name: "Dhafa Syarif C.K.",
        role: "Tutor English Lounge",
        image: "/images/tutors/Banner2.png", // Replace with actual path
      },
      {
        name: "Pandu Winata",
        role: "Tutor English Lounge",
        image: "/images/tutors/Banner2.png", // Replace with actual path
      },
      {
        name: "Cahyoga Bisma T",
        role: "Tutor English Lounge",
        image: "/images/tutors/Banner2.png", // Replace with actual path
      },
      {
        name: "Dr.M. Faiz",
        role: "Tutor English Lounge",
        image: "/images/tutors/Banner2.png", // Replace with actual path
      },
    // Add more as needed
  ];

  return (
    <section id="tutors" className="pt-16 md:pt-20 lg:pt-28">
      
        <h2 className="text-5xl font-bold text-center mb-10">Tutor Bahasa Inggris Dari English Lounge</h2>
        <Slider {...settings}>
          {tutors.map((tutor, index) => (
            <div key={index} className="px-4">
              <div className="relative bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 text-center p-4 rounded-xl">
                {/* Image positioned above card */}
                <div className="relative  w-40 h-40 mx-auto">
                <Image
                    src={tutor.image}
                    alt={tutor.name}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-full"
                  />
                </div>

                {/* Card Container */}
                <div className="bg-white shadow-md p-8 rounded-xl border border-gray-200 mt-12">
                  <h3 className="text-2xl font-bold text-gray-800">{tutor.name}</h3>
                  <p className="text-sm text-gray-600">{tutor.role}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
    
    </section>
  );
};

export default Tutors;
