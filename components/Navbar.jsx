import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-8 py-4 shadow-md">
      {/* Logo & Brand */}
      <div className="flex items-center space-x-2">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><path d="M9.879 20.121C10.757 21 12.172 21 15 21s4.243 0 5.121-.879C21 19.243 21 17.828 21 15s0-4.243-.879-5.121C19.243 9 17.828 9 15 9s-4.243 0-5.121.879C9 10.757 9 12.172 9 15s0 4.243.879 5.121"/><path d="M17.924 9c-.096-.975-.313-1.631-.803-2.121C16.243 6 14.828 6 12 6s-4.243 0-5.121.879C6 7.757 6 9.172 6 12s0 4.243.879 5.121c.49.49 1.146.707 2.121.803"/><path d="M14.924 6c-.096-.975-.313-1.631-.803-2.121C13.243 3 11.828 3 9 3s-4.243 0-5.121.879C3 4.757 3 6.172 3 9s0 4.243.879 5.121c.49.49 1.146.707 2.121.803"/></g></svg>    
        <span className="text-lg font-semibold">
          <span className="text-primary">Grow</span> Together
        </span>
      </div>

      {/* Navigation Links */}
      <div className="flex items-center space-x-6">
        <Link href="/explore" className="text-black">Keşfet</Link>
        <Link href="/login" className="text-black">Giriş Yap</Link>
        <Link href="/register" className="bg-primary text-white px-4 py-2 rounded-md">
          Kayıt Ol
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
