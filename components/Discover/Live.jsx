import React, { useState } from "react";
import { motion } from "framer-motion";

const events = [
  {
    id: 1,
    title: "Freelance Dünyasında Başarı",
    date: "27 Şubat 2025, 19:00",
    description:
      "Başarılı freelancerlar deneyimlerini paylaşıyor ve iş dünyasında nasıl başarı sağladıkları hakkında konuşuyorlar.",
    rules:
      "Katılım için en az 1 yıllık freelance deneyiminiz olmalıdır. Katılımcılardan, etkinlikten önce hazırlık yapmaları istenecektir.",
    location: "Online (Zoom)",
    organizer: "Freelance Topluluğu",
  },
  {
    id: 2,
    title: "AI ve Web Geliştirme",
    date: "3 Mart 2025, 21:00",
    description:
      "Yapay zeka destekli web projeleri nasıl geliştirilir? Uzmanlar tarafından anlatılacak.",
    rules: "Katılım ücretsizdir, kayıt gereklidir. Başvuru linki sağlanacaktır.",
    location: "Online (Google Meet)",
    organizer: "AI Geliştiriciler Derneği",
  },
  {
    id: 3,
    title: "Tasarımcı & Yazılımcı İşbirliği",
    date: "10 Mart 2025, 20:00",
    description:
      "UI/UX tasarımcıları ve yazılımcıların daha iyi nasıl işbirliği yapabileceğini keşfedin.",
    rules: "Tasarım veya yazılım alanında bilgi sahibi olmalısınız. Katılımcılara önceden bir soru formu gönderilecektir.",
    location: "Fiziksel (İstanbul, Teknokent)",
    organizer: "Tasarımcılar & Yazılımcılar Birliği",
  },
];

const Live = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);

  return (
    <div className="container mx-auto px-4 py-8 md:py-16">
      <h2 className="text-2xl font-bold mb-12 text-center">Yaklaşan Canlı Etkinlikler</h2>
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
            <button
              onClick={() => setSelectedEvent(event)}
              className="mt-4 w-full bg-purple-600 text-white py-2 rounded-md hover:bg-purple-700"
            >
              Katıl
            </button>
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      {selectedEvent && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white p-6 rounded-lg shadow-lg w-full max-w-xl"
          >
            <h3 className="text-2xl font-bold">{selectedEvent.title}</h3>
            <p className="text-gray-500">{selectedEvent.date}</p>

            <div className="mt-4">
              <h4 className="text-lg font-semibold">Etkinlik Açıklaması</h4>
              <p className="text-gray-700">{selectedEvent.description}</p>
            </div>

            <div className="mt-4">
              <h4 className="text-lg font-semibold">Katılım Koşulları</h4>
              <p className="text-gray-600">{selectedEvent.rules}</p>
            </div>

            <div className="mt-4">
              <h4 className="text-lg font-semibold">Etkinlik Yeri</h4>
              <p className="text-gray-600">{selectedEvent.location}</p>
            </div>

            <div className="mt-4">
              <h4 className="text-lg font-semibold">Düzenleyen</h4>
              <p className="text-gray-600">{selectedEvent.organizer}</p>
            </div>

            <div className="flex gap-4 mt-6">
              <button
                onClick={() => setSelectedEvent(null)}
                className="w-1/2 bg-gray-500 text-white py-2 rounded-md hover:bg-gray-600"
              >
                Kapat
              </button>
              <button
                onClick={() => alert("Kayıt başarılı!")}
                className="w-1/2 bg-purple-600 text-white py-2 rounded-md hover:bg-purple-700"
              >
                Kayıt Ol
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default Live;
