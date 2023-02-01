import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Link, useNavigate } from 'react-router-dom';
import { logoutUser } from '../../../features/users/usersSlice';
import LanguageButton from './LanguageButton';
import './navbar.css';
import Image from './Logo.svg';

function Navbar() {
  const Navigate = useNavigate();
  const { t } = useTranslation();
  const [isListOpen, setIsListOpen] = useState(false);
  const { userlogin } = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const [profileList, setProfileList] = useState(false);
  const [active, setActive] = useState('nav__menu');
  const [icon, setIcon] = useState('nav__toggler');

  const HandleLogin = (e) => {
    e.preventDefault();
    return Navigate('/login');
  };

  const HandleProfile = (e) => {
    e.preventDefault();
    return Navigate('/UpdateUserInfo');
  };

  const logOut = (e) => {
    e.preventDefault();
    Navigate('/');
    dispatch(logoutUser());
  };

  const aboutList = (
    <div className="text-center bg-cyan-50 w-16 h-5">
      <button
        type="button"
        className="hover:text-orange-300"
        onMouseEnter={() => setIsListOpen(true)}
        onMouseLeave={() => setIsListOpen(false)}
      >
        About
      </button>
      {isListOpen && (
        <ul
          onMouseLeave={() => setIsListOpen(false)}
          onMouseEnter={() => setIsListOpen(true)}
        >
          <li>
            <button
              type="button"
              className="  w-[7rem] block py-2 px-4 text-black-700 hover:bg-cyan-100 "
              onClick={() => Navigate('/about')}
            >
              {t('About Us')}
            </button>
          </li>
          <li>
            <button
              type="button"
              className="w-[7rem] block py-2 px-4 text-black-700 hover:bg-cyan-100"
              onClick={() => Navigate('/team')}
            >
              {t('Our Team')}{' '}
            </button>
          </li>
          <li>
            <button
              type="button"
              className="w-[7rem] block py-2 px-4 text-black-700 hover:bg-cyan-100"
              onClick={() => Navigate('/careers')}
            >
              {t('Careers')}{' '}
            </button>
          </li>
        </ul>
      )}
    </div>
  );

  const navToggle = () => {
    if (active === 'nav__menu') {
      setActive('nav__menu nav__active');
    } else setActive('nav__menu');

    // Icon Toggler
    if (icon === 'nav__toggler') {
      setIcon('nav__toggler toggle');
    } else setIcon('nav__toggler');
  };

  return (
    <nav className="nav">
      <div className="nav__brand">
        <div className="flex  gap-2 pl-8">
          <img src={Image} alt="logo" className=" h-9 w-9  " />
          <Link to="/" className="lg:text-3xl md:text-xl">
            Healing
          </Link>
        </div>
      </div>
      <div className="lg:mr-16">
        <ul className={active}>
          <li className="nav__item">
            <Link to="/" className="hover:text-orange-300 ">
              {t('Home')}
            </Link>
          </li>
          <li className="nav__item">
            <Link to="/blog/1" className=" hover:text-orange-300 ">
              {t('Blogs')}
            </Link>
          </li>
          <li className="nav__item">{aboutList}</li>
          <li className="nav__item">
            <Link to="/contactus" className=" hover:text-orange-300 ml-2 mt-2">
              {t('Contact Us')}
            </Link>
          </li>
          <LanguageButton />

          <li className="nav__item">
            {!userlogin && (
              <button
                type="submit"
                onClick={HandleLogin}
                className=" md:text-lg ml-2  lg:px-6 rounded-md box-border  transition-all duration-250 bg-cyan-400 hover:bg-cyan-500 translate-y-1 hover:text-white  "
              >
                {t('login')}
              </button>
            )}
            {userlogin && (
              <div className="text-center bg-cyan-50  mr-1 mt-2 w-16 h-5">
                <button
                  type="submit"
                  onClick={HandleProfile}
                  className=" md:text-lg ml-2  lg:px-6 rounded-md box-border  transition-all duration-250 bg-cyan-400 hover:bg-cyan-500 translate-y-1 hover:text-white "
                  onMouseEnter={() => setProfileList(true)}
                >
                  {t('Profile')}
                </button>
                {profileList && (
                  <ul onMouseLeave={() => setProfileList(false)}>
                    <li>
                      <button
                        type="button"
                        className="hover:text-orange-300  w-[7rem] block py-2 px-4 text-black-700 hover:bg-cyan-100 dark:hover:bg-gray-600"
                        onClick={HandleProfile}
                      >
                        {t('Profile')}
                      </button>
                    </li>
                    <li>
                      <button
                        type="button"
                        className="hover:text-orange-300 w-[7rem] block py-2 px-4 text-black-700 hover:bg-cyan-100 dark:hover:bg-gray-600"
                        onClick={logOut}
                      >
                        {t('Log Out')}{' '}
                      </button>
                    </li>
                  </ul>
                )}
              </div>
            )}
          </li>
        </ul>
      </div>
      <div
        role="button"
        tabIndex={0}
        onClick={navToggle}
        onKeyDown={navToggle}
        className={icon}
      >
        <div className="line1"> </div>
        <div className="line2"> </div>
        <div className="line3"> </div>
      </div>
    </nav>
  );
}

export default Navbar;
