import { Testimonial } from "@/types/testimonial";
import dynamic from 'next/dynamic';

// Dynamically import the components
const SectionTitle = dynamic(() => import('../Common/SectionTitle'));
const SingleTestimonial = dynamic(() => import('./SingleTestimonial'));

const testimonialData: Testimonial[] = [
  {
    id: 1,
    name: "Faiz",
    designation: "17 tahun",
    content:
      "Saya sangat suka belajar Bahasa Inggris di English Lounge! Setiap kali kelas, kita bermain permainan dan menyanyi lagu-lagu yang menyenangkan. Guru-gurunya selalu ceria dan membantu kami jika ada yang sulit. Sekarang, saya bisa berbicara Bahasa Inggris dengan teman-teman saya!",
    image: "/images/testimonials/auth-01.png",
    star: 5,
  },
  {
    id: 2,
    name: "Rara",
    designation: "16 tahun",
    content:
      "Kelas Bahasa Inggris di English Lounge itu seru banget! Kami belajar banyak kata baru dan bisa menggambar sambil belajar. Saya juga senang karena teman-teman sekelas saya sangat baik. Sekarang, saya bisa bercerita dalam Bahasa Inggris kepada keluarga saya!",
    image: "/images/testimonials/auth-02.png",
    star: 5,
  },
  {
    id: 3,
    name: "Fani",
    designation: " 16 tahun",
    content:
      "Belajar di English Lounge adalah pengalaman yang luar biasa! Saya suka cara guru menjelaskan pelajaran dengan cerita menarik dan video. Kelasnya tidak pernah membosankan! Saya merasa lebih percaya diri saat berbicara Bahasa Inggris, dan saya tidak sabar untuk belajar lebih banyak!",
    image: "/images/testimonials/auth-03.png",
    star: 5,
  },
];

const SectionFive = () => {
  return (
    <section className="dark:bg-bg-color-dark bg-gray-light relative z-10 py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="Testimony Teenagers "
          paragraph="There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form."
          center
        />

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          {testimonialData.map((testimonial) => (
            <SingleTestimonial key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
     
    </section>
  );
};

export default SectionFive;
