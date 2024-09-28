import dynamic from "next/dynamic";

const AboutSectionOne = dynamic(() => import("@/components/About/AboutSectionOne"));
const AboutSectionTwo = dynamic(() => import("@/components/About/AboutSectionTwo"));
const SectionOne = dynamic(() => import("@/components/ForAdults/SectionOne"));
const SectionTwo = dynamic(() => import("@/components/ForAdults/SectionTwo"));
const SectionThree = dynamic(() => import("@/components/ForAdults/SectionThree"));
const SectionFour = dynamic(() => import("@/components/ForAdults/SectionFour"));
const Breadcrumb = dynamic(() => import("@/components/Common/Breadcrumb"));


import { Metadata } from "next";

export const metadata: Metadata = {
  title: "For Adults | Free Next.js Template for Startup and SaaS",
  description: "This is For Childrenpage",
  // other metadata
};

const ForAdultsPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="For Adults"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis dapibus libero."
      />
      <SectionOne />
      <SectionFour />
      <SectionTwo />
    </>
  );
};

export default ForAdultsPage;
