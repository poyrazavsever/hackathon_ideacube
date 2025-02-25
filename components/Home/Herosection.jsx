import React from "react";

const HeroSection = () => {
  return (
    <section className="relative text-center py-16 md:py-32">

      {/* İçerik */}
      <div className="relative z-10 mb-16 md:mb-36">
        {/* Başlık */}
        <h1 className="text-xl md:text-3xl font-semibold text-black mb-4">
          Fikrini Hayata Geçir, Doğru Ekibi ve Yatırımı Bul!
        </h1>

        {/* Açıklama */}
        <p className="text-gray-600 max-w-2xl mx-auto mb-6">
          Harika bir fikrin var ama hayata geçirmek için ekibe mi ihtiyacın var? Ya da yatırımcı arıyorsun ama doğru insanlara nasıl ulaşacağını bilmiyor musun? 
          <strong> GrowTogether</strong>, girişimcileri güç ve yatırımcılarla buluşturarak fikirleri gerçeğe dönüştürmeye yardımcı olur. 
          Projeni oluştur, ihtiyaçlarını belirle ve seninle aynı vizyonu paylaşan insanlarla birlikte büyümeye başla!
        </p>

        {/* Butonlar */}
        <div className="flex justify-center gap-4">
          <button className="bg-primary hover:bg-opacity-70 text-white px-6 py-3 rounded-md font-medium transition-all">
            Hemen Kayıt Ol
          </button>
          <button className="border border-primary text-primary hover:bg-secondary hover:text-white px-6 py-3 rounded-md font-medium transition-all">
            Keşfetmeye Başla 
          </button>
        </div>
      </div>

      {/* Logolar */}
      <div className="mt-16 flex justify-center gap-8">
        <img src="/logos/1.jpeg" alt="Logo 1" className="h-12" />
        <img src="/logos/2.jpeg" alt="Logo 2" className="h-12" />
        <img src="/logos/3.jpeg" alt="Logo 3" className="h-12" />
        <img src="/logos/4.jpeg" alt="Logo 4" className="h-12" />
      </div>

    </section>
  );
};

export default HeroSection;
