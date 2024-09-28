"use client";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

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

const ForchildrenSectionFour = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Show one slide at a time for a full image effect
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    className: "w-full",
  };

  return (
    <section id="forchildren-gallery" className="w-full">
      <div className="w-full mx-auto">
        <Slider {...settings} className="w-full">
          <div className="px-2">
            <Image
              src="/images/forchildren/Banner2.png" // Replace with actual image path
              alt="Gallery Image 1"
              width={0}
              height={0}
              sizes="10vw"
              className="w-[500px] object-contain"
              priority={true}
            />
          </div>
          <div className="px-2">
            <Image
              src="/images/forchildren/Banner2.png" // Replace with actual image path
              alt="Gallery Image 2"
              width={0}
              height={0}
              sizes="10vw"
              className="w-[500px] object-contain"
              priority={true}
            />
          </div>
          <div className="px-2">
            <Image
              src="/images/forchildren/Banner2.png" // Replace with actual image path
              alt="Gallery Image 3"
              width={0}
              height={0}
              sizes="10vw"
              className="w-[500px] object-contain"
              priority={true}
            />
          </div>
          <div className="px-2">
            <Image
              src="/images/forchildren/Banner2.png" // Replace with actual image path
              alt="Gallery Image 4"
              width={0}
              height={0}
              sizes="10vw"
              className="w-[500px] object-contain"
              priority={true}
            />
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default ForchildrenSectionFour;
