import dynamic from "next/dynamic";

const AboutSectionOne = dynamic(() => import("@/components/About/AboutSectionOne"));
const AboutSectionTwo = dynamic(() => import("@/components/About/AboutSectionTwo"));
const SectionOne = dynamic(() => import("@/components/ForChildren/SectionOne"));
const SectionTwo = dynamic(() => import("@/components/ForChildren/SectionTwo"));
const SectionThree = dynamic(() => import("@/components/ForChildren/SectionThree"));
const SectionFour = dynamic(() => import("@/components/ForChildren/SectionFour"));
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
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis dapibus libero."
      />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />

      <AboutSectionOne />
      <AboutSectionTwo />
    </>
  );
};

export default ForchildrenPage;
