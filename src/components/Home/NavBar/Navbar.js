// import { React, useState } from 'react';
// import { useTranslation } from 'react-i18next';
// import { useNavigate, Link } from 'react-router-dom';
// import { useSelector, useDispatch } from 'react-redux';
// import { logoutUser } from '../../../features/users/usersSlice';
// import LanguageButton from './LanguageButton';
// import Image from './Logo.svg';

// function Navebar() {
//   const Navigate = useNavigate();
//   const dispatch = useDispatch();
//   const { t } = useTranslation();

//   const { userlogin } = useSelector((state) => state.users);

//   const [isListOpen, setIsListOpen] = useState(false);
//   const [profileList, setProfileList] = useState(false);

//   const HandleLogin = (e) => {
//     e.preventDefault();
//     return Navigate('/login');
//   };

//   const HandleProfile = (e) => {
//     e.preventDefault();
//     return Navigate('/UpdateUserInfo');
//   };

//   const logOut = (e) => {
//     e.preventDefault();
//     Navigate('/');
//     dispatch(logoutUser());
//   };

//   const onclicklogo = () => {
//     return Navigate('/');
//   };

//   const aboutList = (
//     <div className="text-center bg-cyan-50  mr-1 mt-2 w-16 h-5 ">
//       <button
//         type="button"
//         className="hover:text-orange-300"
//         onMouseEnter={() => setIsListOpen(true)}
//       >
//         {t('About')}
//       </button>
//       {isListOpen && (
//         <ul onMouseLeave={() => setIsListOpen(false)}>
//           <li>
//             <button
//               type="button"
//               className="hover:text-orange-300  w-[7rem] block py-2 px-4 text-black-700 hover:bg-cyan-100 dark:hover:bg-gray-600"
//               onClick={() => Navigate('/about')}
//             >
//               {t('About Us')}
//             </button>
//           </li>
//           <li>
//             <button
//               type="button"
//               className="hover:text-orange-300 w-[7rem] block py-2 px-4 text-black-700 hover:bg-cyan-100 dark:hover:bg-gray-600"
//               onClick={() => Navigate('/team')}
//             >
//               {t('Our Team')}{' '}
//             </button>
//           </li>
//           <li>
//             <button
//               type="button"
//               className="hover:text-orange-300 w-[7rem] block py-2 px-4 text-black-700 hover:bg-cyan-100 dark:hover:bg-gray-600"
//               onClick={() => Navigate('/careers')}
//             >
//               {t('Careers')}{' '}
//             </button>
//           </li>
//         </ul>
//       )}
//     </div>
//   );

//   return (
//     <div>
//       <nav
//         style={{ fontFamily: 'Poppins, sans-serif' }}
//         className="bg-cyan-50 px-2 sm:px-4 py-2.5 rounded z-100   "
//       >
//         <button type="submit" onClick={onclicklogo}>
//           {' '}
//           <img src={Image} alt="logo" className=" h-9 w-9 mt-2 ml-6" />
//         </button>
//         <Link to="/">
//           {' '}
//           <h1 className="absolute top-4 left-[5.5rem]  text-3xl">
//             Healing
//           </h1>{' '}
//         </Link>

//         <div className="absolute top-3.5 right-14 ">
//           <div className="    flex justify-around text-l space-x-10">
//             <Link to="/" className=" hover:text-orange-300 mr-4 mt-2">
//               {t('Home')}
//             </Link>
//             <Link to="/blog/1" className=" hover:text-orange-300 mr-2  mt-2">
//               {t('Blogs')}
//             </Link>
//             {aboutList}
//             <Link to="/contactus" className=" hover:text-orange-300 ml-2 mt-2">
//               {t('Contact Us')}
//             </Link>
//             {!userlogin && (
//               <button
//                 type="submit"
//                 onClick={HandleLogin}
//                 className=" md:text-lg ml-2  lg:px-6 rounded-md box-border  transition-all duration-250 bg-cyan-400 hover:bg-cyan-500 translate-y-1 hover:text-white "
//               >
//                 {t('login')}
//               </button>
//             )}
//             {userlogin && (
//               <div className="text-center bg-cyan-50  mr-1 mt-2 w-16 h-5">
//                 <button
//                   type="submit"
//                   onClick={HandleProfile}
//                   className=" md:text-lg ml-2  lg:px-6 rounded-md box-border  transition-all duration-250 bg-cyan-400 hover:bg-cyan-500 translate-y-1 hover:text-white "
//                   onMouseEnter={() => setProfileList(true)}
//                 >
//                   {t('Profile')}
//                 </button>
//                 {profileList && (
//                   <ul onMouseLeave={() => setProfileList(false)}>
//                     <li>
//                       <button
//                         type="button"
//                         className="hover:text-orange-300  w-[7rem] block py-2 px-4 text-black-700 hover:bg-cyan-100 dark:hover:bg-gray-600"
//                         onClick={HandleProfile}
//                       >
//                         {t('Profile')}
//                       </button>
//                     </li>
//                     <li>
//                       <button
//                         type="button"
//                         className="hover:text-orange-300 w-[7rem] block py-2 px-4 text-black-700 hover:bg-cyan-100 dark:hover:bg-gray-600"
//                         onClick={logOut}
//                       >
//                         {t('Log Out')}{' '}
//                       </button>
//                     </li>
//                   </ul>
//                 )}
//               </div>
//             )}
//             <LanguageButton />
//           </div>
//         </div>
//       </nav>
//     </div>
//   );
// }
// export default Navebar;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { AiFillCaretDown } from 'react-icons/ai';
import LanguageButton from './LanguageButton';
import Logo from './Logo.svg';

