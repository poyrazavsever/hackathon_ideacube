import React from "react";
import { motion } from "framer-motion";

const events = [
  {
    id: 1,
    title: "Freelance Dünyasında Başarı",
    date: "27 Şubat 2025, 19:00",
    description: "Başarılı freelancerlar deneyimlerini paylaşıyor.",
  },
  {
    id: 2,
    title: "AI ve Web Geliştirme",
    date: "3 Mart 2025, 21:00",
    description: "Yapay zeka destekli web projeleri nasıl geliştirilir?",
  },
  {
    id: 3,
    title: "Tasarımcı & Yazılımcı İşbirliği",
    date: "10 Mart 2025, 20:00",
    description: "UI/UX tasarımcılar ve yazılımcılar nasıl daha iyi çalışır?",
  },
];

const Live = () => {
  return (
    <div className="container mx-auto px-4 py-8 md:py-24">
      <h2 className="text-2xl font-bold mb-4 text-center">🎙️ Yaklaşan Canlı Etkinlikler</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {events.map((event) => (
          <motion.div
            key={event.id}
            whileHover={{ scale: 1.05 }}
            className="bg-white shadow-md rounded-lg p-4 border border-gray-200"
          >
            <h3 className="text-lg font-semibold">{event.title}</h3>
            <p className="text-gray-500 text-sm">{event.date}</p>
            <p className="text-gray-700 mt-2">{event.description}</p>
            <button className="mt-4 w-full bg-purple-600 text-white py-2 rounded-md hover:bg-purple-700">
              Katıl
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Live;
