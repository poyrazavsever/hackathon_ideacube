import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white pt-12 md:pt-24 -z-10">
      {/* E-bülten Abonelik Alanı */}
      <div className="relative bg-white shadow-lg mx-auto max-w-3xl rounded-lg p-6 text-center -top-10">
        <h3 className="text-2xl font-semibold text-gray-900">
          Güncellemeleri Kaçırma
        </h3>
        <div className="mt-4 flex flex-col sm:flex-row justify-center gap-2">
          <input
            type="email"
            placeholder="Mail Adresinizi Giriniz."
            className="w-full sm:w-80 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 outline-none"
          />
          <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg transition-all">
            Abone Ol
          </button>
        </div>
      </div>

      {/* Footer Bağlantılar */}
      <div className="text-center text-gray-700 text-sm">
        <ul className="flex justify-center gap-6 mb-4">
          <li className="hover:text-purple-600 cursor-pointer">Hakkımızda</li>
          <li className="hover:text-purple-600 cursor-pointer">Keşfet</li>
          <li className="hover:text-purple-600 cursor-pointer">Açıkla</li>
          <li className="hover:text-purple-600 cursor-pointer">Fikirler</li>
        </ul>
        <div className="flex justify-center gap-4 text-xl mb-4">
          <i className="fa-brands fa-facebook hover:text-purple-600 cursor-pointer"></i>
          <i className="fa-brands fa-twitter hover:text-purple-600 cursor-pointer"></i>
          <i className="fa-brands fa-vimeo hover:text-purple-600 cursor-pointer"></i>
          <i className="fa-brands fa-youtube hover:text-purple-600 cursor-pointer"></i>
        </div>

        {/* Copyright ve Gizlilik Politikası */}
        <div className="border-t border-gray-200 pt-4 pb-6">
          <p>© 2025 Grow Together. Bütün hakları saklıdır.</p>
          <p className="hover:text-purple-600 cursor-pointer mt-1">
            Gizlilik Politikası
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
