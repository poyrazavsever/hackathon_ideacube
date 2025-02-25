import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaUserTie, FaLightbulb, FaBriefcase } from "react-icons/fa";

const Register = () => {
  const [step, setStep] = useState(1);
  const [userType, setUserType] = useState("");

  const handleSelectType = (type) => {
    setUserType(type);
    setStep(2);
  };

  const handleBackToStep1 = () => {
    setStep(1);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <motion.div
        key={step}
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -50 }}
        transition={{ duration: 0.5 }}
        className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md"
      >
        {step === 1 && (
          <div className="text-center">
            <h2 className="text-2xl font-semibold text-gray-900">Hesap Türünü Seç</h2>
            <p className="text-gray-500 mt-2">Kendini nasıl tanımlıyorsun?</p>

            <div className="mt-6 flex flex-col gap-4">
              <button
                className="flex items-center gap-3 p-4 w-full border rounded-lg hover:bg-gray-100 transition-all"
                onClick={() => handleSelectType("Yatırımcı")}
              >
                <FaUserTie size={24} className="text-blue-600" />
                Yatırımcı
              </button>
              <button
                className="flex items-center gap-3 p-4 w-full border rounded-lg hover:bg-gray-100 transition-all"
                onClick={() => handleSelectType("Fikir Sahibi")}
              >
                <FaLightbulb size={24} className="text-yellow-500" />
                Fikir Sahibi
              </button>
              <button
                className="flex items-center gap-3 p-4 w-full border rounded-lg hover:bg-gray-100 transition-all"
                onClick={() => handleSelectType("Çalışan")}
              >
                <FaBriefcase size={24} className="text-green-600" />
                Çalışan
              </button>
            </div>
          </div>
        )}

        {step === 2 && (
          <div>
            <button
              onClick={handleBackToStep1}
              className="text-purple-600 mb-4 flex items-center gap-2"
            >
              ← Geri Dön
            </button>
            <h2 className="text-2xl font-semibold text-gray-900 text-center">
              {userType} Kaydı
            </h2>
            <p className="text-gray-500 text-center mt-2">
              Lütfen bilgilerinizi doldurun
            </p>

            <div className="mt-6">
              <label className="block text-gray-700">İsim</label>
              <input
                type="text"
                placeholder="Adınız ve Soyadınız"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg mt-1 focus:ring-2 focus:ring-purple-500 outline-none"
              />
            </div>

            <div className="mt-4">
              <label className="block text-gray-700">E-mail</label>
              <input
                type="email"
                placeholder="E-mail adresiniz"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg mt-1 focus:ring-2 focus:ring-purple-500 outline-none"
              />
            </div>

            <div className="mt-4">
              <label className="block text-gray-700">Şifre</label>
              <input
                type="password"
                placeholder="Şifreniz"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg mt-1 focus:ring-2 focus:ring-purple-500 outline-none"
              />
            </div>

            <button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg mt-6 transition-all">
              Kaydı Tamamla
            </button>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default Register;
