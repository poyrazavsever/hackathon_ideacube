import React, { useState } from "react";
import { FaGoogle, FaGithub, FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md">
        <h2 className="text-3xl font-semibold text-gray-900 text-center">
          Giriş Yap
        </h2>
        <p className="text-gray-500 text-center mt-2">
          Hesabınıza giriş yapın
        </p>

        <div className="mt-6">
          <label className="block text-gray-700">E-mail</label>
          <input
            type="email"
            placeholder="E-mail adresiniz"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg mt-1 focus:ring-2 focus:ring-purple-500 outline-none"
          />
        </div>

        <div className="mt-4">
          <label className="block text-gray-700">Şifre</label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Şifreniz"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg mt-1 focus:ring-2 focus:ring-purple-500 outline-none pr-10"
            />
            <button
              type="button"
              className="absolute right-3 top-4 text-gray-500"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash size={18} /> : <FaEye size={18} />}
            </button>
          </div>
        </div>

        <button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg mt-6 transition-all">
          Giriş Yap
        </button>

        <div className="mt-6 text-center text-gray-500">veya</div>

        <div className="mt-4 flex flex-col gap-3">
          <button className="flex items-center justify-center gap-3 w-full border border-gray-300 py-3 rounded-lg hover:bg-gray-100 transition-all">
            <FaGoogle size={20} className="text-red-500" />
            Google ile devam et
          </button>

          <button className="flex items-center justify-center gap-3 w-full border border-gray-300 py-3 rounded-lg hover:bg-gray-100 transition-all">
            <FaGithub size={20} className="text-gray-900" />
            GitHub ile devam et
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
