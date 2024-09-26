"use client";
import React, { useState } from "react";
import { children } from "@/constant/data";
import { formatRupiah } from "@/utils/formatNumber";

const ForchildrenDaftar = () => {
  const [formState, setFormState] = useState({
    metodeBelajar: "",
    jenisKelas: "",
    lokasiBelajar: "",
    paketBelajar: null,
    sesi: "",
    privatePricing: null,
    privatePricingFilter: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (name === "metodeBelajar" || name === "jenisKelas") {
      setFormState((prev) => ({
        ...prev,
        jenisKelas: name === "metodeBelajar" ? "" : prev.jenisKelas,
        lokasiBelajar: "",
        paketBelajar: null,
      }));
    }
  };

  const handleSetPaketBelajar = (e) => {
    const paketBelajar = children.subscription_plans.find(
      (plan) => plan.duration === parseInt(e.target.value)
    );
    setFormState((prev) => ({ ...prev, paketBelajar }));
  };

  const handleSesi = (e) => {
    const filter = children.session_plans.pricing.filter(
      (plan) => plan.sessions === parseInt(e.target.value)
    );
    setFormState((prev) => ({
      ...prev,
      privatePricingFilter: filter[0],
      sesi: e.target.value,
    }));
  };

  const handlePrivatePricing = (e) => {
    const privatePricing = formState.privatePricingFilter.prices.find(
      (plan) => plan.participants === parseInt(e.target.value)
    );
    setFormState((prev) => ({ ...prev, privatePricing }));
  };

  const {
    metodeBelajar,
    jenisKelas,
    paketBelajar,
    sesi,
    privatePricing,
    privatePricingFilter,
  } = formState;

  return (
    <section id="forchildren-Daftar" className="min-h-screen pt-32 lg:pt-[200px]">
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
            {["Sesi Bercerita", "Ruang Baca Kelompok", "Workshop Menulis Kreatif", "Permainan Bahasa", "Perlombaan Ejaan"].map(
              (activity, index) => (
                <li key={index} className="flex items-center">
                  <span className="w-5 h-5 bg-green-500 rounded-full inline-block mr-2"></span>
                  {activity}
                </li>
              )
            )}
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
                name="metodeBelajar"
                value={metodeBelajar}
                onChange={handleChange}
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
                  name="jenisKelas"
                  value={jenisKelas}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-md"
                >
                  <option value="">Pilih Jenis Kelas</option>
                  <option value="Group Class">Group Class</option>
                  <option value="Private Class">Private Class</option>
                </select>
              </div>
            )}

            {/* Group Class Options */}
            {jenisKelas === "Group Class" && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Pilih Paket Belajar
                </label>
                <select
                  name="paketBelajar"
                  value={paketBelajar?.duration || ""}
                  onChange={handleSetPaketBelajar}
                  className="w-full p-2 border border-gray-300 rounded-md"
                >
                  <option value="">Pilih Paket</option>
                  {children.subscription_plans.map((plan, index) => (
                    <option key={index} value={plan.duration}>
                      {plan.duration} bulan
                    </option>
                  ))}
                </select>
              </div>
            )}

            {/* Private Class Options */}
            {jenisKelas === "Private Class" && (
              <>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Pilih Sesi
                  </label>
                  <select
                    name="sesi"
                    value={sesi}
                    onChange={handleSesi}
                    className="w-full p-2 border border-gray-300 rounded-md"
                  >
                    <option value="">Pilih Sesi</option>
                    {children.session_plans.pricing.map((plan, index) => (
                      <option key={index} value={plan.sessions}>
                        {plan.sessions} sesi
                      </option>
                    ))}
                  </select>
                </div>

                {sesi && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Pilih Peserta
                    </label>
                    <select
                      name="privatePricing"
                      value={privatePricing?.participants || ""}
                      onChange={handlePrivatePricing}
                      className="w-full p-2 border border-gray-300 rounded-md"
                    >
                      <option value="">Pilih Peserta</option>
                      {privatePricingFilter?.prices.map((plan, index) => (
                        <option key={index} value={plan.participants}>
                          {plan.participants} peserta
                        </option>
                      ))}
                    </select>
                  </div>
                )}
              </>
            )}

            {/* Display Pricing */}
            {(paketBelajar && jenisKelas === "Group Class") && (
              <div className="bg-gray-100 p-4 rounded-lg text-center">
                {/* <p className="line-through text-gray-500 text-sm hidden">{paketBelajar.duration}</p> */}
                <p className="text-lg font-semibold text-green-600">{formatRupiah(paketBelajar?.price)}</p>
                <p className="text-sm text-green-500">Selama {paketBelajar?.duration} bulan</p>

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

            {(jenisKelas === "Private Class" && privatePricing) && (
              <div className="bg-gray-100 p-4 rounded-lg text-center">
                <p className=" text-gray-500 text-base">{sesi} sesi</p>
                <p className="text-lg font-semibold text-green-600">{formatRupiah(privatePricing?.price)}</p>
                <p className="text-sm text-green-500">{privatePricing?.participants} peserta</p>

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

            {/* Submit Button */}
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
