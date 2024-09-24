import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import ForchildrenSectionOne from "@/components/Forchildren/ForchildrenSectionOne";
import ForchildrenSectionTwo from "@/components/Forchildren/ForchildrenSectionTwo";
import ForchildrenSectionThree from "@/components/Forchildren/ForchildrenSectionThree";
import ForchildrenSectionFour from "@/components/Forchildren/ForchildrenSectionFour";
import Breadcrumb from "@/components/Common/Breadcrumb";

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
       <ForchildrenSectionOne />
       <ForchildrenSectionTwo />
       <ForchildrenSectionThree />
       <ForchildrenSectionFour />

      <AboutSectionOne />
      <AboutSectionTwo />
    </>
  );
};

export default ForchildrenPage;
