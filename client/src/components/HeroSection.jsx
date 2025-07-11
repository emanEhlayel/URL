import React, { useState } from "react";
import { useAppContext } from "../../context/AppContext";

const HeroSection = () => {
  const [inputUrl, setInputUrl] = useState("");
  const { shortenUrl, shortenedCode } = useAppContext();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!inputUrl.trim()) return;
    await shortenUrl(inputUrl);
    setInputUrl(""); // تفريغ الحقل بعد الإرسال (اختياري)
  };

  return (
    <div className="h-screen bg-gradient-to-br from-blue-100 via-white to-blue-200 flex items-center justify-center px-4">
      <div className="bg-white shadow-2xl rounded-3xl w-full max-w-xl p-10 text-center">
        <h2 className="text-4xl font-extrabold text-blue-600 mb-4">
          Shorten URL
        </h2>
        <h3 className="text-xl text-gray-700 mb-3">
          Quickly shorten and share your long URLs
        </h3>
        <p className="text-sm text-gray-500 mb-6">
          100% free – No registration needed.
        </p>

        <form
          onSubmit={handleSubmit}
          className="relative w-full max-w-md mx-auto"
        >
          <input
            type="search"
            value={inputUrl}
            onChange={(e) => setInputUrl(e.target.value)}
            placeholder="Paste your long URL here..."
            className="border border-gray-300 rounded-full w-full pr-24 pl-6 py-3 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
          />
          <button
            type="submit"
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-blue-500 hover:bg-blue-600 transition text-white px-5 py-2 text-sm rounded-full shadow-md"
          >
            Shorten
          </button>
        </form>

        {shortenedCode && (
          <div className="mt-6">
            <p className="text-sm text-gray-600">Your short URL:</p>
            <a
              href={`${import.meta.env.VITE_API_BASE_URL}/${shortenedCode}`}
              target="_blank"
              rel="noreferrer"
              className="text-blue-600 font-semibold break-all"
            >
              {`${import.meta.env.VITE_API_BASE_URL}/${shortenedCode}`}
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default HeroSection;
