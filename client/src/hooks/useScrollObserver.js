// hooks/useScrollObserver.js
import { useEffect, useState } from 'react';
import { useScroll } from '../contexts/ScrollContext';

export const useScrollObserver = () => {
  const { setTextColor, setBackgroundColor, setIsHeaderVisible } = useScroll();
  const [isReady, setIsReady] = useState(false);
  const headerHeight = 133;

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsReady(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isReady) return;

    const handleScroll = () => {
      const scrollY = window.scrollY;
      let shouldHideHeader = false;
      let isInDarkSection = false;

      // Универсальный поиск по data-атрибуту для всех страниц
      const themeSections = document.querySelectorAll('[data-header-theme]');
      
      themeSections.forEach(section => {
        const rect = section.getBoundingClientRect();
        const sectionTop = rect.top + scrollY;
        const sectionBottom = sectionTop + rect.height;

        // Хедер полностью внутри секции?
        const isHeaderInSection = scrollY + headerHeight >= sectionTop && 
                                 scrollY <= sectionBottom - headerHeight;

        if (isHeaderInSection) {
          const theme = section.getAttribute('data-header-theme');
          if (theme === 'dark') {
            isInDarkSection = true;
          }
        }
      });

      // Специальная логика только для HowCanHelpFund на главной
      const hideElement = document.getElementById('HowCanHelpFund');
      if (hideElement) {
        const rect = hideElement.getBoundingClientRect();
        const sectionTop = rect.top + scrollY;
        const sectionBottom = sectionTop + rect.height;

        const isHeaderInHideSection = scrollY + headerHeight >= sectionTop && 
                                     scrollY <= sectionBottom - headerHeight;

        if (isHeaderInHideSection) {
          shouldHideHeader = true;
          isInDarkSection = true; // Принудительно темная тема перед скрытием
        }
      }

      // Управление цветом
      if (isInDarkSection) {
        setTextColor('black');
        setBackgroundColor('white');
      } else {
        setTextColor('white');
        setBackgroundColor('transparent');
      }

      // Управление видимостью (только для HowCanHelpFund)
      setIsHeaderVisible(!shouldHideHeader);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Первоначальная проверка

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isReady, setTextColor, setBackgroundColor, setIsHeaderVisible, headerHeight]);

  return null;
};