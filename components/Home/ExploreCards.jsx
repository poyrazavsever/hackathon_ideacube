import React from "react";
import { BiDollarCircle, BiBriefcase, BiBulb } from "react-icons/bi";

const ExploreCards = () => {
  const cards = [
    {
      title: "Yatırımcı mısınız?",
      description:
        "Yüksek potansiyele sahip girişimleri erken aşamada keşfedin ve büyüme yolculuklarında destek olun. GrowTogether, inovatif projeleri size sunarak doğru girişime yatırım yapma fırsatı sağlar.",
      buttonText: "Fırsatları Keşfet",
      bgColor: "bg-white",
      textColor: "text-gray-900",
      buttonColor: "bg-primary text-white hover:bg-opacity-80",
    },
    {
      title: "Proje mi arıyorsunuz?",
      description:
        "Yetilerinizi en iyi şekilde kullanabileceğiniz projeler mi arıyorsunuz? GrowTogether, yazılımcılardan tasarımcılara, pazarlama uzmanlarından iş geliştiricilere kadar herkes için fırsatlar sunar.",
      buttonText: "Projeleri Keşfet",
      bgColor: "bg-primary text-white",
      textColor: "text-white",
      buttonColor: "bg-white text-primary hover:bg-opacity-90",
    },
    {
      title: "Fikriniz mi var?",
      description:
        "Harika bir fikriniz var ama hayata geçirmek için ekibe veya yatırıma mı ihtiyacınız var? GrowTogether, uzmanları ve yatırımcıları bir araya getirerek fikrinizi gerçek bir girişime dönüştürmenize yardımcı olur.",
      buttonText: "Fikirleri Keşfet",
      bgColor: "bg-white",
      textColor: "text-gray-900",
      buttonColor: "bg-primary text-white hover:bg-opacity-80",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-center items-center py-12 md:py-24 px-4">
      {cards.map((card, index) => (
        <div
          key={index}
          className={`relative p-8 rounded-2xl shadow-neutral-300 shadow-lg transition-all duration-300 hover:shadow-2xl w-full max-w-sm md:max-w-md ${card.bgColor}`}
        >
          {/* İçerik */}
          <h3 className={`text-lg font-semibold mb-3 ${card.textColor}`}>
            {card.title}
          </h3>
          <p className={`text-sm mb-5 ${card.textColor} opacity-90`}>
            {card.description}
          </p>

          {/* Buton */}
          <button
            className={`px-5 py-2.5 rounded-lg font-medium transition-all duration-200 ${card.buttonColor}`}
          >
            {card.buttonText}
          </button>
        </div>
      ))}
    </div>
  );
};

export default ExploreCards;
