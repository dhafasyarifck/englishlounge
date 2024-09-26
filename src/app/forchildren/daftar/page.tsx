
import ForchildrenDaftar from "@/components/Forchildren/ForchildrenDaftar";


import { Metadata } from "next";

export const metadata: Metadata = {
  title: "For Children | Free Next.js Template for Startup and SaaS",
  description: "This is For Childrenpage",
  // other metadata
};

const ForchildrenPage = () => {
  return (
    <>
     
       <ForchildrenDaftar />

    </>
  );
};

export default ForchildrenPage;
