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

const SectionTwoForAdults = () => {
  return (
    <section id="forAdults" className="pt-16 md:pt-20 lg:pt-28">
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
          Program Kursus Bahasa Inggris Untuk Dewasa
        </h2>

        {/* Course Description */}
        <p className="mb-6">
          Kursus Bahasa Inggris untuk dewasa adalah program yang ditujukan untuk
          orang dewasa yang ingin meningkatkan keterampilan berbahasa Inggris
          secara profesional. Program ini menekankan pada peningkatan kepercayaan
          diri, penguasaan kosa kata, serta kemampuan berkomunikasi dalam
          situasi sehari-hari maupun profesional.
        </p>
        <p className="mb-6">
          Dengan metode pembelajaran yang interaktif dan menggunakan teknologi
          modern, peserta dapat fokus belajar dalam suasana yang nyaman dan
          mendukung. Program ini disesuaikan dengan kebutuhan orang dewasa yang
          ingin menguasai bahasa Inggris dengan cepat dan efisien.
        </p>

        {/* Teaching Techniques */}
        <h3 className="text-xl font-semibold mb-4">Teknik Pengajaran</h3>
        <ul className="list-disc list-inside mb-6">
          <li>Diskusi dan Debat dalam Bahasa Inggris</li>
          <li>Membaca Artikel Berita dan Jurnal</li>
          <li>Presentasi dan Public Speaking</li>
          <li>Pemahaman Video dan Podcast Berbahasa Inggris</li>
          <li>Latihan Menulis Laporan dan Email</li>
          <li>Simulasi Situasi dalam Dunia Kerja</li>
          <li>Bermain Peran dan Diskusi Kelompok</li>
        </ul>
      </div>
    </section>
  );
};

export default SectionTwoForAdults;
