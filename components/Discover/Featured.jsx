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
    name: "Gökhan Topal",
    sector: "Pazar Araştırması",
    rating: 4.9,
    image: "https://media.licdn.com/dms/image/v2/D4D03AQGTHq1QI2M9GA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1703926062688?e=1746057600&v=beta&t=9LsZyrf1HxRqgj3TFcjqbwbE9Rpa2kP6Rr3E2Weud_Q",
  },
  {
    name: "Hasibe Aysan",
    sector: "Yazılım Geliştirme",
    rating: 4.8,
    image: "https://media.licdn.com/dms/image/v2/D4D03AQE7edQe-Olkow/profile-displayphoto-shrink_200_200/B4DZQyLhn9HMAY-/0/1736008670887?e=1746057600&v=beta&t=5MsPX-gGhoiQD7tZI0_X9HOpOSsS9YMMEJDosq9FBQE",

  },
  {
    name: "Zeynep Baysal",
    sector: "Dijital Pazarlama",
    rating: 4.7,
    image: "https://media.licdn.com/dms/image/v2/D4E03AQG9AlIc8RwLJg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1701677026124?e=1746057600&v=beta&t=4g5NS26jqvWBE9q1kM-lxg3knOM2gax7WZ6RMvdeCyQ",
  },
  {
    name: "Abdullah Çörtü",
    sector: "Dijital Pazarlama",
    rating: 4.7,
    image: "/images/abdullah.jpg",
  },
];

const FeaturedSection = () => {
  return <Featured profiles={mockProfiles} />;
};

export default FeaturedSection;
