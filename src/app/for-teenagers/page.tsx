import dynamic from "next/dynamic";

const AboutSectionOne = dynamic(() => import("@/components/About/AboutSectionOne"));
const AboutSectionTwo = dynamic(() => import("@/components/About/AboutSectionTwo"));
const SectionOne = dynamic(() => import("@/components/ForTeengers/SectionOne"));
const SectionTwo = dynamic(() => import("@/components/ForTeengers/SectionTwo"));
const SectionThree = dynamic(() => import("@/components/ForTeengers/SectionThree"));
const SectionFour = dynamic(() => import("@/components/ForTeengers/SectionFour"));
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
      <SectionFour />
      <SectionTwo />
    </>
  );
};

export default ForTeenegersPage;
