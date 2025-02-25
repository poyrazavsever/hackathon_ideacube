import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Toaster } from "react-hot-toast"; // React Hot Toast import

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">{children}</main>
      <Footer />
      {/* Toaster component added here */}
      <Toaster
        position="bottom-center"
        reverseOrder={false}
        toastOptions={{
          className: "bg-purple-600 text-white p-4 rounded-lg shadow-lg",
          duration: 4000, // Toast gösterim süresi
        }}
      />
    </div>
  );
};

export default Layout;
