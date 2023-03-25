import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux';
import { AiFillCaretDown } from 'react-icons/ai';
import { logoutUser } from '../../../features/users/usersSlice';
import LanguageButton from './LanguageButton';
import Logo from './Logo.svg';

const Navbar = () => {
  const { t } = useTranslation();
  const userLogin = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showNavbarInResponsive, setShowNavbarInResponsive] = useState(false);
  const [showAboutInResponsive, setShowAboutInResponsive] = useState(false);
  const [showProfileInResponsive, setShowProfileInResponsive] = useState(false);

  const logOut = (e) => {
    e.preventDefault();
    navigate('/');
    dispatch(logoutUser());
    if (showNavbarInResponsive) {
      setShowNavbarInResponsive(!showNavbarInResponsive);
    }
  };

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

        {/* mobile screens */}
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
                <Link
                  to="/"
                  onClick={() => {
                    setShowNavbarInResponsive(!showNavbarInResponsive);
                  }}
                >
                  <li className="w-fit p-2 hover:text-indigo-100 hover:bg-cyan-400 hover:rounded-md ">
                    <a href="Home">{t('Home')}</a>
                  </li>
                </Link>
                <Link
                  to="/blog/1"
                  onClick={() => {
                    setShowNavbarInResponsive(!showNavbarInResponsive);
                  }}
                >
                  <li className="w-fit p-2 m-0 hover:text-indigo-100 hover:bg-cyan-400 hover:rounded-md ">
                    {t('Blogs')}
                  </li>
                </Link>

                <li className="w-fit hover:text-indigo-100 hover:bg-cyan-400 hover:rounded-md cursor-pointer ">
                  <div className=" relative  absolute">
                    <button
                      type="button"
                      className="flex peer text-black hover:text-indigo-100 p-2"
                      onClick={() => {
                        setShowAboutInResponsive(!showAboutInResponsive);
                      }}
                    >
                      {t('About')}
                      <AiFillCaretDown className=" mt-1 ml-2" />
                    </button>
                    {showAboutInResponsive ? (
                      <div className="flex relative peer-hover:flex hover:flex w-[100px] flex-col bg-white drop-shadow-lg">
                        <Link
                          className="p-2 text-black hover:bg-cyan-400 hover:text-indigo-100"
                          to="/about"
                          onClick={() => {
                            setShowNavbarInResponsive(!showNavbarInResponsive);
                          }}
                        >
                          {t('About')}
                        </Link>
                        <Link
                          className="p-2 text-black hover:bg-cyan-400 hover:text-indigo-100"
                          to="/team"
                          onClick={() => {
                            setShowNavbarInResponsive(!showNavbarInResponsive);
                          }}
                        >
                          {t('Our Team')}
                        </Link>
                        <Link
                          className="p-2 text-black hover:bg-cyan-400 hover:text-indigo-100"
                          to="/careers"
                          onClick={() => {
                            setShowNavbarInResponsive(!showNavbarInResponsive);
                          }}
                        >
                          {t('Careers')}
                        </Link>
                      </div>
                    ) : (
                      ''
                    )}
                  </div>
                </li>
                <li>
                  <Link
                    className="w-fit p-2 hover:text-indigo-100 hover:bg-cyan-400 hover:rounded-md"
                    to="/contactus"
                    onClick={() => {
                      setShowNavbarInResponsive(!showNavbarInResponsive);
                    }}
                  >
                    {t('Contact')}
                  </Link>
                </li>

                <li className="w-fit hover:text-indigo-100 hover:bg-cyan-400 hover:rounded-md cursor-pointer ">
                  <div className=" relative  absolute">
                    {!userLogin.userlogin && (
                      <Link
                        to="/login"
                        onClick={() => {
                          setShowNavbarInResponsive(!showNavbarInResponsive);
                        }}
                      >
                        <button
                          type="button"
                          className="flex peer my-2 flex justify-center px-4 py-2 text-center rounded-md shadowtransition-all duration-250 bg-cyan-400 hover:bg-cyan-500 text-m"
                          onClick={() =>
                            setShowProfileInResponsive(!showProfileInResponsive)
                          }
                        >
                          {t('Login')}
                        </button>
                      </Link>
                    )}
                    {userLogin.userlogin && (
                      <li className="w-fit hover:text-indigo-100 hover:bg-cyan-400 hover:rounded-md cursor-pointer ">
                        <div className=" relative  absolute">
                          <button
                            type="button"
                            className="flex peer text-white bg-cyan-400 hover:bg-cyan-500 rounded-md p-2"
                            onClick={() =>
                              setShowProfileInResponsive(
                                !showProfileInResponsive
                              )
                            }
                          >
                            {t('Profile')}
                            <AiFillCaretDown className=" mt-1 ml-2" />
                          </button>
                          {showProfileInResponsive ? (
                            <div className="flex relative peer-hover:flex hover:flex w-[100px] flex-col bg-white drop-shadow-lg">
                              <Link
                                className="p-2 pl-5 text-black hover:bg-cyan-400 hover:text-indigo-100"
                                to="/UpdateUserInfo"
                                onClick={() => {
                                  setShowNavbarInResponsive(
                                    !showNavbarInResponsive
                                  );
                                }}
                              >
                                {t('Profile')}
                              </Link>
                              <button
                                type="button"
                                className="p-2 text-black hover:bg-cyan-400 hover:text-indigo-100"
                                onClick={logOut}
                              >
                                {t('Log Out')}
                              </button>
                            </div>
                          ) : (
                            ''
                          )}
                        </div>
                      </li>
                    )}
                  </div>
                </li>
                <LanguageButton />
              </ul>
            </div>
          </div>
        </div>

        {/* big screens */}
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
                  {t('About')}
                  <AiFillCaretDown className="mt-1 ml-2" />
                </button>

                <div className="hidden absolute peer-hover:flex hover:flex w-[100px] flex-col bg-white drop-shadow-lg">
                  <Link
                    className="p-2 text-black hover:bg-cyan-400 hover:text-indigo-100"
                    to="/about"
                  >
                    {t('About')}
                  </Link>
                  <Link
                    className="p-2 text-black hover:bg-cyan-400 hover:text-indigo-100"
                    to="/team"
                  >
                    {t('Our Team')}
                  </Link>
                  <Link
                    className="p-2 text-black hover:bg-cyan-400 hover:text-indigo-100"
                    to="/careers"
                  >
                    {t('Careers')}
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
            {!userLogin.userlogin && (
              <Link to="/login">
                <button
                  type="button"
                  className="flex justify-center px-4 py-2 text-center rounded-md shadowtransition-all duration-250 bg-cyan-400 hover:bg-cyan-500 text-m"
                >
                  {t('Login')}
                </button>
              </Link>
            )}
            {userLogin.userlogin && (
              <li className="hover:text-indigo-100 hover:bg-cyan-400 hover:rounded-md cursor-pointer ">
                <div className="relative absolute">
                  <button
                    type="button"
                    className="flex peer text-white p-2 bg-cyan-400 hover:bg-cyan-500 rounded-md"
                  >
                    {t('Profile')}
                    <AiFillCaretDown className="mt-1 ml-2" />
                  </button>

                  <div className="hidden absolute peer-hover:flex hover:flex w-[100px] flex-col bg-white drop-shadow-lg">
                    <Link
                      className="p-2 pl-6 text-black hover:bg-cyan-400 hover:text-indigo-100"
                      to="/UpdateUserInfo"
                    >
                      {t('Profile')}
                    </Link>
                    <button
                      type="button"
                      className="py-2 text-black hover:bg-cyan-400 hover:text-indigo-100"
                      onClick={logOut}
                    >
                      {t('Log Out')}
                    </button>
                  </div>
                </div>
              </li>
            )}
            <LanguageButton />
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
