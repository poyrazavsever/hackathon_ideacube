import React, { useEffect, useState } from "react";
import Link from "next/link";
import { auth } from "../src/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { motion } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [user, setUser] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-white z-50 shadow-md">
      <a href="/" className="flex items-center space-x-2 cursor-pointer">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
          <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5">
            <path d="M9.879 20.121C10.757 21 12.172 21 15 21s4.243 0 5.121-.879C21 19.243 21 17.828 21 15s0-4.243-.879-5.121C19.243 9 17.828 9 15 9s-4.243 0-5.121.879C9 10.757 9 12.172 9 15s0 4.243.879 5.121"/>
          </g>
        </svg>
        <span className="text-lg font-semibold">
          <span className="text-primary">Grow</span> Together
        </span>
      </a>

      {/* Hamburger Menu Button */}
      <button className="md:hidden" onClick={toggleMenu}>
        {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
      </button>

      {/* Navigation Links */}
      <div className={`absolute md:static top-16 left-0 w-full md:w-auto bg-white md:bg-transparent flex-col md:flex md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-6 p-4 md:p-0 shadow-md md:shadow-none transition-all duration-300 ${menuOpen ? "flex" : "hidden"}`}>
        <Link href="/discover" className="text-black hover:text-neutral-600 transition-all">Keşfet</Link>
        <Link href="/ideas" className="text-black hover:text-neutral-600 transition-all">Fikirler</Link>
        <Link href="/investors" className="text-black hover:text-neutral-600 transition-all">Yatırımcılar</Link>
        <Link href="/team-members" className="text-black hover:text-neutral-600 transition-all">Ekip Arkadaşları</Link>
        <Link href="/toplist" className="text-black hover:text-neutral-600 transition-all">Liderlik Tablosu</Link>
        <Link href="/ai" className="text-black hover:text-neutral-600 transition-all">Yapay Değerlendirme</Link>

        {user ? (
          <div className="relative">
            <div className="w-10 h-10 rounded-full bg-gray-300 cursor-pointer flex items-center justify-center" onClick={toggleDropdown}>
              {user.photoURL ? (
                <img src={user.photoURL} alt="Profile" className="w-full h-full rounded-full object-cover" />
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="w-full h-full text-white">
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
                  <li><Link href="/profile" className="block px-4 py-2 text-black hover:bg-gray-100">Profil</Link></li>
                  <li><Link href="/share-education" className="block px-4 py-2 text-black hover:bg-gray-100">Eğitim Paylaş</Link></li>
                  <li><Link href="/applications" className="block px-4 py-2 text-black hover:bg-gray-100">Başvurular</Link></li>
                  <li><Link href="/settings" className="block px-4 py-2 text-black hover:bg-gray-100">Ayarlar</Link></li>
                </ul>
              </motion.div>
            )}
          </div>
        ) : (
          <>
            <Link href="/login" className="text-black hover:text-neutral-600 transition-all">Giriş Yap</Link>
            <Link href="/register" className="bg-primary text-white px-4 py-2 rounded-md hover:bg-opacity-70 transition-all">Kayıt Ol</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;