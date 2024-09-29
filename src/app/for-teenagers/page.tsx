import dynamic from "next/dynamic";

const MenuSection = dynamic(() => import("@/components/MenuSection"));
const SectionOne = dynamic(() => import("@/components/ForTeengers/SectionOne"));
const SectionTwo = dynamic(() => import("@/components/ForTeengers/SectionTwo"));
const SectionThree = dynamic(() => import("@/components/ForTeengers/SectionThree"));
const SectionFour = dynamic(() => import("@/components/ForTeengers/SectionFour"));
const SectionFive = dynamic(() => import("@/components/ForTeengers/SectionFive"));
const SectionSix = dynamic(() => import("@/components/ForTeengers/SectionSix"));
const SectionFaq = dynamic(() => import("@/components/ForTeengers/SectionFaq"));
const Video = dynamic(() => import("@/components/ForTeengers/Video"));
const Breadcrumb = dynamic(() => import("@/components/Common/Breadcrumb"));


import { Metadata } from "next";

export const metadata: Metadata = {
  title: "For Teenegers | Free Next.js Template for Startup and SaaS",
  description: "This is For Childrenpage",
  // other metadata
};

const ForTeenegersPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="For Teenegers"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis dapibus libero."
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

export default ForTeenegersPage;
