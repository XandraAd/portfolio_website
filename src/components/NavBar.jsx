/* eslint-disable no-unused-vars */
import React ,{useState,useEffect}from 'react'
import { useScroll } from './ScrollContext';

const NavBar = () => {
    const { scrollToSection } = useScroll();
    const [isHeaderSticky, setIsHeaderSticky] = useState(false);
 

    const handleClick = () => {
scrollToSection('introduction'); 



      };

      useEffect(() => {
        const handleScroll = () => {
          const introSection = document.getElementById('intro');
          if (introSection) {
            const introSectionOffset = introSection.offsetTop;
            const introSectionHeight = introSection.offsetHeight;
            const scrollTop = window.scrollY;
    
            const halfwayPoint = introSectionOffset + (introSectionHeight / 2);
    
            setIsHeaderSticky(scrollTop > halfwayPoint);
          }
        };
    
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
      }, []);
  return (
   <>
   {/* Header */}
   <header
      id='navbar'
      className={`w-screen z-50 h-20 bg-blue-600 ${isHeaderSticky ? 'fixed top-0 shadow-lg' : 'relative'}`}
    >
    <nav className=" bottom-0 left-0 right-0 w-screen z-0">
    <div className='flex justify-start' >
          <div className="flex justify-end w-1/4  border-none rounded ">
          <button onClick={handleClick} className="flex justify-end items-center pr-2 text-white text-2xl  uppercase hover:text-blue-700 w-full bg-blue-800 h-20">
              <a href="#top">Sandra</a>
            </button>
            </div>
            <div className="flex justify-center content-center flex-row h-25 w-full text-white text-md uppercase">
            <ul className=" flex flex-row items-center pl-2 mx-2">
              <li className='mr-2'><a href="#top"  className=" hover:text-blue-700 hover:border-b-4 hover:border-solid">Home</a></li>
              <li className='mr-2'><a href="#intro" className=" hover:text-blue-700 hover:border-b-4 hover:border-solid">Intro</a></li>
              <li className='mr-2'><a href="#about" className=" hover:text-blue-700 hover:border-b-4 hover:border-solid">About</a></li>
              <li className='mr-2'><a href="#services" className="hover:text-blue-700 hover:border-b-4 hover:border-solid">Services</a></li>
              <li className='mr-2'><a href="#team" className=" hover:text-blue-700 hover:border-b-4 hover:border-solid">Team</a></li>
              <li className='mr-2'><a href="#history" className=" hover:text-blue-700 hover:border-b-4 hover:border-solid">History</a></li>
              <li className='mr-2'><a href="#works" className=" hover:text-blue-700 hover:border-b-4 hover:border-solid">Works</a></li>
              <li className='mr-2'><a href="#contact" className="hover:text-blue-700 hover:border-b-4 hover:border-solid">Contact</a></li>
            </ul>
          </div>
            
</div>

                    


               
           
        </nav>
     
    </header>
   
   
   </>  )
}

export default NavBar