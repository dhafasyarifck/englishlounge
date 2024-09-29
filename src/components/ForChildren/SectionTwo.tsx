"use client";
import Image from "next/image";



const checkIcon = (
  <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current">
    <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
  </svg>
);

const SectionTwoForChildren = () => {
  const List = ({ text }) => (
    <p className="mb-5 flex items-center text-base font-medium text-body-color">
      <span className="mr-4 flex h-[30px] w-[30px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
        {checkIcon}
      </span>
      {text}
    </p>
  );
  return (
    <section id="forTeengers" className="pt-16 md:pt-20 lg:pt-28">

      <div className="container mx-auto px-4">
        

        {/* Title Section */}
        <h2 className="text-center text-3xl font-bold mb-8">
          Program Kursus Bahasa Inggris Untuk Remaja
        </h2>

        {/* Course Description */}
        <p className="mb-6">
          Kursus Bahasa Inggris untuk remaja adalah program yang ditujukan untuk siswa/i
          sekolah dasar. Dengan fokus utama melatih kepercayaan diri, pengayaan kosa
          kata, dan juga ungkapan sederhana dalam komunikasi sehari-hari. Kurikulum
          kursus bahasa Inggris remaja didesain mengacu pada kebutuhan remaja di
          sekolah, pelajaran disampaikan secara komunikatif dan menyenangkan agar
          peserta mampu menguasai materi dengan mudah dan cepat.
        </p>
        <p className="mb-6">
          Kursus bahasa Inggris untuk remaja didukung dengan penggunaan alat bantu
          pelajaran modern, membuat peserta fokus dan tetap nyaman mengikuti setiap
          sesi.
        </p>

        {/* Teaching Techniques */}
        <h3 className="text-xl font-semibold mb-4">Teknik Pengajaran</h3>
        <ul className="list-disc list-inside mb-6">
          <li>Mendengarkan Lagu dan Bernyanyi</li>
          <li>Mendengarkan dan Membaca Cerita</li>
          <li>Membaca</li>
          <li>Bermain Peran (Role Play)</li>
          <li>Menonton Film</li>
          <li>Tebak-tebakan Bahasa Inggris</li>
          <li>Bermain Games dan Masih Banyak lagi</li>
        </ul>
      </div>
    </section>
  );
};

export default SectionTwoForChildren;
