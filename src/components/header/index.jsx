import React from "react";
import './headex.scss';
import { FaUserAlt, FaBars } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import logo from "../../assets/Storefront.svg"

const Index = () => {
  return (
    <header className="header">
      <nav className="header__nav container">
        <div className="header__logo">
          <img src={logo} alt="" />
          <h4>NFT Marketplace</h4>
        </div>
        <div className="header__right">
          <ul className="header-list">
            <li className="header__item">
              <h5 className="header__link">
                <NavLink  to="/" className="no-underline text-white">
                  Home
                </NavLink>
              </h5>
            </li>
            <li className="header__item">
              <h5 className="header__link">
                <NavLink  to="/auth" className="no-underline text-white">
                  Create
                </NavLink>
              </h5>
            </li>
            <li className="header__item">
              <h5 className="header__link">
                <NavLink to="/artist" className='no-underline text-white'>
                  Artist Pages
                </NavLink>
              </h5>
            </li>
            <li className="header__item">
              <h5 className="header__link">
                <NavLink to="/nft-page" className="no-underline text-white">
                  NFT Page
                </NavLink>
              </h5>
            </li>
          </ul>
          <div className="header__btns">
            <button className="sign-up">
              <FaUserAlt /> Sign Up
            </button>
            <button className="header__btn-hamburger">
              <FaBars />
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Index;



// import { useState } from 'react';
// import {  FaBars } from "react-icons/fa";

// const Header = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const handleMenuToggle = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   return (
//     <header className={`w-full h-[70px] bg-inherit fixed top-0 flex items-center justify-between px-4 py-2 transition-shadow duration-300 ${isMenuOpen ? 'shadow-md' : ''}`}>
//       <nav className="flex w-full items-center justify-between">
//         <div className="flex items-center gap-1">
//           <a href="./index.html">
//             <img src="./img/NFT Marketplace/nav/Storefront.svg" alt="Storefront" />
//           </a>
//           <a href="./index.html">
//             <h4 className="text-white">NFT Marketplace</h4>
//           </a>
//         </div>
//         <div className="hidden md:flex items-center gap-5">
//           <ul className="flex items-center gap-5">
//             <li>
//               <a className="text-white hover:text-chartreuse" href="./pages/marketplace.html">Marketplace</a>
//             </li>
//             <li>
//               <a className="text-white hover:text-chartreuse" href="./pages/ntf-pages.html">NTF Pages</a>
//             </li>
//             <li>
//               <a className="text-white hover:text-chartreuse" href="#">Connect a wallet</a>
//             </li>
//             <li>
//               <a className="text-white hover:text-chartreuse" href="./pages/artist.html">Artist</a>
//             </li>
//           </ul>
//           <a href="./pages/create-acaunt.html">
//             <button className="hidden md:block px-6 py-3 rounded-full bg-[#A259FF] text-white border-none cursor-pointer">
//               <i className="fa-solid fa-user"></i> Sign Up
//             </button>
//           </a>
//           <button 
//             className="md:hidden text-white text-2xl bg-inherit border-none cursor-pointer" 
//             onClick={handleMenuToggle}
//           >
//          <FaBars />
//          </button>
//         </div>
//       </nav>

//       {/* Mobile Menu */}
//       <div 
//         className={`fixed top-0 left-0 w-[50%] h-screen bg-white bg-opacity-20 backdrop-blur-md flex flex-col items-center justify-center transition-transform duration-1000 md:hidden ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}
//       >
//         <button className="px-6 py-3 rounded-full bg-[#A259FF] text-white border-none cursor-pointer mb-4">
//           <i className="fa-solid fa-user"></i> Sign Up
//         </button>
//         <ul className="flex flex-col items-center gap-5">
//           <li>
//             <a className="text-white hover:text-chartreuse" href="./pages/marketplace.html">Marketplace</a>
//           </li>
//           <li>
//             <a className="text-white hover:text-chartreuse" href="./pages/ntf-pages.html">NTF Pages</a>
//           </li>
//           <li>
//             <a className="text-white hover:text-chartreuse" href="#">Connect a wallet</a>
//           </li>
//           <li>
//             <a className="text-white hover:text-chartreuse" href="./pages/artist.html">Artist</a>
//           </li>
//         </ul>
//         <button 
//           className="text-white text-2xl bg-inherit border-none cursor-pointer absolute top-4 right-4" 
//           onClick={handleMenuToggle}
//         >
//          <FaBars />
//         </button>
//       </div>
//     </header>
//   );
// };

// export default Header;
