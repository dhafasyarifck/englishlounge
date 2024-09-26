"use client";
import React, { useState } from "react";

const ForchildrenDaftar = () => {
  const [metodeBelajar, setMetodeBelajar] = useState("");
  const [jenisKelas, setJenisKelas] = useState("");
  const [lokasiBelajar, setLokasiBelajar] = useState("");
  const [paketBelajar, setPaketBelajar] = useState("");

  const handleMetodeChange = (e) => {
    setMetodeBelajar(e.target.value);
    setJenisKelas(""); // Reset jenis kelas ketika metode berubah
    setLokasiBelajar(""); // Reset lokasi belajar ketika metode berubah
    setPaketBelajar(""); // Reset paket belajar ketika metode berubah
  };

  const handleJenisKelasChange = (e) => {
    setJenisKelas(e.target.value);
    setLokasiBelajar(""); // Reset lokasi belajar ketika jenis kelas berubah
    setPaketBelajar(""); // Reset paket belajar ketika jenis kelas berubah
  };

  return (
    <section id="forchildren-Daftar" className="pt-32 md:pt-32 lg:pt-40">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Section */}
        <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
          <h2 className="text-2xl font-semibold mb-4">English for Children</h2>
          <p className="mb-2">
            Program ini didesain khusus untuk anak-anak yang aktif belajar di jenjang sekolah dasar.
          </p>
          <p className="mb-4">
            Program ini akan membantu anak-anak untuk terbiasa dengan konteks berbahasa Inggris dan{" "}
            <span className="font-bold text-blue-500">#Ngebebasin</span> dari belajar rumit.
          </p>
          <p className="font-semibold mb-2">Kegiatan di kelas ini meliputi:</p>
          <ul className="list-none space-y-2">
            <li className="flex items-center">
              <span className="w-5 h-5 bg-green-500 rounded-full inline-block mr-2"></span>
              Sesi Bercerita
            </li>
            <li className="flex items-center">
              <span className="w-5 h-5 bg-green-500 rounded-full inline-block mr-2"></span>
              Ruang Baca Kelompok
            </li>
            <li className="flex items-center">
              <span className="w-5 h-5 bg-green-500 rounded-full inline-block mr-2"></span>
              Workshop Menulis Kreatif
            </li>
            <li className="flex items-center">
              <span className="w-5 h-5 bg-green-500 rounded-full inline-block mr-2"></span>
              Permainan Bahasa
            </li>
            <li className="flex items-center">
              <span className="w-5 h-5 bg-green-500 rounded-full inline-block mr-2"></span>
              Perlombaan Ejaan
            </li>
          </ul>
        </div>

        {/* Right Section */}
        <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
          <h3 className="text-xl font-semibold mb-4">Yuk, daftar kursus sekarang!</h3>
          <form className="space-y-4">
            {/* Metode Belajar */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Metode Belajar
              </label>
              <select
                value={metodeBelajar}
                onChange={handleMetodeChange}
                className="w-full p-2 border border-gray-300 rounded-md"
              >
                <option value="">Pilih Metode</option>
                <option value="Online">Online</option>
                <option value="Offline">Offline</option>
              </select>
            </div>

            {/* Jenis Kelas */}
            {metodeBelajar && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Jenis Kelas
                </label>
                <select
                  value={jenisKelas}
                  onChange={handleJenisKelasChange}
                  className="w-full p-2 border border-gray-300 rounded-md"
                >
                  <option value="">Pilih Jenis Kelas</option>
                  <option value="Group Class">Group Class</option>
                  <option value="Private Class">Private Class</option>
                </select>
              </div>
            )}

            {/* Lokasi Belajar (Hanya muncul jika metode belajar adalah Offline) */}
            {metodeBelajar === "Offline" && jenisKelas && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Lokasi Belajar
                </label>
                <select
                  value={lokasiBelajar}
                  onChange={(e) => setLokasiBelajar(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-md"
                >
                  <option value="">Pilih Lokasi</option>
                  <option value="Jakarta">Jakarta</option>
                  <option value="Bandung">Bandung</option>
                  <option value="Surabaya">Surabaya</option>
                </select>
              </div>
            )}

            {/* Pilih Paket Belajar */}
            {(metodeBelajar === "Online" && jenisKelas) ||
            (metodeBelajar === "Offline" && lokasiBelajar) ? (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Pilih Paket Belajar
                </label>
                <select
                  value={paketBelajar}
                  onChange={(e) => setPaketBelajar(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-md"
                >
                  <option value="">Pilih Paket</option>
                  <option value="3 Bulan">3 Bulan</option>
                  <option value="6 Bulan">6 Bulan</option>
                  <option value="12 Bulan">12 Bulan</option>
                </select>
              </div>
            ) : null}

            {/* Harga & Fasilitas */}
            {paketBelajar && (
              <div className="bg-gray-100 p-4 rounded-lg text-center">
                <p className="line-through text-gray-500 text-sm">Rp. 990.500</p>
                <p className="text-lg font-semibold text-green-600">Rp. 898.500</p>
                <p className="text-sm text-green-500">Hemat Rp. 100.000</p>

                {/* Fasilitas Toggle */}
                <details className="mt-4">
                  <summary className="cursor-pointer text-blue-600">Lihat Fasilitas</summary>
                  <ul className="mt-2 text-left space-y-2 text-gray-600">
                    <li>Ruang Belajar Online</li>
                    <li>Modul Belajar</li>
                    <li>Support via Chat</li>
                    <li>Akses Video Pembelajaran</li>
                  </ul>
                </details>
              </div>
            )}

            {/* Buttons */}
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
            >
              Daftar Sekarang
            </button>

            <button
              type="button"
              className="w-full text-blue-500 py-2 rounded-lg border border-blue-500 mt-4 hover:bg-blue-100 transition"
            >
              Tanya Admin
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ForchildrenDaftar;
