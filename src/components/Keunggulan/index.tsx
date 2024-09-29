import dynamic from 'next/dynamic';

// Dynamically import the components
const SectionTitle = dynamic(() => import('../Common/SectionTitle'));
const SingleFeature = dynamic(() => import('./SingleFeature'));
import keunggulanData from "./keunggulanData";

const Keunggulan = () => {
  return (
    <>
      <section id="keunggulan" className="py-16 md:py-20 lg:py-28">
        <div className="container">
          <SectionTitle
            title="Advantages"
            paragraph="3 Advantages We Offer Compared to Other Course Institutions"
            center
          />

          <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {keunggulanData.map((feature) => (
              <SingleFeature key={feature.id} feature={feature} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Keunggulan;
