import React, {useState} from 'react';
import { useSelector ,useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';

import {updatechange , DeleteAccount} from "../../features/users/usersSlice"

import profile from './Images/ProfilePhoto.svg';


const UpdateUserInfo = () => {
  const { register, handleSubmit , } = useForm();
  const userInfo = useSelector((state)=>state.users.user)
  const [fullName , setfullName] = useState(userInfo.name);
  const [Education , setEducation] = useState(userInfo.EducationLevel)
  const [Hobbies , setHobbies] = useState(userInfo.Hobbies)
  const [FamilySize , setFamilySize] = useState(userInfo.FamilySize)
  const [Gender , setGender] = useState(userInfo.Gender);
  const [Email , setEmail] = useState(userInfo.email)
  const [day , setDay] = useState(userInfo.birthdayDay)
  const [month, setMonth] = useState(userInfo.birthdayMonth)
  const [year, setYear] = useState(userInfo.birthdayYear);
  const [PhoneNumber , setPhoneNumber] = useState(userInfo.PhoneNumber)
  const [filedata , setFiledata] = useState();
 
  const dispatch = useDispatch();

  
  
  const onSubmit =(user) => {
    let newPassword = null;
    console.log(user.Password)
    console.log(user.confiremPassowrd)
    if(user.Password === user.confiremPassowrd) { 
        newPassword = user.Password ;
    }
    else {
      alert(" password and confirm password not match ")
    }
     
 dispatch(updatechange( {

      id: userInfo.id,
      email: user.email ,
      name : user.name ,
      photoURL : null ,  
      birthdayDay: user.birthdayDay,
      birthdayMonth : user.birthdayMonth,
      birthdayYear : user.birthdayYear,
      EducationLevel : user.EducationLevel ,
      Hobbies : user.Hobbies ,
      FamilySize : user.FamilySize ,
      Gender : user.Gender ,
      PhoneNumber : user.PhoneNumber ,
      Idimage : filedata ,
      Password : newPassword,
    }))} ;

  const HandelDelete = ()=>{
    dispatch(DeleteAccount({ id: userInfo.id}));

  }
  const handleDelete = ()=>{
    setfullName(userInfo.name)
    setEducation(userInfo.education);
    setHobbies(userInfo.Hobbies);
    setFamilySize(userInfo.FamilySize);
    setGender(userInfo.Gender);
    setEmail(userInfo.email)
    setDay(userInfo.birthdayDay)
    setYear(userInfo.birthdayYear);
    setPhoneNumber(userInfo.PhoneNumber)
    setMonth(userInfo.birthdayMonth);
  }

  
  


  return (
  
    <div className="flex flex-col font-poppins lg:items-center">
      <div className="self-center mt-8 lg:text-xl text-sm text-[#FF0000] lg:ml-0 ml-16 lg:mr-0 mr-[-1em]">
        Please fill all the fields with correct and valid details to complete
        your profile.
      </div>
      <div className="flex lg:flex-row flex-col">
        <div className="flex flex-col lg:ml-[-10em] md:ml-[10%] ml-[25%] lg:mr-[0%] md:mr-[30%] mr-[25%]">
          <img src={profile} alt="profile" className="self-center ml-28" />
        </div>
        <div className="flex flex-col lg:ml-16 ml-44">
          <div className=" lg:ml-20 ml-[-15em] lg:self-start lg:mr-44 mt-6 mb-15 ">
            <h1 className="lg:text-5xl text-2xl lg:ml-0 ml-20 mb-10">
              <b>PROFILE INFO</b>
            </h1>
            <div className="flex flex-rows">
              <div className="flex flex-col mt-4 lg:text-xl text-sm gap-9 lg:self-start lg:ml-0 ml-20">
                <div>Full Name</div>
                <div>Education Level</div>
                <div>Hobbies</div>
                <div>Family Size</div>
                <div>Gender</div>
                <div>Birth Date</div>
                <div className="mt-2">Email</div>
                <div>Phone Number</div>
                <div className="mt-2">Upload ID</div>
              </div>
              <div className="flex flex-col gap-7 lg:mt-1 mt-3 ml-6 ">
                <div>
                  <input
                  {...register("name")  }
                    className="bg-gray-50 border border-SubTexts text-gray-900 sm:text-sm rounded-lg ml-6 focus:ring-primary-600 focus:border-primary-600 block lg:p-2 p-1 lg:w-[28.5em] w-[16em]"
                    id="name"
                    name="name"
                    type="text" 
                    value={fullName}
                    onChange={(e)=> setfullName(e.target.value)  }
                   
                  />
                </div>
                <div>
                  <div className="relative w-full lg:max-w-sm">
                    <select 
                    {...register("EducationLevel")}
                    value ={Education}
                    onChange={(e)=>setEducation(e.target.value)}
                    className="lg:w-[25em] w-[16em] p-2 ml-6 text-gray-500 bg-white border border-SubTexts rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600">
                      <option value={userInfo.EducationLevel} selected="selected" disabled="disabled">
                        -- Select Education --
                      </option>
                      <option value="No formal education">
                        No formal education
                      </option>
                      <option value="Primary education">
                        Primary education
                      </option>
                      <option value="Secondary education">High school</option>
                      <option value="GED">GED</option>
                      <option value="Vocational qualification">
                        Vocational qualification
                      </option>
                      <option value="Bachelor's degree">
                        Bachelor&apos;s degree
                      </option>
                      <option value="Master's degree">
                        Master&apos;s degree
                      </option>
                      <option value="Doctorate or higher">
                        Doctorate or higher
                      </option>
                    </select>
                  </div>
                </div>
                <div>
                  <input
                  {...register("Hobbies")}
                    className=" bg-gray-50 border border-SubTexts text-gray-900 sm:text-sm rounded-lg ml-6 focus:ring-primary-600 focus:border-primary-600 block lg:p-2 p-1 lg:w-[28.5em] w-[16em]"
                    id="Hobbies"
                    name="Hobbies"
                    type="text"
                    value={Hobbies}
                    onChange={(e)=>setHobbies(e.target.value)}
                  />
                </div>
                <div className="flex flex-row">
                  <input
                  {...register("FamilySize")}
                    className="bg-gray-50 border border-SubTexts text-gray-900 sm:text-sm rounded-lg ml-6 focus:ring-primary-600 focus:border-primary-600 block w-[4em] p-0.5"
                    id="FamilySize"
                    name="FamilySize"
                    type="text"
                    value = {FamilySize}
                    onChange={(e)=>setFamilySize(e.target.value)}
                  />
                  <div className="self-center ml-4">Member(s)</div>
                </div>
                <div>
                  <select 
                   {...register("Gender")}
                   value ={Gender}
                   onChange={(e)=>setGender(e.target.value)}

                  className="lg:w-[25em] w-[16em] p-2 ml-6 text-gray-500 bg-white border border-SubTexts rounded-lg shadow-sm outline-none appearance-none focus:border-SubTexts">
                    <option value={userInfo.Gender} selected="selected" disabled="disabled">
                      -- Select Gender --
                    </option>
                    <option value="female">Female</option>
                    <option value="male">Male</option>
                  </select>
                </div>
                <div className="flex flex-row">
                  <input
                  {...register("birthdayDay")}
                    className="bg-gray-50 border border-SubTexts text-gray-900 sm:text-sm rounded-lg ml-6 focus:ring-primary-600 focus:border-primary-600 block lg:p-2 p-1 lg:w-[5em] w-[3em]"
                    id="birthdayDay"
                    name="birthdayDay"
                    type="text"
                    placeholder="DD"
                    value = {day}
                    onChange={(e)=> setDay(e.target.value)  }
                  />
                  <input
                   {...register("birthdayMonth")}
                    className="bg-gray-50 border border-SubTexts text-gray-900 sm:text-sm rounded-lg ml-2 focus:ring-primary-600 focus:border-primary-600 block lg:p-2 p-1 lg:w-[5em] w-[3em]"
                    id="birthdbirthdayMonthay"
                    name="birthdayMonth"
                    type="text"
                    placeholder="MM"
                    value = {month}
                    onChange = {(e)=> setMonth(e.target.value)}
                  />
                  <input
                    className="bg-gray-50 border border-SubTexts text-gray-900 sm:text-sm rounded-lg ml-4 focus:ring-primary-600 focus:border-primary-600 block lg:p-2 p-1 lg:w-[17em] w-[8.5em]"
                    id="birthyear"
                    name="birthyear"
                    type="text"
                    placeholder="YYYY"
                    {...register("birthdayYear")}
                    value = {year}
                    onChange = {(e)=> setYear(e.target.value)}
                  />
                </div>
                <div>
                  <input
                  {...register("email")}
                    className="bg-gray-50 border border-SubTexts text-gray-900 sm:text-sm rounded-lg ml-6 focus:ring-primary-600 focus:border-primary-600 block lg:p-2 p-1 lg:w-[28.5em] w-[16em]"
                    id="email"
                    name="email"
                    type="email"
                    value = {Email}
                    onChange={(e)=>setEmail(e.target.value)}
                  />
                </div>
                <div>
                  <input
                   {...register("PhoneNumber")}
                    className="bg-gray-50 border border-SubTexts text-gray-900 sm:text-sm rounded-lg ml-6 focus:ring-primary-600 focus:border-primary-600 block lg:p-2 p-1 lg:w-[28.5em] w-[16em]"
                    id="PhoneNumber"
                    name="PhoneNumber"
                    type="tel"
                    value = {PhoneNumber}
                    onChange = {(event) => {setPhoneNumber(event.target.value)}}
                  />
                </div>
                <div className="flex flex-row bg-gray-50 border border-SubTexts text-gray-900 sm:text-sm rounded-lg ml-6 focus:ring-primary-600 focus:border-primary-600 block lg:p-2 p-1 lg:w-[28.5em] w-[16em]">
                  <input
                  
                    className=""
                    id="uploadID"
                    name="uploadID"
                    type="file"
                    onChange={(e)=>setFiledata(e.target.files[0])}
                  />
             
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
                  {...register("Password")}
                    className="bg-gray-50 border border-SubTexts text-gray-900 sm:text-sm rounded-lg ml-6 focus:ring-primary-600 focus:border-primary-600 block lg:p-2 p-1 lg:w-[28em] w-[17.5em]"
                    id="Password"
                    name="Password"
                    type="password"
                  />
                </div>
                <div className="flex flex-row">
                  <input
                  {...register("confiremPassowrd")}
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
              onClick={()=>HandelDelete()}
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
          <div className="flex flex-col mt-4 lg:ml-20 ml-[-10em] mt-16">
            <div className="lg:text-5xl text-2xl">
              <b>Payment Methods & Tickets</b>
            </div>
            <div className="flex flex-rows gap-10 mt-8 mb-16">
              <div className="flex flex-col ">
                <div className="lg:text-lg text-sm mb-2">3 Cards Added</div>
                <button
                  type="button"
                  className="bg-[#2DD3E3] font-medium text-2xl px-10 py-3 rounded-md shadow-[0px_7px_20px_rgba(0,0,0,0.2)]"
                >
                  SHOW CARDS
                </button>
              </div>
              <div className="flex flex-col">
                <div className="lg:text-lg text-sm mb-2 ">
                  10 Tickets Remaining
                </div>
                <button
                  type="button"
                  className="bg-[#2DD3E3] font-medium text-2xl px-10 py-3 rounded-md shadow-[0px_7px_20px_rgba(0,0,0,0.2)]"
                >
                  BUY TICKETS
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateUserInfo;
