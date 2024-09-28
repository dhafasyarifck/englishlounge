"use client"; // Add this line to indicate this is a Client Component

import { useState } from "react";

const ForchildrenSectionOne = () => {
  const [isHovered1, setIsHovered1] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const [isPressed1, setIsPressed1] = useState(false);
  const [isPressed2, setIsPressed2] = useState(false);

  const buttonStyle = {
    padding: '10px 20px',
    color: 'white',
    borderRadius: '5px',
    marginRight: '10px',
    transition: 'background-color 0.3s, transform 0.3s'
  };

  return (
    <section
      id="forchildren"
      className="flex items-center bg-gray-100 relative"
    >
      <div
        style={{
          flex: 1,
          padding: '20px',
          backgroundImage: "url('/images/forchildren/Banner2n.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'left',
          height: '80vh'

        }}
      >
        <div className="container pt-10">
          <h2 className="text-4xl mb-5 text-black">Kursus Bahasa Inggris Untuk Remaja</h2>
          <p className="text-lg mb-8 text-black">
            Kursus bahasa Inggris untuk anak dengan fasilitas lengkap dan biaya super terjangkau.
          </p>
          <p className="text-xl font-bold text-black">
            50.000+ <br />
            Telah dipercaya oleh lebih dari 50.000 peserta kursus dan Tes Takers
          </p>
          <div className="mt-8 space-x-4">
            <a
              href="#"
              className={`px-6 py-3 text-white rounded-lg transition-transform duration-200 ${isHovered1 ? 'bg-orange-600' : 'bg-orange-500'} ${isPressed1 ? 'scale-95' : 'scale-100'}`}
              onMouseEnter={() => setIsHovered1(true)}
              onMouseLeave={() => setIsHovered1(false)}
              onMouseDown={() => setIsPressed1(true)}
              onMouseUp={() => setIsPressed1(false)}
            >
              Daftar Sekarang
            </a>
            <a
              href="#"
              className={`px-6 py-3 text-white rounded-lg transition-transform duration-200 ${isHovered2 ? 'bg-green-600' : 'bg-green-500'} ${isPressed2 ? 'scale-95' : 'scale-100'}`}
              onMouseEnter={() => setIsHovered2(true)}
              onMouseLeave={() => setIsHovered2(false)}
              onMouseDown={() => setIsPressed2(true)}
              onMouseUp={() => setIsPressed2(false)}
            >
              Chat Min-GO
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ForchildrenSectionOne;
