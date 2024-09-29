import dynamic from "next/dynamic";

const MenuSection = dynamic(() => import("@/components/MenuSection"));
const SectionOne = dynamic(() => import("@/components/ForAdults/SectionOne"));
const SectionTwo = dynamic(() => import("@/components/ForAdults/SectionTwo"));
const SectionThree = dynamic(() => import("@/components/ForAdults/SectionThree"));
const SectionFour = dynamic(() => import("@/components/ForAdults/SectionFour"));
const SectionFive = dynamic(() => import("@/components/ForAdults/SectionFive"));
const SectionSix = dynamic(() => import("@/components/ForAdults/SectionSix"));
const SectionFaq = dynamic(() => import("@/components/ForAdults/SectionFaq"));
const Video = dynamic(() => import("@/components/ForAdults/Video"));
const Breadcrumb = dynamic(() => import("@/components/Common/Breadcrumb"));


import { Metadata } from "next";

export const metadata: Metadata = {
  title: "For Adults ",
  description: "Kursus Bahasa Inggris Untuk Dewasa dengan fasilitas lengkap dan biaya super terjangkau.",
  // other metadata
};

const ForAdultsPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="For Adults"
        description="Join our English Lounge for adults and improve your fluency in a relaxed, engaging setting. Practice speaking, boost your confidence, and connect with others while enhancing your communication skills"
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

export default ForAdultsPage;
