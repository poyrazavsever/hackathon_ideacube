import React, { useState } from 'react';
import axios from 'axios';

const AI = () => {
  const [prompt, setPrompt] = useState('');
  const [evaluation, setEvaluation] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const response = await axios.post('/api/evaluate', { prompt }); // Backend API'ye istek
      setEvaluation(response.data.result); // Backend'den gelen sonucu ayarla
    } catch (err) {
      setError(err.response?.data?.error || err.message); // Detaylı hata mesajı
    } finally {
      setIsLoading(false);
    }
  };

  // Evaluation sonucunu daha düzenli bir şekilde parse etme
  const renderEvaluation = () => {
    if (!evaluation) return null;
    
    const sections = evaluation.split("\n\n"); // Değerlendirme metnini her bir bölüm için ayır
    return sections.map((section, index) => {
      const lines = section.split("\n"); // Her bir bölümü satırlara ayır
      const title = lines[0]?.replace("**", "").replace("**", ""); // Başlıkları temizle
      const score = lines[1]?.match(/(\d+\/10)/g); // Puanı bul
      const description = lines.slice(2).join(" "); // Açıklama kısmını al

      return (
        <div key={index} className="mt-4">
          <h3 className="text-lg font-semibold text-gray-700">{title}</h3>
          <p className="text-sm text-gray-500">{description}</p>
          {score && (
            <p className="text-sm font-bold text-gray-800">Puan: {score}</p>
          )}
        </div>
      );
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-primary shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative bg-white shadow-lg sm:rounded-3xl p-8">
          <h1 className="text-2xl font-bold text-gray-800 text-center mb-6">Girişim Fikri Değerlendirme</h1>

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="prompt" className="block text-gray-700 text-sm font-bold mb-2">
                Girişim Fikri:
              </label>
              <textarea
                id="prompt"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                rows="4"
                placeholder="Girişim fikrinizi buraya yazın..."
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
              />
            </div>

            <div className="flex items-center justify-between">
              <button
                className="bg-primary hover:bg-opacity-70 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition-all"
                type="submit"
                disabled={isLoading}
              >
                {isLoading ? 'Değerlendiriliyor...' : 'Değerlendir'}
              </button>
            </div>
          </form>

          {error && (
            <div className="mt-4 text-red-500">
              Hata: {error}
            </div>
          )}

          {evaluation && (
            <div className="mt-6 border rounded p-4 bg-gray-50">
              <h2 className="text-lg font-semibold text-gray-700 mb-2">Değerlendirme Sonucu:</h2>
              {renderEvaluation()} {/* Değerlendirmeleri düzenli şekilde render et */}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AI;
