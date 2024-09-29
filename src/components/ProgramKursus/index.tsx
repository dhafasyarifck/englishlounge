"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
const ProgramKursus = () => {
  const [selectedMode, setSelectedMode] = useState("Dewasa"); // State to toggle between Dewasa and Anak

  return (
    <section id="programkursus" className="pt-16 md:pt-20 lg:pt-28">
      <div className="container mx-auto">
        {/* Title */}
        <h2 className="text-center text-3xl font-bold mb-8">
        Daftar Program Kursus Bahasa Inggris
        </h2>

        {/* Toggle Button */}
        <div className="flex justify-center space-x-4 mb-8">
          <button
            className={`px-6 py-2 rounded-full transition-all duration-300 ${selectedMode === "Dewasa"
              ? "bg-blue-700 text-white shadow-lg transform scale-105"
              : "bg-gray-200 text-gray-700"
              }`}
            onClick={() => setSelectedMode("Dewasa")}
          >
            Dewasa
          </button>
          <button
            className={`px-6 py-2 rounded-full transition-all duration-300 ${selectedMode === "Anak"
              ? "bg-blue-700 text-white shadow-lg transform scale-105"
              : "bg-gray-200 text-gray-700"
              }`}
            onClick={() => setSelectedMode("Anak")}
          >
            Anak
          </button>
        </div>

        {/* Conditionally Render the Content based on selectedMode */}
        <div className="flex justify-center space-x-6">
          {selectedMode === "Dewasa" ? (
            <>
              {/* Kampung Inggris Plus*/}
              <div className="bg-white rounded-lg shadow-lg p-6 w-auto">
                <Image
                  src="/images/ProgramKursus/1.png" // Replace with actual image path
                  alt="Kampung Inggris Plus"
                  width={400}
                  height={200}
                  className="rounded-t-lg"
                />
                <h3 className="text-xl font-bold mt-4">Kampung Inggris Plus</h3>
                <p className="text-sm mt-2">
                  Dapat Kode Kupon <span className="text-blue-500">Diskon Hingga 50%</span>
                </p>
                <Link href="/for-teenagers/register/regular" className="inline-block mt-4 px-6 py-2 bg-blue-700 text-white font-bold rounded-full">
                  Daftar Sekarang
                </Link>
              </div>

              {/* General English */}
              <div className="bg-white rounded-lg shadow-lg p-6 w-auto">
                <Image
                  src="/images/ProgramKursus/2.png" // Replace with actual image path
                  alt="General English"
                  width={400}
                  height={200}
                  className="rounded-t-lg"
                />
                <h3 className="text-xl font-bold mt-4">General English</h3>
                <p className="text-sm mt-2">
                  Dapat Kode Kupon <span className="text-blue-500">Diskon Hingga 50%</span>
                </p>
                <Link href="/for-teenagers/register/regular" className="inline-block mt-4 px-6 py-2 bg-blue-700 text-white font-bold rounded-full">
                  Daftar Sekarang
                </Link>
              </div>

               {/* Dewasa Mode - English For In Company */}
               <div className="bg-white rounded-lg shadow-lg p-6 w-auto">
                <Image
                  src="/images/ProgramKursus/3.png" // Replace with actual image path
                  alt="Incompany Training"
                  width={400}
                  height={200}
                  className="rounded-t-lg"
                />
                <h3 className="text-xl font-bold mt-4">Incompany Training</h3>
                <p className="text-sm mt-2">
                  Dapat Kode Kupon <span className="text-blue-500">Diskon Hingga 50%</span>
                </p>
                <Link href="/about" className="inline-block mt-4 px-6 py-2 bg-blue-700 text-white font-bold rounded-full">
                  Daftar Sekarang
                </Link>
              </div>
            </>
          ) : (
            <>
              {/* Anak Mode - English For Children Regular */}
              <div className="bg-white rounded-lg shadow-lg p-6 w-auto">
                <Image
                  src="/images/ProgramKursus/OfflineRegular.png" // Replace with actual image path
                  alt="English For Children Anak Regular"
                  width={400}
                  height={200}
                  className="rounded-t-lg"
                />
                <h3 className="text-xl font-bold mt-4">English For Children </h3>
                <p className="text-sm mt-2">
                  Dapat Kode Kupon <span className="text-blue-500">Diskon Hingga 50%</span>
                </p>
                <Link href="/for-children/register/reguler" className="inline-block mt-4 px-6 py-2 bg-blue-700 text-white font-bold rounded-full">
                  Daftar Sekarang
                </Link>
              </div>

              {/* Anak Mode - English For Children Private */}
              <div className="bg-white rounded-lg shadow-lg p-6 w-auto">
                <Image
                  src="/images/ProgramKursus/OfflineTeenagerPrivate.png" // Replace with actual image path
                  alt="English For Children Anak Private"
                  width={400}
                  height={200}
                  className="rounded-t-lg"
                />
                <h3 className="text-xl font-bold mt-4">English For Teenagers</h3>
                <p className="text-sm mt-2">
                  Dapat Kode Kupon <span className="text-blue-500">Diskon Hingga 50%</span>
                </p>
                <Link href="/for-children/register/private" className="inline-block mt-4 px-6 py-2 bg-blue-700 text-white font-bold rounded-full">
                  Daftar Sekarang
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProgramKursus;
