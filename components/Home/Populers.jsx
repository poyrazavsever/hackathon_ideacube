import React from "react";
import { FaCode, FaBrain, FaFilm, FaPalette, FaGlobe, FaBook } from "react-icons/fa";

const categories = [
  { name: "Web Geliştirme", icon: <FaCode />, active: false },
  { name: "Yapay Zeka", icon: <FaBrain />, active: true },
  { name: "Video & Animasyon", icon: <FaFilm />, active: false },
  { name: "Grafik Tasarım", icon: <FaPalette />, active: false },
  { name: "İnternet Reklamcılığı", icon: <FaGlobe />, active: true },
  { name: "Örgün Eğitim", icon: <FaBook />, active: false },
];

const Populers = () => {
  return (
    <div className="flex flex-col items-center text-center py-12 md:py-24">
      {/* Başlık ve Açıklama */}
      <div className="max-w-2xl flex flex-col gap-4">
        <h2 className="text-3xl font-bold">
          En <span className="text-primary">Popüler</span> Alanlar
        </h2>
        <p className="text-gray-700 mt-4">
          Girişimciler, en yaratıcı fikirlerini GrowTogether platformunda paylaşarak büyütüyor. 
          Teknolojiden sağlığa, eğitimden yeşil enerjiye kadar birçok farklı alanda projeler geliştirilmektedir. 
          Farklı sektörlerdeki fikirler ve girişimler bir araya gelerek iş dünyasında fark yaratıyor.
        </p>
      </div>

      {/* Kategori Butonları */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-12">
        {categories.map((category, index) => (
          <button
            key={index}
            className={`flex items-center justify-center gap-2 px-6 py-3 rounded-full border text-lg font-medium
              ${category.active ? "bg-purple-100 text-black" : "border-gray-300 text-gray-700"} 
              hover:bg-purple-200 transition-all`}
          >
            {category.icon} {category.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Populers;
