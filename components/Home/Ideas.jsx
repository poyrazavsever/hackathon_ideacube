import React from "react";
import IdeaCard from "../IdeaCard";

const Ideas = () => {
  const ideas = [
    {
      title: "Yapay Zekâ Destekli CV Hazırlama Platformu",
      description:
        "İş arayanlar için yapay zekâ destekli bir CV oluşturma platformu...",
      needs: ["Bir AI geliştirici", "UI/UX tasarımcı", "Dijital pazarlama uzmanı"],
    },
    {
      title: "İnternete Bağlı Otomatik Mama Dağıtıcısı",
      description:
        "Evcil hayvan sahipleri için mobil uygulama ile kontrol edilebilen akıllı besleyici...",
      needs: ["Elektronik mühendisi", "Mobil uygulama geliştirici", "Üretim partneri"],
    },
    {
      title: "Saatlik Araç Kiralama Uygulaması",
      description:
        "Airbnb mantığında çalışan, bireylerin kendi araçlarını kiralamasına olanak tanıyan bir platform...",
      needs: ["Fullstack developer", "Finans ve sigorta uzmanı", "Mobil uygulama geliştirici"],
    },
    {
      title: "GreenPack - Sıfır Atık Gıda Paketleme",
      description:
        "Plastik atıkları azaltmak için yenilebilir ve biyobozunur gıda paketleri üreten bir girişim...",
      needs: ["Malzeme mühendisi", "Satış-pazarlama uzmanı", "Üretim danışmanı"],
    },
    {
      title: "VRTour - Sanal Gerçeklik ile Ev Turu",
      description:
        "Emlak şirketleri ve bireysel satıcılar için sanal gerçeklik destekli ev turları sunan bir platform...",
      needs: ["VR/AR geliştirici", "3D modelleme uzmanı", "Gayrimenkul danışmanı"],
    },
    {
      title: "MoodTune - Ruh Halini Analiz Eden Uygulama",
      description:
        "Yapay zekâ destekli bir müzik uygulaması. Kullanıcının ruh halini analiz ederek en uygun müziği önerir...",
      needs: ["AI/ML geliştirici", "Müzik endüstrisi danışmanı", "Mobil uygulama tasarımcısı"],
    },
  ];

  return (
    <div className="py-12 md:py-24">
      <h2 className="text-2xl font-bold text-center mb-6">
        En Popüler <span className="text-primary">Fikirler</span>
      </h2>
      <div className="flex flex-wrap gap-6 justify-center">
        {ideas.map((idea, index) => (
          <IdeaCard key={index} {...idea} />
        ))}
      </div>
      <div className="flex justify-center mt-8">
        <button className="bg-primary text-white px-6 py-3 rounded-lg shadow-md hover:bg-opacity-80">
          Fikirleri Keşfet
        </button>
      </div>
    </div>
  );
};

export default Ideas;
