"use client";

import Image from "next/image";
import { useState } from "react";
import dynamic from 'next/dynamic';

// Dynamically import the SectionTitle component
const SectionTitle = dynamic(() => import('../Common/SectionTitle'));
const Carousel = dynamic(() => import('./Carousel'));
import ModalVideo from "react-modal-video";

const Video = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <section className="relative z-10 py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="Capturing Our Class Activities"
          paragraph="Explore moments from our engaging classes for children, teens, and adults. These photos showcase the vibrant learning environment we create."
          center
          mb="80px"
        />

        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div
              className="mx-auto w-full overflow-hidden rounded-md"
              data-wow-delay=".15s"
            >
              <Carousel />
            </div>
          </div>
        </div>
      </div>



      <div className="absolute bottom-0 left-0 right-0 z-[-1] h-full w-full bg-[url(/images/video/shape.svg)] bg-cover bg-center bg-no-repeat"></div>
    </section>
  );
};

export default Video;
