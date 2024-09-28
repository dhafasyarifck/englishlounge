"use client";
import { useState } from "react";
import dynamic from 'next/dynamic';

// Dynamically import components
const SectionTitle = dynamic(() => import('../Common/SectionTitle'));
const SingleBlog = dynamic(() => import('./SingleBlog'));

// Static import for blogData
import blogData from './blogData';

import { adults } from "@/constant/data"
const Pricing = () => {
  const [plans, setPlans] = useState(true);

  return (
    <section id="pricing" className="relative z-10 py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="Our Classes"
          paragraph="We offer a range of classes tailored for different age groups: Children, Teenagers, and Adults. Join us to enhance your skills in a supportive environment."
          center
          width="665px"
        />

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 md:gap-x-6 lg:gap-x-8 xl:grid-cols-3">
          {blogData.map((blog) => (
            <div key={blog.id} className="w-full">
              <SingleBlog blog={blog} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
