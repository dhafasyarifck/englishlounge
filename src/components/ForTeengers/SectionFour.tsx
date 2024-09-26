"use client";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'; // Use react-icons for arrow icons

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
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    // Add this to reduce space between slides
    className: "center",
    centerMode: true, // Allows slides to be closer to the center
    centerPadding: "100px", // Adjust padding between slides
  };

  return (
    <section id="forchildren-gallery" className="pt-16 md:pt-20 lg:pt-28">
      <div className="container mx-auto">
        <h2 className="text-center text-3xl font-bold mb-8">Galeri Foto</h2>

        <Slider {...settings} className="mx-4">
          <div className="px-2"> {/* Adjust margin or padding here to control space */}
            <Image
              src="/images/forchildren/Banner2.png" // Replace with actual image path
              alt="Gallery Image 1"
              width={300}
              height={200}
              className="rounded-lg"
            />
          </div>
          <div className="px-2"> {/* Adjust margin or padding here to control space */}
            <Image
              src="/images/forchildren/Banner2.png" // Replace with actual image path
              alt="Gallery Image 2"
              width={300}
              height={200}
              className="rounded-lg"
            />
          </div>
          <div className="px-2"> {/* Adjust margin or padding here to control space */}
            <Image
              src="/images/forchildren/Banner2.png" // Replace with actual image path
              alt="Gallery Image 3"
              width={300}
              height={200}
              className="rounded-lg"
            />
          </div>
          <div className="px-2"> {/* Adjust margin or padding here to control space */}
            <Image
              src="/images/forchildren/Banner2.png" // Replace with actual image path
              alt="Gallery Image 4"
              width={300}
              height={200}
              className="rounded-lg"
            />
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default ForchildrenSectionFour;
