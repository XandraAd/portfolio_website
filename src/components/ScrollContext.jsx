/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// ScrollContext.js
import React, { createContext, useContext, useRef ,useEffect} from 'react';
import { debounce } from 'lodash';

const ScrollContext = createContext(null);

export const ScrollProvider = ({ children }) => {
  const scrollRef = useRef(null);

  const scrollToSection = (sectionId) => {
    if (scrollRef.current) {
      const element = document.getElementById(sectionId);
      if (element) {
        const offsetTop = element.offsetTop;
        scrollRef.current.scrollTo({
          top: offsetTop,
         
          behavior: 'smooth',
        });
      }
    }
  };
  const debouncedScroll = useRef(debounce(scrollToSection, 100)); // Adjust debounce timing as needed

  const handleScroll = () => {
    // Add scrolling logic or adjustments as needed
  
     debouncedScroll.current("intro"); // Call debounce for smoother scrolling
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [])

  return (
    <ScrollContext.Provider value={{ scrollToSection, scrollRef }}>
      {children}
    </ScrollContext.Provider>
  );
};

export const useScroll = () => useContext(ScrollContext);
