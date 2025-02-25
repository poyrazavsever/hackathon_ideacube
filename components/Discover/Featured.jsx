import React from "react";

const Featured = ({ profiles }) => {
  return (
    <div className="p-6 rounded-xl container mx-auto py-12 md:py-24">
      <h2 className="text-2xl font-semibold text-gray-800 mb-8">En Çok Oylanan Profiller</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {profiles.map((profile, index) => (
          <div key={index} className="bg-neutral-50 p-4 rounded-lg shadow-md flex items-center gap-4">
            <img
              src={profile.image}
              alt={profile.name}
              className="w-16 h-16 rounded-full object-cover"
            />
            <div>
              <h3 className="text-lg font-medium">{profile.name}</h3>
              <p className="text-gray-600">{profile.sector}</p>
              <p className="text-yellow-500 font-semibold">{profile.rating} ★</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Örnek veri
const mockProfiles = [
  {
    name: "Talha Tarlabaz",
    sector: "Pazar Araştırması",
    rating: 4.9,
    image: "/images/talha.jpg",
  },
  {
    name: "Poyraz Avsever",
    sector: "Yazılım Geliştirme",
    rating: 4.8,
    image: "/images/poyraz.jpg",

  },
  {
    name: "Halitcan Emir",
    sector: "Dijital Pazarlama",
    rating: 4.7,
    image: "/images/halit.jpg",
  },
];

const FeaturedSection = () => {
  return <Featured profiles={mockProfiles} />;
};

export default FeaturedSection;
