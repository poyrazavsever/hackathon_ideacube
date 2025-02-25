import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiFilter } from 'react-icons/fi';
import { FaAngleDown } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';

const FilterBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedSectors, setSelectedSectors] = useState([]);
  const [selectedRatings, setSelectedRatings] = useState([]);
  const [selectedDate, setSelectedDate] = useState('');
  const [keyword, setKeyword] = useState('');

  const sectors = ['Teknoloji', 'Sağlık', 'Finans', 'Eğitim', 'E-ticaret', 'Enerji', 'Otomotiv', 'Turizm', 'Gayrimenkul', 'Perakende', 'Üretim', 'Gıda', 'Medya', 'Hukuk'];
  const ratings = ['1+ Yıldız', '2+ Yıldız', '3+ Yıldız', '4+ Yıldız', '5 Yıldız'];
  const dateFilters = ['Son 1 Ay', 'Son 6 Ay', 'Son 1 Yıl'];

  const toggleSelection = (item, list, setList) => {
    setList((prev) =>
      prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]
    );
  };

  const resetFilters = () => {
    setSelectedSectors([]);
    setSelectedRatings([]);
    setSelectedDate('');
    setKeyword('');
  };

  return (
    <div className="bg-purple-600 p-4 rounded-xl shadow-lg w-full max-w-md mx-auto">
      <motion.div 
        className="flex justify-between items-center cursor-pointer text-white"
        onClick={() => setIsOpen(!isOpen)}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex items-center gap-2">
          <FiFilter size={24} />
          <span className="font-semibold">Filtreleri Göster</span>
        </div>
        <motion.div animate={{ rotate: isOpen ? 180 : 0 }}>
          <FaAngleDown size={20} />
        </motion.div>
      </motion.div>

      {isOpen && (
        <motion.div 
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          className="mt-4 bg-white p-4 rounded-lg shadow-inner"
        >
          <div className="flex flex-col gap-4">
            {/* Anahtar Kelime Arama */}
            <div>
              <label className="text-gray-700 font-medium">Anahtar Kelime</label>
              <input
                type="text"
                placeholder="Anahtar kelime giriniz"
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
                className="w-full mt-2 p-2 border rounded-md"
              />
            </div>

            {/* Sektör Seçimi */}
            <div>
              <label className="text-gray-700 font-medium">Sektör</label>
              <div className="mt-2 flex flex-wrap gap-2">
                {sectors.map((sector) => (
                  <button
                    key={sector}
                    className={`px-3 py-1 rounded-md border transition-all ${selectedSectors.includes(sector) ? 'bg-purple-500 text-white shadow-md' : 'bg-gray-100 hover:bg-gray-200'}`}
                    onClick={() => toggleSelection(sector, selectedSectors, setSelectedSectors)}
                  >
                    {sector}
                  </button>
                ))}
              </div>
            </div>

            {/* Değerlendirme Filtresi */}
            <div>
              <label className="text-gray-700 font-medium">Değerlendirme</label>
              <div className="mt-2 flex flex-wrap gap-2">
                {ratings.map((rating) => (
                  <button
                    key={rating}
                    className={`px-3 py-1 rounded-md border transition-all ${selectedRatings.includes(rating) ? 'bg-purple-500 text-white shadow-md' : 'bg-gray-100 hover:bg-gray-200'}`}
                    onClick={() => toggleSelection(rating, selectedRatings, setSelectedRatings)}
                  >
                    {rating}
                  </button>
                ))}
              </div>
            </div>

            {/* Tarih Filtresi */}
            <div>
              <label className="text-gray-700 font-medium">Tarih Aralığı</label>
              <select
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                className="w-full mt-2 p-2 border rounded-md"
              >
                <option value="">Seçiniz</option>
                {dateFilters.map((date) => (
                  <option key={date} value={date}>{date}</option>
                ))}
              </select>
            </div>

            {/* Filtreleri Temizle Butonu */}
            <button
              className="w-full bg-red-500 text-white p-2 rounded-md shadow-md mt-2 hover:bg-red-600 flex items-center justify-center gap-2"
              onClick={resetFilters}
            >
              <AiOutlineClose size={18} /> Filtreleri Temizle
            </button>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default FilterBar;