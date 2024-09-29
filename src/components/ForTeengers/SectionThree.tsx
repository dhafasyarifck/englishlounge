"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
const SectionThree = () => {
  const [selectedMode, setSelectedMode] = useState("Offline"); // State to toggle between Offline and Online

  return (
    <section id="teenagers" className="pt-16 md:pt-20 lg:pt-28">
      <div className="container mx-auto">
        {/* Title */}
        <h2 className="text-center text-3xl font-bold mb-8">
          Daftar Program Kursus Bahasa Inggris Untuk Remaja
        </h2>

        {/* Toggle Button */}
        <div className="flex justify-center space-x-4 mb-8">
          <button
            className={`px-6 py-2 rounded-full transition-all duration-300 ${selectedMode === "Offline"
              ? "bg-blue-700 text-white shadow-lg transform scale-105"
              : "bg-gray-200 text-gray-700"
              }`}
            onClick={() => setSelectedMode("Offline")}
          >
            Offline
          </button>
          <button
            className={`px-6 py-2 rounded-full transition-all duration-300 ${selectedMode === "Online"
              ? "bg-blue-700 text-white shadow-lg transform scale-105"
              : "bg-gray-200 text-gray-700"
              }`}
            onClick={() => setSelectedMode("Online")}
          >
            Online
          </button>
        </div>

        {/* Conditionally Render the Content based on selectedMode */}
        <div className="flex justify-center space-x-6">
          {selectedMode === "Offline" ? (
            <>
              {/* Offline Mode - English For Teenagers Regular */}
              <div className="bg-white rounded-lg shadow-lg p-6 w-auto">
                <Image
                  src="/images/forteenagers/OfflineTeenagerRegular.png" // Replace with actual image path
                  alt="English For Teenagers Regular"
                  width={400}
                  height={200}
                  className="rounded-t-lg"
                />
                <h3 className="text-xl font-bold mt-4">English For Teenagers Regular</h3>
                <p className="text-sm mt-2">
                  Dapat Kode Kupon <span className="text-blue-500">Diskon Hingga 50%</span>
                </p>
                <Link href="/for-teenagers/register/reguler" className="inline-block mt-4 px-6 py-2 bg-blue-700 text-white font-bold rounded-full">
                  Daftar Sekarang
                </Link>
              </div>

              {/* Offline Mode - English For Teenagers Private */}
              <div className="bg-white rounded-lg shadow-lg p-6 w-auto">
                <Image
                  src="/images/forteenagers/OfflineTeenagerPrivate.png" // Replace with actual image path
                  alt="English For Teenagers Private"
                  width={400}
                  height={200}
                  className="rounded-t-lg"
                />
                <h3 className="text-xl font-bold mt-4">English For Teenagers Private</h3>
                <p className="text-sm mt-2">
                  Dapat Kode Kupon <span className="text-blue-500">Diskon Hingga 50%</span>
                </p>
                <Link href="/for-teenagers/register/private" className="inline-block mt-4 px-6 py-2 bg-blue-700 text-white font-bold rounded-full">
                  Daftar Sekarang
                </Link>
              </div>
            </>
          ) : (
            <>
              {/* Online Mode - English For Teenagers Regular */}
              <div className="bg-white rounded-lg shadow-lg p-6 w-auto">
                <Image
                  src="/images/forteenagers/OnlineTeenagerRegular.png" // Replace with actual image path
                  alt="English For Teenagers Online Regular"
                  width={400}
                  height={200}
                  className="rounded-t-lg"
                />
                <h3 className="text-xl font-bold mt-4">English For Teenagers Online Regular</h3>
                <p className="text-sm mt-2">
                  Dapat Kode Kupon <span className="text-blue-500">Diskon Hingga 50%</span>
                </p>
                <Link href="/for-teenagers/register/reguler" className="inline-block mt-4 px-6 py-2 bg-blue-700 text-white font-bold rounded-full">
                  Daftar Sekarang
                </Link>
              </div>

              {/* Online Mode - English For Teenagers Private */}
              <div className="bg-white rounded-lg shadow-lg p-6 w-auto">
                <Image
                  src="/images/forteenagers/OnlineTeenagerPrivate.png" // Replace with actual image path
                  alt="English For Teenagers Online Private"
                  width={400}
                  height={200}
                  className="rounded-t-lg"
                />
                <h3 className="text-xl font-bold mt-4">English For Teenagers Online Private</h3>
                <p className="text-sm mt-2">
                  Dapat Kode Kupon <span className="text-blue-500">Diskon Hingga 50%</span>
                </p>
                <Link href="/for-teenagers/register/private" className="inline-block mt-4 px-6 py-2 bg-blue-700 text-white font-bold rounded-full">
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

export default SectionThree;
