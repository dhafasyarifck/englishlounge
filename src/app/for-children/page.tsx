import dynamic from "next/dynamic";

const MenuSection = dynamic(() => import("@/components/MenuSection"));
const SectionOne = dynamic(() => import("@/components/ForChildren/SectionOne"));
const SectionTwo = dynamic(() => import("@/components/ForChildren/SectionTwo"));
const SectionThree = dynamic(() => import("@/components/ForChildren/SectionThree"));
const SectionFour = dynamic(() => import("@/components/ForChildren/SectionFour"));
const SectionFive = dynamic(() => import("@/components/ForChildren/SectionFive"));
const SectionSix = dynamic(() => import("@/components/ForChildren/SectionSix"));
const SectionFaq = dynamic(() => import("@/components/ForChildren/SectionFaq"));
const Video = dynamic(() => import("@/components/ForChildren/Video"));
const Breadcrumb = dynamic(() => import("@/components/Common/Breadcrumb"));


import { Metadata } from "next";

export const metadata: Metadata = {
  title: "For Children | Free Next.js Template for Startup and SaaS",
  description: "This is For Childrenpage",
  // other metadata
};

const ForchildrenPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="For Children"
        description="Welcome to English Lounge for Children! Here, we believe that learning English should be fun and engaging. Our program is specifically designed for children, combining games, music, and interactive activities that not only develop their language skills but also build their confidence. Join us for an exciting learning adventure!"
      />
      <SectionOne />
      <MenuSection />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionSix />
      <Video />
      <SectionFive />
      <SectionFaq />
    </>
  );
};

export default ForchildrenPage;
