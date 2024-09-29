import dynamic from 'next/dynamic';

// Dynamically import components
const AboutSectionOne = dynamic(() => import('@/components/About/AboutSectionOne'));
const AboutSectionTwo = dynamic(() => import('@/components/About/AboutSectionTwo'));
const Breadcrumb = dynamic(() => import('@/components/Common/Breadcrumb'));

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Page ",
  description: "This is About Page English Lounge",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="About English Lounge"
        description="Welcome to English Lounge, your gateway to mastering the English language in a relaxed and interactive environment. At English Lounge, we believe that learning English should be more than just lessons—it should be an enjoyable experience that fits into your daily life."
      />
      <AboutSectionOne />
      <AboutSectionTwo />
    </>
  );
};

export default AboutPage;
