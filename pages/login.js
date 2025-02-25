import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { FaGoogle, FaGithub, FaEye, FaEyeSlash } from "react-icons/fa";
import { signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { auth } from "../src/firebase";
import toast, { Toaster } from "react-hot-toast";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        toast.success("Zaten giriş yapmışsınız!");
        router.push("/");
      }
    });
  }, [router]);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      toast.success("Başarıyla giriş yapıldı!");
      router.push("/");
    } catch (error) {
      toast.error("Giriş başarısız! Bilgilerinizi kontrol edin.");
    }
  };

  const handleSocialLogin = (provider) => {
    toast("Bu özellik yapım aşamasında!", { icon: "⚠️" });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Toaster />
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md">
        <h2 className="text-3xl font-semibold text-gray-900 text-center">Giriş Yap</h2>
        <p className="text-gray-500 text-center mt-2">Hesabınıza giriş yapın</p>

        <form onSubmit={handleLogin} className="mt-6">
          <label className="block text-gray-700">E-mail</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="E-mail adresiniz"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg mt-1 focus:ring-2 focus:ring-purple-500 outline-none"
            required
          />

          <label className="block text-gray-700 mt-4">Şifre</label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Şifreniz"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg mt-1 focus:ring-2 focus:ring-purple-500 outline-none pr-10"
              required
            />
            <button
              type="button"
              className="absolute right-3 top-4 text-gray-500"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash size={18} /> : <FaEye size={18} />}
            </button>
          </div>

          <button
            type="submit"
            className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg mt-6 transition-all"
          >
            Giriş Yap
          </button>
        </form>

        <div className="mt-6 text-center text-gray-500">veya</div>

        <div className="mt-4 flex flex-col gap-3">
          <button
            onClick={() => handleSocialLogin("google")}
            className="flex items-center justify-center gap-3 w-full border border-gray-300 py-3 rounded-lg hover:bg-gray-100 transition-all"
          >
            <FaGoogle size={20} className="text-red-500" />
            Google ile devam et
          </button>

          <button
            onClick={() => handleSocialLogin("github")}
            className="flex items-center justify-center gap-3 w-full border border-gray-300 py-3 rounded-lg hover:bg-gray-100 transition-all"
          >
            <FaGithub size={20} className="text-gray-900" />
            GitHub ile devam et
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
