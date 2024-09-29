import dynamic from "next/dynamic";

const MenuSection = dynamic(() => import("@/components/MenuSection"));
const ProgramKursus = dynamic(() => import("@/components/ProgramKursus"));
const Keunggulan = dynamic(() => import("@/components/Keunggulan"));
const Tutors = dynamic(() => import("@/components/Tutors"));
const AboutSectionOne = dynamic(() => import("@/components/About/AboutSectionOne"));
const AboutSectionTwo = dynamic(() => import("@/components/About/AboutSectionTwo"));
const Blog = dynamic(() => import("@/components/Blog"));
const Brands = dynamic(() => import("@/components/Brands"));
const ScrollUp = dynamic(() => import("@/components/Common/ScrollUp"));
const Contact = dynamic(() => import("@/components/Contact"));
const Features = dynamic(() => import("@/components/Features"));
const Hero = dynamic(() => import("@/components/Hero"));
const Pricing = dynamic(() => import("@/components/Pricing"));
const Testimonials = dynamic(() => import("@/components/Testimonials"));
const Video = dynamic(() => import("@/components/Video"));

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "English Lounge",
  description: "This is Curse For English",
  // other metadata
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <MenuSection />
      <ProgramKursus />
      <Keunggulan />
      <Tutors />
      {/*<Brands />*/}
      {/* <Testimonials />*/}
       {/*<Blog />*/}
     {/* <Contact /> */}
    </>
  );
}
