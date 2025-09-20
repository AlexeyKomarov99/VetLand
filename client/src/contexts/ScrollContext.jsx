// contexts/ScrollContext.js (упрощенная версия)
import React, { createContext, useContext, useState } from 'react';

const ScrollContext = createContext();

export const useScroll = () => {
  const context = useContext(ScrollContext);
  if (!context) {
    throw new Error('useScroll must be used within a ScrollProvider');
  }
  return context;
};

export const ScrollProvider = ({ children }) => {
  const [textColor, setTextColor] = useState('white');
  const [backgroundColor, setBackgroundColor] = useState('transparent');
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);

  return (
    <ScrollContext.Provider value={{
      textColor,
      setTextColor,
      backgroundColor,
      setBackgroundColor,
      isHeaderVisible,
      setIsHeaderVisible
    }}>
      {children}
    </ScrollContext.Provider>
  );
};