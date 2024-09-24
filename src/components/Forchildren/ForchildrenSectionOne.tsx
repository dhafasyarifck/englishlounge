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
      style={{ 
        display: 'flex', 
        alignItems: 'center', 
        padding: '50px 0', 
        backgroundColor: '#f7f7f7',
        position: 'relative'
      }}
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
          <h2 style={{ fontSize: '2.5rem', marginBottom: '20px', color: 'black' }}>Kursus Bahasa Inggris Untuk Anak</h2>
          <p style={{ fontSize: '1.2rem', marginBottom: '30px', color: 'black' }}>
            Kursus bahasa Inggris untuk anak dengan fasilitas lengkap dan biaya super terjangkau.
          </p>
          <p style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'black' }}>
            50.000+ <br />
            Telah dipercaya oleh lebih dari 50.000 peserta kursus dan Tes Takers
          </p>
          <div style={{ marginTop: '30px' }}>
            <a 
              href="#" 
              style={{ 
                ...buttonStyle,
                backgroundColor: isHovered1 ? '#ff8c00' : '#FFA500',
                transform: isPressed1 ? 'scale(0.95)' : 'scale(1)'
              }} 
              onMouseEnter={() => setIsHovered1(true)} 
              onMouseLeave={() => setIsHovered1(false)} 
              onMouseDown={() => setIsPressed1(true)} 
              onMouseUp={() => setIsPressed1(false)} 
            >
              Daftar Sekarang
            </a>
            <a 
              href="#" 
              style={{ 
                ...buttonStyle,
                backgroundColor: isHovered2 ? '#28a745' : '#32CD32',
                transform: isPressed2 ? 'scale(0.95)' : 'scale(1)'
              }} 
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
