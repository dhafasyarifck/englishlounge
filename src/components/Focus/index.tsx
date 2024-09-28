import dynamic from 'next/dynamic';

// Dynamically import the components
const SectionTitle = dynamic(() => import('../Common/SectionTitle'));
const SingleFeature = dynamic(() => import('./SingleFeature'));
import featuresData from "./featuresData";

const Features = () => {
  return (
    <>
      <section id="features" className="py-16 md:py-20 lg:py-28">
        <div className="container">
          <SectionTitle
            title="Our Focus"
            paragraph="We offer a diverse range of activities designed to enhance language skills and boost confidence. Our programs are tailored to different age groups, ensuring personalized learning experiences."
            center
          />

          <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {featuresData.map((feature) => (
              <SingleFeature key={feature.id} feature={feature} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
