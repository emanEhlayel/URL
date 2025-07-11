// src/context/AppContext.js
import React, { createContext, useContext, useCallback, useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";

const AppContext = createContext();


const baseURL = import.meta.env.VITE_API_BASE_URL || "http://localhost:3000";

export const AppProvider = ({ children }) => {
  const [shortenedCode, setShortenedCode] = useState(null);

  const shortenUrl = useCallback(async (originalUrl) => {
    try {
      const { data } = await axios.post(`${baseURL}/shorten`, {
        originalUrl,
      });

      if (data?.code) {
        setShortenedCode(data.code);
        return data.code;
      } else {
        toast.error("Something went wrong.");
      }
    } catch (error) {
      toast.error(error.message);
    }
  }, []);

  const value = {
    shortenUrl,
    shortenedCode,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = () => useContext(AppContext);
