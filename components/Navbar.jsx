import React, { useEffect, useState } from "react";
import Link from "next/link";
import { auth } from "../src/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { motion } from "framer-motion"; // Framer Motion import

const Navbar = () => {
  const [user, setUser] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false); // Dropdown açma kontrolü

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <nav className="flex justify-between items-center px-8 py-4">
      {/* Logo & Brand */}
      <a href="/" className="flex items-center space-x-2 cursor-pointer">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
          <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5">
            <path d="M9.879 20.121C10.757 21 12.172 21 15 21s4.243 0 5.121-.879C21 19.243 21 17.828 21 15s0-4.243-.879-5.121C19.243 9 17.828 9 15 9s-4.243 0-5.121.879C9 10.757 9 12.172 9 15s0 4.243.879 5.121"/>
            <path d="M17.924 9c-.096-.975-.313-1.631-.803-2.121C16.243 6 14.828 6 12 6s-4.243 0-5.121.879C6 7.757 6 9.172 6 12s0 4.243.879 5.121c.49.49 1.146.707 2.121.803"/>
            <path d="M14.924 6c-.096-.975-.313-1.631-.803-2.121C13.243 3 11.828 3 9 3s-4.243 0-5.121.879C3 4.757 3 6.172 3 9s0 4.243.879 5.121c.49.49 1.146.707 2.121.803"/>
          </g>
        </svg>    
        <span className="text-lg font-semibold">
          <span className="text-primary">Grow</span> Together
        </span>
      </a>

      {/* Navigation Links */}
      <div className="flex items-center space-x-6">
        {user ? (
          <>
            <Link href="/discover" className="text-black hover:text-neutral-600 transition-all">Keşfet</Link>
            <Link href="/ideas" className="text-black hover:text-neutral-600 transition-all">Fikirler</Link>
            <Link href="/investors" className="text-black hover:text-neutral-600 transition-all">Yatırımcılar</Link>
            <Link href="/team-members" className="text-black hover:text-neutral-600 transition-all">Ekip Arkadaşları</Link>
            <Link href="/toplist" className="text-black hover:text-neutral-600 transition-all">Liderlik Tablosu</Link>

            {/* Profil Fotoğrafı ve Dropdown */}
            <div className="relative">
              <div 
                className="w-10 h-10 rounded-full bg-gray-300 cursor-pointer flex items-center justify-center" 
                onClick={toggleDropdown}
              >
                {/* Profil Fotoğrafı */}
                {user.photoURL ? (
                  <img src={user.photoURL} alt="Profile" className="w-full h-full rounded-full object-cover flex items-center justify-center" />
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="w-full h-full text-white flex items-center justify-center">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.33-8 4v2h16v-2c0-2.67-5.33-4-8-4z"/>
                  </svg>
                )}
              </div>
              
              {dropdownOpen && (
                <motion.div
                  className="absolute right-0 mt-2 w-48 bg-white border border-gray-300 rounded-md shadow-lg z-10"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                >
                  <ul className="py-2">
                    <li>
                      <Link href="/profile" className="block px-4 py-2 text-black hover:bg-gray-100">Profil</Link>
                    </li>
                    <li>
                      <Link href="/share-education" className="block px-4 py-2 text-black hover:bg-gray-100">Eğitim Paylaş</Link>
                    </li>
                    <li>
                      <Link href="/applications" className="block px-4 py-2 text-black hover:bg-gray-100">Başvurular</Link>
                    </li>
                    <li>
                      <Link href="/settings" className="block px-4 py-2 text-black hover:bg-gray-100">Ayarlar</Link>
                    </li>
                  </ul>
                </motion.div>
              )}
            </div>

            <button 
              onClick={() => signOut(auth)} 
              className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition-all">
              Çıkış Yap
            </button>
          </>
        ) : (
          <>
            <Link href="/discover" className="text-black hover:text-neutral-600 transition-all">Keşfet</Link>
            <Link href="/login" className="text-black hover:text-neutral-600 transition-all">Giriş Yap</Link>
            <Link href="/register" className="bg-primary text-white px-4 py-2 rounded-md hover:bg-opacity-70 transition-all">
              Kayıt Ol
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
