import dynamic from 'next/dynamic';

// Dynamically import components
const AboutSectionOne = dynamic(() => import('@/components/About/AboutSectionOne'));
const AboutSectionTwo = dynamic(() => import('@/components/About/AboutSectionTwo'));
const Breadcrumb = dynamic(() => import('@/components/Common/Breadcrumb'));

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Page | Free Next.js Template for Startup and SaaS",
  description: "This is About Page for Startup Nextjs Template",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="About Page"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis dapibus libero."
      />
      <AboutSectionOne />
      <AboutSectionTwo />
    </>
  );
};

export default AboutPage;
