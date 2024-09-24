"use client"; 
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faGlobe, faClipboardList, faTag, faStore, faInfoCircle } from '@fortawesome/free-solid-svg-icons';

const ForchildrenSectionTwo = () => {
  return (
    <section id="forchildren" className="pt-16 md:pt-20 lg:pt-28">
         <div className="container">
       {/* Menu Section */}
<div className="flex justify-center space-x-10 mb-10">
<style jsx>{`
    .icon-wrapper {
      width: 120px; /* Ukuran wrapper */
      height: 120px; /* Ukuran wrapper */
      display: flex;
      justify-content: center;
      align-items: center;
      transition: transform 0.3s ease; /* Animasi transisi */
    }
    .icon-wrapper:hover {
      transform: scale(1.1); /* Membesar saat hover */
    }
    .label {
      transition: color 0.3s ease; /* Animasi transisi untuk teks */
    }
    .label:hover {
      color: #4A90E2; /* Ubah warna teks saat hover */
    }
  `}</style>

  {/* Menu Items */}
  {[
    { href: "/toefl", icon: faGlobe, label: "TOEFL" },
    { href: "/ielts", icon: faBook, label: "IELTS" },
    { href: "/toeic", icon: faClipboardList, label: "TOEIC" },
    { href: "/promo", icon: faTag, label: "Pasti Promo" },
    { href: "/cabang-kami", icon: faStore, label: "Cabang Kami" },
    { href: "/tentang-kami", icon: faInfoCircle, label: "Tentang Kami" },
  ].map(({ href, icon, label }) => (
    <Link href={href} key={label}>
      <div className="text-center cursor-pointer">
        <div className="icon-wrapper">
          <FontAwesomeIcon icon={icon} className="text-7xl" />
        </div>
        <p className="mt-2 label">{label}</p> 
      </div>
    </Link>
  ))}
</div>

    

        {/* Title Section */}
        <h2 className="text-center text-3xl font-bold mb-8">
          Program Kursus Bahasa Inggris Untuk Anak
        </h2>

        {/* Course Description */}
        <p className="mb-6">
          Kursus Bahasa Inggris untuk anak adalah program yang ditujukan untuk siswa/i
          sekolah dasar. Dengan fokus utama melatih kepercayaan diri, pengayaan kosa
          kata, dan juga ungkapan sederhana dalam komunikasi sehari-hari. Kurikulum
          kursus bahasa Inggris anak-anak didesain mengacu pada kebutuhan anak-anak di
          sekolah, pelajaran disampaikan secara komunikatif dan menyenangkan agar
          peserta mampu menguasai materi dengan mudah dan cepat.
        </p>
        <p className="mb-6">
          Kursus bahasa Inggris untuk anak-anak didukung dengan penggunaan alat bantu
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

export default ForchildrenSectionTwo;