const Navbar = () => {
  const { t } = useTranslation();
  const [showNavbarInResponsive, setShowNavbarInResponsive] = useState(false);
  const [showAboutInResponsive, setShowAboutInResponsive] = useState(false);

  return (
    <nav className="w-screen sticky top-0 z-50 bg-cyan-50 shadow font-poppins">
      <div className="justify-between px-4 mx-auto  md:items-center md:flex md:px-8">
        <div className="flex items-center md:block">
          <div className=" md:hidden">
            <button
              type="button"
              className="p-2 text-gray-700 rounded-md outline-none  focus:border-gray-400 focus:border"
              onClick={() => setShowNavbarInResponsive(!showNavbarInResponsive)}
            >
              {showNavbarInResponsive ? (
                <svg
                  className="w-6 h-6 "
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6 "
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
          <Link to="/">
            <div className="flex flex-row items-center">
              <img src={Logo} alt="logo" className=" h-9 w-9 mt-2 ml-6" />
              <h2 className="text-3xl text-bold m-4 ml-3 font-medium">
                Healing
              </h2>
            </div>
          </Link>
        </div>
        <div
          className={`flex-1 justify-self-center bg-cyan-50 pt-4 pl-4 h-full text-base left-[-250px]  transition duration-300 transform fixed w-[250px] z-50 pb-3 md:block md:pb-0 md:mt-0 ${
            showNavbarInResponsive
              ? 'translate-x-full '
              : 'translate-x-[-250px]'
          }`}
        >
          <div className="mt-3 space-y-2 lg:hidden md:hidden ">
            <div className="flex flex-col items-start  text-xl ">
              <ul className="items-center justify-center  md:flex md:space-x-6 md:space-y-0">
                <Link to="/">
                  <li className="w-fit p-2 hover:text-indigo-100 hover:bg-cyan-400 hover:rounded-md ">
                    <a href="Home">{t('Home')}</a>
                  </li>
                </Link>
                <Link to="/blog/1">
                  <li className="w-fit p-2 m-0 hover:text-indigo-100 hover:bg-cyan-400 hover:rounded-md ">
                    {t('Blogs')}
                  </li>
                </Link>

                <li className="w-fit hover:text-indigo-100 hover:bg-cyan-400 hover:rounded-md cursor-pointer ">
                  <div className=" relative  absolute">
                    <button
                      type="button"
                      className="flex peer text-black hover:text-indigo-100 p-2"
                      onClick={() =>
                        setShowAboutInResponsive(!showAboutInResponsive)
                      }
                    >
                      About
                      <AiFillCaretDown className=" mt-1 ml-2" />
                    </button>
                    {showAboutInResponsive ? (
                      <div className="flex relative peer-hover:flex hover:flex w-[100px] flex-col bg-white drop-shadow-lg">
                        <Link
                          className="p-2 text-black hover:bg-cyan-400 hover:text-indigo-100"
                          to="/about"
                        >
                          About
                        </Link>
                        <Link
                          className="p-2 text-black hover:bg-cyan-400 hover:text-indigo-100"
                          to="/team"
                        >
                          Our Team
                        </Link>
                        <Link
                          className="p-2 text-black hover:bg-cyan-400 hover:text-indigo-100"
                          to="/careers"
                        >
                          Careers
                        </Link>
                      </div>
                    ) : (
                      ''
                    )}
                  </div>
                </li>
                <li>
                  <Link
                    className=" p-2 hover:text-indigo-100 hover:bg-cyan-400 hover:rounded-md"
                    to="/contactus"
                  >
                    {t('Contact')}
                  </Link>
                </li>
                <Link to="login">
                  <button
                    type="button"
                    className="my-2 flex justify-center px-4 py-2 text-center rounded-md shadowtransition-all duration-250 bg-cyan-400 hover:bg-cyan-500 text-m"
                  >
                    {t('Login')}
                  </button>
                </Link>
                <LanguageButton />
              </ul>
            </div>
          </div>
        </div>
        <div className="hidden space-x-2 md:inline-block">
          <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
            <Link to="/">
              <li className=" p-2 hover:text-indigo-100 hover:bg-cyan-400 hover:rounded-md">
                <a href="Home">{t('Home')}</a>
              </li>
            </Link>
            <Link to="/blog/1">
              <li className=" p-2 hover:text-indigo-100 hover:bg-cyan-400 hover:rounded-md">
                {t('Blogs')}
              </li>
            </Link>
            <li className="hover:text-indigo-100 hover:bg-cyan-400 hover:rounded-md cursor-pointer ">
              <div className="relative absolute">
                <button
                  type="button"
                  className="flex peer text-black hover:text-indigo-100 p-2"
                >
                  About
                  <AiFillCaretDown className="mt-1 ml-2" />
                </button>

                <div className="hidden absolute peer-hover:flex hover:flex w-[100px] flex-col bg-white drop-shadow-lg">
                  <Link
                    className="p-2 text-black hover:bg-cyan-400 hover:text-indigo-100"
                    to="/about"
                  >
                    About
                  </Link>
                  <Link
                    className="p-2 text-black hover:bg-cyan-400 hover:text-indigo-100"
                    to="/team"
                  >
                    Our Team
                  </Link>
                  <Link
                    className="p-2 text-black hover:bg-cyan-400 hover:text-indigo-100"
                    to="/careers"
                  >
                    Careers
                  </Link>
                </div>
              </div>
            </li>
            <Link
              to="/contactus"
              className=" p-2 hover:text-indigo-100 hover:bg-cyan-400 hover:rounded-md"
            >
              <li>{t('Contact')}</li>
            </Link>
            <Link to="login">
              <button
                type="button"
                className="flex justify-center px-4 py-2 text-center rounded-md shadowtransition-all duration-250 bg-cyan-400 hover:bg-cyan-500 text-m"
              >
                {t('Login')}
              </button>
            </Link>
            <LanguageButton />
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
