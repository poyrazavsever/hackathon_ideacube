import React from 'react';
import DiscoverIdeaCard from '../DiscoverIdeaCard';

const ideas = [
  { title: 'Yapay Zeka Destekli Eğitim Platformu', description: 'Öğrencilerin bireysel öğrenme hızına uyum sağlayan bir platform.', category: 'Eğitim', sector: 'Teknoloji', likes: 120, comments: 15, isFavorited: true },
  { title: 'Sürdürülebilir Moda Uygulaması', description: 'Geri dönüştürülebilir ve etik moda ürünlerini tanıtan bir pazar yeri.', category: 'Moda', sector: 'E-ticaret', likes: 85, comments: 8, isFavorited: false },
  { title: 'Akıllı Ev Otomasyonu', description: 'Enerji tasarrufu sağlayan yapay zeka destekli ev otomasyon sistemi.', category: 'Teknoloji', sector: 'Enerji', likes: 95, comments: 12, isFavorited: true },
  { title: 'Mobil Sağlık Danışmanı', description: 'Uzaktan sağlık hizmetleri sunan yapay zeka tabanlı uygulama.', category: 'Sağlık', sector: 'Teknoloji', likes: 110, comments: 18, isFavorited: false },
];

const IdeaCards = () => {
  return (
    <div className="container mx-auto py-12 md:py-24">
        <div className="p-4 grid grid-cols-1 sm:grid-cols-2 gap-4 justify-items-center">

        {ideas.map((idea, index) => (
            <DiscoverIdeaCard 
            key={index} 
            title={idea.title} 
            description={idea.description} 
            category={idea.category} 
            sector={idea.sector} 
            likes={idea.likes} 
            comments={idea.comments} 
            isFavorited={idea.isFavorited} 
            />
        ))}
      
        </div>
    <div className="w-full flex justify-center items-center mt-8">
        <button className="bg-purple-600 text-white py-2 px-6 rounded-lg hover:bg-purple-700">
        Daha fazla fikri keşfetmek için giriş yapın!
        </button>
    </div>
    </div>
  );
};

export default IdeaCards;
