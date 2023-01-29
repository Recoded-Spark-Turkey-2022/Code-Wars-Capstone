import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { updatechange, DeleteAccount } from '../../features/users/usersSlice';
import Therapistprofilepic from './Therapistprofilepic';



export default function Therapistprofile() {
  const { register, handleSubmit } = useForm();
  const userInfo = useSelector((state) => state.users.user);
  const [fullName, setfullName] = useState(userInfo.name);
  const [day, setDay] = useState(userInfo.birthdayDay);
  const [month, setMonth] = useState(userInfo.birthdayMonth);
  const [year, setYear] = useState(userInfo.birthdayYear);
  const [PhoneNumber, setPhoneNumber] = useState(userInfo.PhoneNumber);
  const [filedata, setFiledata] = useState();
  const [profilepic, setprofilepic] = useState(userInfo.photoURL);

  const dispatch = useDispatch();

  const onSubmit = (user) => {
    let newPassword = '';

    if (user.Password === user.confiremPassowrd) {
      newPassword = user.Password;
    } else {
      alert(' password and confirm password not match ');
    }

    dispatch(
      updatechange({
        id: userInfo.id,
        name: user.name,
        photoURL: profilepic,
        birthdayDay: user.birthdayDay,
        birthdayMonth: user.birthdayMonth,
        birthdayYear: user.birthdayYear,
        PhoneNumber: user.PhoneNumber,
        Idimage: filedata,
        Password: newPassword,
      })
    );
  };

  const HandelDelete = () => {
    dispatch(DeleteAccount({ id: userInfo.id }));
  };
  const handleDelete = () => {
    setfullName(userInfo.name);
    setDay(userInfo.birthdayDay);
    setYear(userInfo.birthdayYear);
    setPhoneNumber(userInfo.PhoneNumber);
    setMonth(userInfo.birthdayMonth);
  };

  return (
    <div >
      <div className="self-center mt-8 lg:text-xl text-sm text-[#FF0000] lg:ml-0 ml-16 lg:mr-0 mr-[-1em]">
        Please fill all the fields with correct and valid details to complete
        your profile.
      </div>
      <div >
        <div className=" lg:ml-[-10em] md:ml-[10%] ml-[25%] lg:mr-[0%] md:mr-[30%] mr-[25%]">
          <Therapistprofilepic
            setprofilepic={setprofilepic}
            profilepic={userInfo.photoURL}
            className="self-center ml-28"
          />
        </div>
        <div className=" ml-44">
          <div className=" lg:ml-20 ml-[-15em] lg:self-start lg:mr-44 mt-6 mb-15 ">
            <h1 className="lg:text-5xl text-2xl lg:ml-0 ml-20 mb-10">
              <b>THERAPIST PROFILE</b>
            </h1>
            <div className="flex flex-rows mt-6">
              <div className="flex flex-col mt-4 lg:text-xl text-base gap-9 self-start">
                <div>Full Name</div>
                <div >Birth Date</div>
                <div className="mt-2">Email</div>
                <div>Phone Number</div>
                <div className="mt-2">Upload ID</div>
                <div className="gap-7 lg:mt-1 mt-3 ml-6 ">
                <div>
                  <input
                    {...register('name')}
                    className=" bg-gray-50 border border-SubTexts text-gray-900 sm:text-sm rounded-lg ml-6 focus:ring-primary-600 focus:border-primary-600 block lg:p-2 p-1 lg:w-[28.5em] w-[16em]"
                    id="name"
                    name="name"
                    type="text"
                    value={fullName}
                    onChange={(e) => setfullName(e.target.value)}
                  />
                </div>
             
              </div>
              <div className="flex flex-row">
                <input
                  {...register('birthdayDay')}
                  className="bg-gray-50 h-[3rem] border border-SubTexts text-gray-900 sm:text-sm rounded-lg ml-6 focus:ring-primary-600 focus:border-primary-60 block lg:p-2 p-1 lg:w-[5em] w-[3em]"
                  id="birthdayDay"
                  name="birthdayDay"
                  type="text"
                  placeholder="DD"
                  value={day}
                  onChange={(e) => setDay(e.target.value)}
                />
                <input
                  {...register('birthdayMonth')}
                  className="bg-gray-50 border border-SubTexts text-gray-900 sm:text-sm rounded-lg ml-2 focus:ring-primary-600 focus:border-primary-600 block lg:p-2 p-1 lg:w-[5em] w-[3em]"
                  id="birthdbirthdayMonthay"
                  name="birthdayMonth"
                  type="text"
                  placeholder="MM"
                  value={month}
                  onChange={(e) => setMonth(e.target.value)}
                />
                <input
                  className="bg-gray-50 border border-SubTexts text-gray-900 sm:text-sm rounded-lg ml-4 focus:ring-primary-600 focus:border-primary-600 block lg:p-2 p-1 lg:w-[17em] w-[8.5em]"
                  id="birthyear"
                  name="birthyear"
                  type="text"
                  placeholder="YYYY"
                  {...register('birthdayYear')}
                  value={year}
                  onChange={(e) => setYear(e.target.value)}
                />
              </div>
              <div className='flex flex-row'>
                <input
                  {...register('email')}
                  className="bg-gray-50 border border-SubTexts bg-gray-500 sm:text-sm rounded-lg ml-6 focus:ring-primary-600 focus:border-primary-600 block lg:p-2 p-1 lg:w-[28.5em] w-[16em]"
                  id="email"
                  name="email"
                  type="email"
                  disabled
                  value={userInfo.email}
                />
              </div>
              <div>
                <input 
                  {...register('PhoneNumber')}
                  className=" flex flex-row bg-gray-50 border border-SubTexts text-gray-900 sm:text-sm rounded-lg ml-6 focus:ring-primary-600 focus:border-primary-600 block lg:p-2 p-1 lg:w-[28.5em] w-[16em]"
                  id="PhoneNumber"
                  name="PhoneNumber"
                  type="tel"
                  value={PhoneNumber}
                  onChange={(event) => {
                    setPhoneNumber(event.target.value);
                  }}
                />
              </div>
              <div className="flex flex-row bg-gray-50 border border-SubTexts text-gray-900 sm:text-sm rounded-lg ml-6 focus:ring-primary-600 focus:border-primary-600 block lg:p-2 p-1 lg:w-[28.5em] w-[16em]">
                <input
                  className=""
                  id="uploadID"
                  name="uploadID"
                  type="file"
                  accept="image/*"
                  onChange={(e) => setFiledata(e.target.files[0])}
                />
              </div>
            </div>
          </div>
        </div>
              </div>
              
        <div className="lg:ml-20 ml-[-10em]">
          <div className="lg:text-5xl text-2xl mt-12">
            <b>Security</b>
          </div>
          <div className="flex flex-rows mt-6">
            <div className="flex flex-col mt-4 lg:text-xl text-base gap-9 self-start">
              <div>Password</div>
              <div className="lg:mt-0 mt-[-1em]">Confirm Password</div>
            </div>
            <div className="flex flex-col gap-7 mt-1 lg:ml-0 ml-4">
              <div className="flex flex-row">
                <input
                  {...register('Password')}
                  className="bg-gray-50 border border-SubTexts text-gray-900 sm:text-sm rounded-lg ml-6 focus:ring-primary-600 focus:border-primary-600 block lg:p-2 p-1 lg:w-[28em] w-[17.5em]"
                  id="Password"
                  name="Password"
                  type="password"
                />
              </div>
              <div className="flex flex-row">
                <input
                  {...register('confiremPassowrd')}
                  className="bg-gray-50 border border-SubTexts text-gray-900 sm:text-sm rounded-lg ml-6 focus:ring-primary-600 focus:border-primary-600 block  lg:p-2 p-1 lg:w-[28em] w-[17.5em]"
                  id="confiremPassowrd"
                  name="confiremPassowrd"
                  type="password"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-rows lg:gap-8 gap-3 mt-10 lg:ml-20 ml-[-12em] lg:text-base text-sm">
          <button
            onClick={handleSubmit(onSubmit)}
            type="button"
            className="bg-[#2DD3E3] font-medium text-2xl px-10 py-3 rounded-md shadow-[0px_7px_20px_rgba(0,0,0,0.2)]"
          >
            SAVE CHANGES
          </button>
          <button
            type="button"
            className="bg-[#2DD3E3] font-medium text-2xl px-10 py-3 rounded-md shadow-[0px_7px_20px_rgba(0,0,0,0.2)]"
            onClick={() => HandelDelete()}
          >
            DELETE ACCOUNT
          </button>
          <button
            type="button"
            className="bg-[#2DD3E3] font-medium text-2xl px-10 py-3 rounded-md shadow-[0px_7px_20px_rgba(0,0,0,0.2)]"
            onClick={handleDelete}
          >
            CANCEL
          </button>
        </div>
      </div>
    </div>
  );
}
