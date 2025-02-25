import React from "react";

const HeroSection = () => {
  return (
    <section className="relative text-center py-12 md:py-24 lg:py-32 px-4">
      {/* İçerik */}
      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Başlık */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-6">
          Fikrini Hayata Geçir, Doğru Ekibi ve Yatırımı Bul!
        </h1>

        {/* Açıklama */}
        <p className="text-gray-600 max-w-3xl mx-auto mb-8 text-sm sm:text-base md:text-lg">
          Harika bir fikrin var ama hayata geçirmek için ekibe mi ihtiyacın var? Ya da yatırımcı arıyorsun ama doğru insanlara nasıl ulaşacağını bilmiyor musun?
          <strong> GrowTogether</strong>, girişimcileri güç ve yatırımcılarla buluşturarak fikirleri gerçeğe dönüştürmeye yardımcı olur. 
          Projeni oluştur, ihtiyaçlarını belirle ve seninle aynı vizyonu paylaşan insanlarla birlikte büyümeye başla!
        </p>

        {/* Butonlar */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="bg-primary hover:bg-opacity-70 text-white px-6 py-3 rounded-md font-medium transition-all w-full sm:w-auto">
            Hemen Kayıt Ol
          </button>
          <button className="border border-primary text-primary hover:bg-secondary hover:text-white px-6 py-3 rounded-md font-medium transition-all w-full sm:w-auto">
            Keşfetmeye Başla 
          </button>
        </div>
      </div>

      {/* Logolar */}
      <div className="mt-16 flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-12">
        <img src="/logos/1.jpeg" alt="Logo 1" className="h-10 sm:h-12" />
        <img src="/logos/2.jpeg" alt="Logo 2" className="h-10 sm:h-12" />
        <img src="/logos/3.jpeg" alt="Logo 3" className="h-10 sm:h-12" />
        <img src="/logos/4.jpeg" alt="Logo 4" className="h-10 sm:h-12" />
      </div>
    </section>
  );
};

export default HeroSection;
