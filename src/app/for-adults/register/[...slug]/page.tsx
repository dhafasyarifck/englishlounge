
import dynamic from "next/dynamic";

const Register = dynamic(() => import("@/components/ForAdults/register"));

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "For Children | Free Next.js Template for Startup and SaaS",
  description: "This is For Childrenpage",
  // other metadata
};

const ForchildrenPage = ({ params }) => {
  return (
    <>
      <Register />
    </>
  );
};

export default ForchildrenPage;
