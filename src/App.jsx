// App.jsx
import React, { useEffect, useState } from "react";
import Confetti from "react-confetti";
import { motion } from "framer-motion";
import birthdayVideo from "./assets/khushaboo.mp4";
import img1 from "./assets/img1.jpg";
import img2 from "./assets/img2.jpg";
import img3 from "./assets/img3.jpg";
import img4 from "./assets/img4.jpg";
import img5 from "./assets/img5.jpg";
import img6 from "./assets/img6.jpg";
import img7 from "./assets/img7.jpg";
import img8 from "./assets/img8.jpg";
import img9 from "./assets/img9.jpg";
import img10 from "./assets/img10.jpg";
import img11 from "./assets/img11.jpg";
import imag5 from "./assets/imag5.jpg";

const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, imag5, img10, img11];

export default function App() {
  const [emojis, setEmojis] = useState([]);

  // Floating emojis
  useEffect(() => {
    const interval = setInterval(() => {
      const emojiList = ["💖", "🌸", "✨", "🦋", "🧿", "🌹", "💜"];
      const newEmoji = {
        id: Date.now(),
        emoji: emojiList[Math.floor(Math.random() * emojiList.length)],
        left: Math.random() * 100,
      };
      setEmojis((prev) => [...prev, newEmoji]);
      setTimeout(() => {
        setEmojis((prev) => prev.filter((e) => e.id !== newEmoji.id));
      }, 6000);
    }, 1200);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen bg-gradient-to-r from-purple-900 via-black to-purple-700 text-white flex flex-col items-center justify-center overflow-hidden px-2 sm:px-4 md:px-8 lg:px-16">
      <Confetti width={window.innerWidth} height={window.innerHeight} />

      {/* Floating emojis */}
      {emojis.map((item) => (
        <motion.div
          key={item.id}
          initial={{ y: "100vh", opacity: 0 }}
          animate={{ y: "-10vh", opacity: 1 }}
          transition={{ duration: 6, ease: "easeOut" }}
          className="absolute text-2xl sm:text-3xl md:text-4xl"
          style={{ left: `${item.left}%` }}
        >
          {item.emoji}
        </motion.div>
      ))}

      {/* Title */}
      <motion.h1
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1 }}
        className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-center text-purple-400 drop-shadow-2xl mt-8 mb-4"
      >
        It's Me 🧿💖✨
      </motion.h1>

      {/* 3D Rotating Image Ring */}
      <div className="relative w-[90vw] max-w-[700px] sm:w-[600px] md:w-[700px] h-[300px] sm:h-[400px] md:h-[450px] lg:h-[500px] perspective mb-10">
        <div className="absolute inset-0 animate-spin-slow preserve-3d">
          {images.map((src, i) => {
            const angle = (360 / images.length) * i;
            return (
              <div
                key={i}
                className="absolute w-28 h-36 sm:w-32 sm:h-44 md:w-40 md:h-56 lg:w-44 lg:h-64 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                style={{
                  transform: `rotateY(${angle}deg) translateZ(220px)`,
                }}
              >
                <img
                  src={src}
                  alt={`img-${i}`}
                  className="w-full h-full object-cover rounded-xl border-2 sm:border-3 md:border-4 border-pink-300 shadow-xl"
                />
              </div>
            );
          })}
        </div>
      </div>

      {/* Video */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="relative mb-10 w-[90vw] sm:w-80 md:w-[450px] lg:w-[600px] rounded-2xl overflow-hidden shadow-[0_0_40px_rgba(192,132,252,0.7)] border-2 sm:border-3 md:border-4 border-purple-400"
      >
        <video
          src={birthdayVideo}
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          controls
        />
      </motion.div>

      {/* Masonry Gallery */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-pink-300 mb-6">
        My Memories 🌸✨
      </h2>
      <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 w-full max-w-6xl mb-20">
        {images.map((src, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05, rotate: 2 }}
            className="mb-4 break-inside-avoid"
          >
            <img
              src={src}
              alt={`gallery-${i}`}
              className="w-full rounded-xl sm:rounded-2xl shadow-lg border border-purple-300 sm:border-2 hover:shadow-[0_0_30px_rgba(255,192,203,0.8)] transition-all duration-300"
            />
          </motion.div>
        ))}
      </div>

      {/* Music */}
      <audio autoPlay loop>
        <source src="/music.mp3" type="audio/mpeg" />
      </audio>

      {/* Extra Styles */}
      <style>{`
        .perspective { perspective: 1500px; }
        .preserve-3d { transform-style: preserve-3d; }
        .animate-spin-slow { animation: spin 20s linear infinite; }
        @keyframes spin { from { transform: rotateY(0deg); } to { transform: rotateY(360deg); } }
      `}</style>
    </div>
  );
}
