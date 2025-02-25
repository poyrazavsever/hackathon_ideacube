import React, { useState, useEffect } from "react";
import InvestorCard from "../components/InvestorCard";
import { motion } from "framer-motion";

const Investors = () => {
  const [investors, setInvestors] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const sampleInvestors = [
      { 
        id: 1, 
        name: "Ali Yılmaz", 
        profilePic: "images/poyraz.jpg", 
        isFeatured: true, 
        popularity: 95,
        bio: "Yatırım alanında 10 yılı aşkın deneyim.",
        country: "Türkiye",
        investments: ["Teknoloji Start-up", "Yeşil Enerji"]
      },
      { 
        id: 2, 
        name: "Ayşe Demir", 
        profilePic: "images/poyraz.jpg", 
        isFeatured: true, 
        popularity: 90,
        bio: "Genç yatırımcı, hızla büyüyen şirketlerde hissedar.",
        country: "Türkiye",
        investments: ["E-Ticaret", "Sağlık Teknolojileri"]
      },
      { 
        id: 3, 
        name: "Mehmet Çelik", 
        profilePic: "images/poyraz.jpg", 
        isFeatured: false, 
        popularity: 85,
        bio: "Geleneksel yatırımcı.",
        country: "Türkiye",
        investments: ["Gayrimenkul"]
      },
      { 
        id: 4, 
        name: "Zeynep Kaya", 
        profilePic: "images/poyraz.jpg", 
        isFeatured: false, 
        popularity: 80,
        bio: "Yatırım dünyasına yeni adım atmış bir girişimci.",
        country: "Türkiye",
        investments: ["E-Ticaret"]
      },
      { 
        id: 5, 
        name: "Burak Şahin", 
        profilePic: "images/poyraz.jpg", 
        isFeatured: false, 
        popularity: 88,
        bio: "Yatırım ve teknoloji dünyasında lider.",
        country: "Türkiye",
        investments: ["Yapay Zeka", "Fintech"]
      },
      { 
        id: 6, 
        name: "Elif Koç", 
        profilePic: "images/poyraz.jpg", 
        isFeatured: false, 
        popularity: 78,
        bio: "Girişimci bir yatırımcı.",
        country: "Türkiye",
        investments: ["Eğitim Teknolojileri"]
      }
    ];
    
    setInvestors(sampleInvestors);
    setLoading(false);
  }, []);

  // isFeatured = true olan yatırımcıları filtreliyoruz
  const featuredInvestors = investors.filter(inv => inv.isFeatured);
  // Yatırımcıları popülerliğe göre sıralıyoruz
  const popularInvestors = [...investors].sort((a, b) => b.popularity - a.popularity);

  return (
    <div className="container mx-auto p-6 py-12 md:py-24">
      {/* Öne Çıkan Yatırımcılar Başlığı ve Kartları */}
      <h1 className="text-2xl font-bold mb-12">Öne Çıkan Yatırımcılar</h1>
      <motion.div 
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {featuredInvestors.map((investor) => (
          <InvestorCard 
            key={investor.id} 
            {...investor} 
            isFeatured={investor.isFeatured} // Öne çıkarılan yatırımcıyı işaretle
          />
        ))}
      </motion.div>

      {/* Popüler Yatırımcılar Başlığı ve Kartları */}
      <h1 className="text-2xl font-bold my-12">Popüler Yatırımcılar</h1>
      <motion.div 
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {popularInvestors.filter(inv => !inv.isFeatured).map((investor) => (
          <InvestorCard 
            key={investor.id} 
            {...investor} 
            isFeatured={investor.isFeatured} // Popüler yatırımcıda da isFeatured'ı ekleyelim
          />
        ))}
      </motion.div>
    </div>
  );
};

export default Investors;
