import { useEffect } from "react";

import "./Parallax.css";

const Parallax = () => {
  const handleScroll = () => {
    const parallaxImage = document.getElementById("parallax-image");
    const scrolled = window.scrollY;
    parallaxImage.style.transform = `translateY(${scrolled * 0.4}px)`;
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="parallax-container">
      <div id="parallax-image" className="parallax-image" />
      {/* Konten utama Anda di atas latar belakang paralaks */}
      <div className="content container h-100 d-flex flex-column justify-content-center align-items-center text-white">
        <h1>Welcome to Our Website</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
    </div>
  );
};

export default Parallax;
