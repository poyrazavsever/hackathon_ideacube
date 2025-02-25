import React from 'react';
import { FaHeart, FaRegHeart, FaComment, FaBookmark } from 'react-icons/fa';
import { motion } from 'framer-motion';

const DiscoverIdeaCard = ({ title, description, category, sector, likes, comments, isFavorited }) => {
  return (
    <motion.div 
      className="bg-white p-4 rounded-2xl shadow-md hover:shadow-lg transition-all cursor-pointer min-w-full"
      whileHover={{ scale: 1.03 }}
    >
      {/* Başlık ve Açıklama */}
      <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
      <p className="text-gray-600 text-sm mt-1 line-clamp-2">{description}</p>
      
      {/* Kategori & Sektör */}
      <div className="mt-3 flex flex-wrap gap-2 text-xs font-medium text-white">
        <span className="bg-purple-500 px-2 py-1 rounded-md">{category}</span>
        <span className="bg-blue-500 px-2 py-1 rounded-md">{sector}</span>
      </div>
      
      {/* Etkileşimler */}
      <div className="mt-4 flex justify-between items-center text-gray-500 text-sm">
        <div className="flex items-center gap-2">
          <button className="flex items-center gap-1 hover:text-red-500">
            {isFavorited ? <FaHeart className="text-red-500" /> : <FaRegHeart />} {likes}
          </button>
          <div className="flex items-center gap-1">
            <FaComment /> {comments}
          </div>
        </div>
        <button className="text-gray-600 hover:text-yellow-500">
          <FaBookmark />
        </button>
      </div>
    </motion.div>
  );
};

export default DiscoverIdeaCard;
