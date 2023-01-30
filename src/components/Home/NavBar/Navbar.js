import { React, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logoutUser } from '../../../features/users/usersSlice';
import Image from './Logo.svg';

function Navebar() {
  const Navigate = useNavigate();
  const dispatch = useDispatch();

  const { userlogin } = useSelector((state) => state.users);

  const [isListOpen, setIsListOpen] = useState(false);
  const [profileList, setProfileList] = useState(false);

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

  const onclicklogo = () => {
    return Navigate('/');
  };

  const aboutList = (
    <div className="text-center bg-cyan-50  mr-1 mt-2 w-16 h-5">
      <button
        type="button"
        className="hover:text-orange-300"
        onMouseEnter={() => setIsListOpen(true)}
      >
        About
      </button>
      {isListOpen && (
        <ul onMouseLeave={() => setIsListOpen(false)}>
          <li>
            <button
              type="button"
              className="hover:text-orange-300  w-[7rem] block py-2 px-4 text-black-700 hover:bg-cyan-100 dark:hover:bg-gray-600"
              onClick={() => Navigate('/about')}
            >
              About Us
            </button>
          </li>
          <li>
            <button
              type="button"
              className="hover:text-orange-300 w-[7rem] block py-2 px-4 text-black-700 hover:bg-cyan-100 dark:hover:bg-gray-600"
              onClick={() => Navigate('/team')}
            >
              Our Team{' '}
            </button>
          </li>
          <li>
            <button
              type="button"
              className="hover:text-orange-300 w-[7rem] block py-2 px-4 text-black-700 hover:bg-cyan-100 dark:hover:bg-gray-600"
              onClick={() => Navigate('/careers')}
            >
              Careers{' '}
            </button>
          </li>
        </ul>
      )}
    </div>
  );

  return (
    <div>
      {/* <button
        data-collapse-toggle="navbar-default"
        type="button"
        className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        aria-controls="navbar-default"
        aria-expanded="false"
      >
        <span className="sr-only">Open main menu</span>
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clipRule="evenodd"
          >
            n
          </path>
        </svg>
      </button> */}

      <nav
        style={{ fontFamily: 'Poppins, sans-serif' }}
        className="bg-cyan-50 px-2 sm:px-4 py-2.5 rounded   "
      >
        <button type="submit" onClick={onclicklogo}>
          {' '}
          <img src={Image} alt="logo" className=" h-9 w-9 mt-2 ml-6" />
        </button>
        <Link to="/">
          {' '}
          <h1 className="absolute top-4 left-[5.5rem]  text-3xl">
            Healing
          </h1>{' '}
        </Link>

        <div className="absolute top-3.5 right-14 ">
          <div className="    flex justify-around text-l space-x-10">
            <Link to="/" className=" hover:text-orange-300 mr-4 mt-2">
              Home
            </Link>
            <Link to="/blog/1" className=" hover:text-orange-300 mr-2  mt-2">
              Blogs
            </Link>
            {aboutList}
            <Link to="/contactus" className=" hover:text-orange-300 ml-2 mt-2">
              Contact Us
            </Link>
            {!userlogin && (
              <button
                type="submit"
                onClick={HandleLogin}
                className=" md:text-lg ml-2  lg:px-6 rounded-md box-border  transition-all duration-250 bg-cyan-400 hover:bg-cyan-500 translate-y-1 hover:text-white "
              >
                login
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
                  Profile
                </button>
                {profileList && (
                  <ul onMouseLeave={() => setProfileList(false)}>
                    <li>
                      <button
                        type="button"
                        className="hover:text-orange-300  w-[7rem] block py-2 px-4 text-black-700 hover:bg-cyan-100 dark:hover:bg-gray-600"
                        onClick={HandleProfile}
                      >
                        Profile
                      </button>
                    </li>
                    <li>
                      <button
                        type="button"
                        className="hover:text-orange-300 w-[7rem] block py-2 px-4 text-black-700 hover:bg-cyan-100 dark:hover:bg-gray-600"
                        onClick={logOut}
                      >
                        Log Out{' '}
                      </button>
                    </li>
                  </ul>
                )}
              </div>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}
export default Navebar;
