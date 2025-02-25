import React, { useState } from "react";
import DiscoverIdeaCard from "../components/DiscoverIdeaCard";
import FiltreBar from "../components/Discover/FilterBar";
import { motion } from "framer-motion";

const exampleIdeas = [
  { id: 1, title: "Yapay Zeka ile Tarım", description: "Sensörler ve AI destekli analizlerle tarımsal verimliliği artırma.", category: "Teknoloji", sector: "Tarım", likes: 120, comments: 35, isFavorited: false },
  { id: 2, title: "Sürdürülebilir Moda", description: "Atık kumaşlardan geri dönüştürülmüş giyim ürünleri tasarlama.", category: "Moda", sector: "Tekstil", likes: 85, comments: 20, isFavorited: true },
  { id: 3, title: "Freelancer Platformu", description: "Ödeme garantili freelance iş platformu.", category: "İş", sector: "Yazılım", likes: 200, comments: 50, isFavorited: false },
  { id: 4, title: "Online Psikolojik Destek", description: "Yapay zeka destekli online terapi platformu.", category: "Sağlık", sector: "Psikoloji", likes: 150, comments: 40, isFavorited: true },
  { id: 5, title: "Akıllı Ev Sistemleri", description: "Enerji verimli, IoT destekli akıllı ev çözümleri.", category: "Teknoloji", sector: "İnşaat", likes: 175, comments: 30, isFavorited: false },
  { id: 6, title: "Eğitimde VR Kullanımı", description: "Ders içeriklerini sanal gerçeklik ile daha etkili hale getirme.", category: "Eğitim", sector: "Teknoloji", likes: 95, comments: 25, isFavorited: true },
  { id: 7, title: "Sağlıklı Fast Food", description: "Düşük kalorili ve sağlıklı fast food seçenekleri.", category: "Gıda", sector: "Yiyecek", likes: 130, comments: 28, isFavorited: false },
  { id: 8, title: "Evcil Hayvan Takip Cihazı", description: "Kaybolan evcil hayvanları bulmak için GPS destekli akıllı cihaz.", category: "Teknoloji", sector: "Evcil Hayvan", likes: 110, comments: 22, isFavorited: true },
  { id: 9, title: "Geri Dönüşüm Uygulaması", description: "Kullanıcıların atıklarını doğru şekilde ayrıştırmasını sağlayan uygulama.", category: "Çevre", sector: "Geri Dönüşüm", likes: 98, comments: 15, isFavorited: false }
];

const Ideas = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 16;

  // Öne çıkan fikirleri filtrele
  const featuredIdeas = exampleIdeas.filter(idea => idea.isFavorited);

  // Mevcut sayfanın fikirlerini hesapla
  const indexOfLastIdea = currentPage * itemsPerPage;
  const indexOfFirstIdea = indexOfLastIdea - itemsPerPage;
  const remainingIdeas = exampleIdeas.filter(idea => !idea.isFavorited);
  const currentIdeas = remainingIdeas.slice(indexOfFirstIdea, indexOfLastIdea);

  // Sayfa değiştirme fonksiyonu
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="container mx-auto p-6 py-24">
      {/* Öne Çıkan Fikirler - Filtre Barı Üstünde */}
      <motion.div
        className="mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl font-semibold mb-4">Öne Çıkan Fikirler</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {featuredIdeas.slice(0, 4).map((idea) => (
            <DiscoverIdeaCard key={idea.id} {...idea} />
          ))}
        </div>
      </motion.div>

      {/* Filtreleme Barı */}
      <FiltreBar />

      {/* Fikir Listesi */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {currentIdeas.map((idea) => (
          <DiscoverIdeaCard key={idea.id} {...idea} />
        ))}
      </motion.div>

      {/* Sayfalama Kontrolleri */}
      <div className="flex justify-center mt-8 space-x-2">
        {[...Array(Math.ceil(remainingIdeas.length / itemsPerPage)).keys()].map((num) => (
          <button
            key={num + 1}
            onClick={() => paginate(num + 1)}
            className={`px-4 py-2 rounded-md transition-all ${currentPage === num + 1 ? 'bg-primary text-white' : 'bg-gray-200 text-gray-600 hover:bg-gray-300'}`}
          >
            {num + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Ideas;
