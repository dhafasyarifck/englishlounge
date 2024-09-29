"use client";
import Link from "next/link";
import SectionTitle from "../Common/SectionTitle";
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
    <section id="forChildren" className="py-16 md:py-20 lg:py-28">
      <div className="container mx-auto px-4 w-full block lg:flex flex-row justify-between items-center gap-10">
        <div className="w-full px-4 lg:w-1/2">
          <SectionTitle
            title="Program Kursus Bahasa Inggris Untuk Anak-anak"
            paragraph="Kursus ini dirancang untuk anak-anak yang ingin belajar bahasa Inggris dengan cara yang menyenangkan dan interaktif. Program ini membantu meningkatkan kemampuan berbicara, membaca, dan menulis dalam suasana yang nyaman, sesuai dengan kebutuhan anak-anak."
            mb="12px"
            titleStyle="text-xl md:text-[35px]"
          />
          <p className="text-base md:text-lg text-body-color my-2">Teknik Pengajaran</p>
          <div className="mb-12 w-full lg:mb-0" data-wow-delay=".15s">
            <div className="mx-[-12px] flex flex-wrap">
              <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                <List text="Belajar dengan Lagu dan Cerita" />
                <List text="Permainan Bahasa Interaktif" />
                <List text="Latihan Menulis Sederhana" />
              </div>
              <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                <List text="Mendengarkan Cerita Bahasa Inggris" />
                <List text="Aktivitas Kelompok dan Diskusi" />
                <List text="Proyek Kreatif dalam Bahasa Inggris" />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white flex flex-col gap-2 justify-between items-start rounded-lg shadow-lg h-full lg:min-h-[600px] p-6 w-full lg:w-1/2">
          <Image
            src="/images/Children-private.jpg" // Replace with actual image path
            alt="English For Children Private"
            width={400}
            height={200}
            className="rounded-t-lg"
          />
          <div className=" flex justify-start flex-col gap-2">
            <h3 className="text-xl font-bold mt-4">English For Children Private</h3>
            <p className="text-sm mt-2">
              Dapatkan <span className="text-blue-500">Diskon Hingga 50%</span> dengan Kode Kupon
            </p>
            <Link href="/for-children/register" className="inline-block mt-4 px-6 py-2 bg-blue-700 text-white font-bold rounded-full">
              Daftar Sekarang
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionTwoForChildren;
