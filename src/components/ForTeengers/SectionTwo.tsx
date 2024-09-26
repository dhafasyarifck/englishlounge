"use client";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBook,
  faGlobe,
  faClipboardList,
  faTag,
  faStore,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";

const SectionTwoForTeenagers = () => {
  return (
    <section id="forTeenagers" className="pt-16 md:pt-20 lg:pt-28">
      <div className="container mx-auto px-4">
        {/* Menu Section */}
        <div className="flex justify-center space-x-10 mb-10">
          {/* Menu Items */}
          {[
            { href: "/toefl", icon: faGlobe, label: "TOEFL" },
            { href: "/ielts", icon: faBook, label: "IELTS" },
            { href: "/toeic", icon: faClipboardList, label: "TOEIC" },
            { href: "/promo", icon: faTag, label: "Pasti Promo" },
            { href: "/cabang-kami", icon: faStore, label: "Cabang Kami" },
            { href: "/tentang-kami", icon: faInfoCircle, label: "Tentang Kami" },
          ].map(({ href, icon, label }) => (
            <Link href={href} key={label} className="text-center">
              <div className="cursor-pointer">
                <div className="w-28 h-28 flex justify-center items-center transition-transform duration-300 hover:scale-110">
                  <FontAwesomeIcon icon={icon} className="text-7xl" />
                </div>
                <p className="mt-2 transition-colors duration-300 hover:text-blue-500">
                  {label}
                </p>
              </div>
            </Link>
          ))}
        </div>

        {/* Title Section */}
        <h2 className="text-center text-3xl font-bold mb-8">
          Program Kursus Bahasa Inggris Untuk Remaja
        </h2>

        {/* Course Description */}
        <p className="mb-6">
          Program kursus Bahasa Inggris untuk remaja dirancang khusus untuk siswa
          tingkat SMP dan SMA. Program ini bertujuan membantu remaja menguasai
          bahasa Inggris dalam konteks akademis maupun percakapan sehari-hari, sehingga
          mereka dapat lebih percaya diri dan siap menghadapi tantangan di masa depan.
        </p>
        <p className="mb-6">
          Kami menggunakan metode pengajaran yang menyenangkan dengan alat bantu
          teknologi modern yang membuat proses belajar lebih interaktif dan mudah
          diikuti. Setiap sesi dirancang untuk memacu keterampilan komunikasi
          peserta.
        </p>

        {/* Teaching Techniques */}
        <h3 className="text-xl font-semibold mb-4">Teknik Pengajaran</h3>
        <ul className="list-disc list-inside mb-6">
          <li>Pembelajaran Interaktif melalui Diskusi</li>
          <li>Mendengarkan Lagu dan Bernyanyi</li>
          <li>Mendengarkan dan Membaca Cerita</li>
          <li>Bermain Peran (Role Play)</li>
          <li>Menonton Film dan Membahas Isinya</li>
          <li>Games Edukatif Berbahasa Inggris</li>
        </ul>
      </div>
    </section>
  );
};

export default SectionTwoForTeenagers;
