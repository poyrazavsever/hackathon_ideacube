import React from "react";
import { BiDollarCircle, BiBriefcase, BiBulb } from "react-icons/bi";

const ExploreCards = () => {
  const cards = [
    {
      title: "Yatırımcı mısınız?",
      description:
        "Yüksek potansiyele sahip girişimleri erken aşamada keşfedin ve büyüme yolculuklarında destek olun. GrowTogether, inovatif projeleri size sunarak doğru girişime yatırım yapma fırsatı sağlar.",
      buttonText: "Fırsatları Keşfet",
      icon: <BiDollarCircle className="text-4xl text-primary" />,
      bgColor: "bg-white",
      textColor: "text-gray-900",
      buttonColor: "bg-primary text-white hover:bg-opacity-80",
    },
    {
      title: "Proje mi arıyorsunuz?",
      description:
        "Yetilerinizi en iyi şekilde kullanabileceğiniz projeler mi arıyorsunuz? GrowTogether, yazılımcılardan tasarımcılara, pazarlama uzmanlarından iş geliştiricilere kadar herkes için fırsatlar sunar.",
      buttonText: "Projeleri Keşfet",
      icon: <BiBriefcase className="text-4xl text-secondary" />,
      bgColor: "bg-primary text-white",
      textColor: "text-white",
      buttonColor: "bg-white text-primary hover:bg-opacity-90",
    },
    {
      title: "Fikriniz mi var?",
      description:
        "Harika bir fikriniz var ama hayata geçirmek için ekibe veya yatırıma mı ihtiyacınız var? GrowTogether, uzmanları ve yatırımcıları bir araya getirerek fikrinizi gerçek bir girişime dönüştürmenize yardımcı olur.",
      buttonText: "Fikirleri Keşfet",
      icon: <BiBulb className="text-4xl text-primary" />,
      bgColor: "bg-white",
      textColor: "text-gray-900",
      buttonColor: "bg-primary text-white hover:bg-opacity-80",
    },
  ];

  return (
    <div className="flex flex-col md:flex-row gap-6 justify-center items-center py-12 md:py-24">
      {cards.map((card, index) => (
        <div
          key={index}
          className={`relative p-8 rounded-2xl shadow-neutral-300 shadow-lg transition-all duration-300 hover:shadow-2xl w-full max-w-sm md:max-w-md ${card.bgColor}`}
        >
          {/* Icon */}
          <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-opacity-20 rounded-full flex items-center justify-center">
            {card.icon}
          </div>

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
