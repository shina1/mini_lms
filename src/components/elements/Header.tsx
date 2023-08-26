"use client";
import React, { useState } from "react";
import {
  AiOutlineCloseCircle,
  AiOutlineMenu,
  AiOutlineSearch,
} from "react-icons/ai";
import { BiPen, BiLogIn, BiLogOut } from "react-icons/bi";
import { AiOutlineHome } from "react-icons/ai";
// import { NavLink, useNavigate } from "react-router-dom";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Button from "./Button";
import TeacherFormModal from "../modules/Modals/TeacherFormModal";
import StudentFormModal from "../modules/Modals/StudentFormModal";

// import { logOut } from '../../utils/auth/authLogout';

// type headerPrps = {
//   setIsLogIn: React.Dispatch<React.SetStateAction<boolean>>;
// };
const Header = () => {
  const router = useRouter();
  const [openNav, setOpenNav] = useState(false);
  const [toggleTeacher, setToggleTeacher] = useState(false);
  const [toggleStudent, setToggleStudent] = useState(false);
  //   const isLoggedIn = localStorage.getItem("isLogIn");
  //   const navigate = useNavigate();
  const handleAddTeacher = () => {
    setToggleTeacher(!toggleTeacher);
  };

  const handleToggleStudent = () => {
    setToggleStudent(!toggleStudent);
  };
  console.log("toggleTeacher", toggleTeacher);

  const isLoggedIn = "true";
  console.log("isLoggedIn", isLoggedIn);

  return (
    <div className="max-w-[1640px] mx-auto flex justify-between items-center py-4 px-2  md:p-4 shadow-[0_10px_30px_-28px_rgba(0,0,0,0.3)]">
      <div className="flex items-center">
        <div
          className="cursor-pointer"
          onClick={() => {
            setOpenNav(!openNav);
          }}
        >
          <AiOutlineMenu size={25} />
        </div>
        <h3 className="text-sm sm:text-xl  md:text-2xl xl:text-4xl px-2 font-normal sm:font-medium xl:font-bold text-[#0F344E]">
          Mini LMS
        </h3>
      </div>
      {/* search input */}
      <div className="bg-gray-200 rounded-full flex items-center px-2 w-[200px] md:w-[400px] lg:w-[500px]">
        <AiOutlineSearch size={20} />
        <input
          type="text"
          placeholder="search..."
          className="bg-transparent p-2 w-full focus:outline-none"
        />
      </div>
      {/* login button */}
      {isLoggedIn === "true" ? (
        <div className="hidden md:hidden lg:flex md:gap-2">
          <Button
            icon={BiPen}
            text="Add Teacher"
            type="primary"
            handleClick={handleAddTeacher}
          />
          <Button
            icon={BiPen}
            text="Add Student"
            type="primary"
            handleClick={handleToggleStudent}
          />
        </div>
      ) : (
        <button className="bg-[#FF7606]/80 text-white hidden md:hidden lg:flex  items-center gap-2 py-2 rounded-full border-none">
          <BiLogIn size={24} /> <Link href="/login">Login</Link>
        </button>
      )}

      {/* mobile menu */}
      {/* overlay */}
      {openNav ? (
        <div className="bg-black/80 fixed w-full h-screen z-10 top-0 left-0"></div>
      ) : (
        ""
      )}
      {/* drawwer */}
      <div
        className={
          openNav
            ? "fixed top-0 left-0 w-[250px] h-screen bg-white z-10 duration-300"
            : "fixed top-0 left-[-100%] w-[250px] h-screen bg-white z-10 duration-300"
        }
      >
        <AiOutlineCloseCircle
          className="absolute right-4 top-4 cursor-pointer"
          size={30}
          onClick={() => {
            setOpenNav(!openNav);
          }}
        />
        <h2 className="text-2xl p-4">
          Mini <span className="font-bold">LMS</span>
        </h2>
        <nav>
          <ul className="flex flex-col p-4 text-gray-800">
            <li
              className="text-xl py-4 flex"
              onClick={() => {
                setOpenNav(!openNav);
              }}
            >
              <AiOutlineHome size={25} className="mr-4" />
              <Link href="/">Home</Link>
            </li>
            {isLoggedIn === "true" ? (
              <>
                <li
                  className="text-xl py-4 flex"
                  onClick={() => {
                    setOpenNav(!openNav);
                  }}
                >
                  <BiPen size={25} className="mr-4" />
                  <Link href="#">Add a Techer</Link>
                </li>
                <li
                  className="text-xl py-4 flex"
                  onClick={() => {
                    setOpenNav(!openNav);
                  }}
                >
                  <BiPen size={25} className="mr-4" />
                  <Link href="#">Add a Student</Link>
                </li>
                <li
                  className="text-xl py-4 flex cursor-pointer"
                  onClick={() => {
                    // logOut(setIsLogIn, navigate);
                    setOpenNav(!openNav);
                  }}
                >
                  <BiLogOut size={25} className="mr-4" />
                  Logout
                </li>
              </>
            ) : (
              <li
                className="text-xl py-4 flex"
                onClick={() => {
                  setOpenNav(!openNav);
                }}
              >
                <BiLogIn size={25} className="mr-4" />
                <Link href="/login">Login</Link>
              </li>
            )}
          </ul>
        </nav>
      </div>

      {toggleTeacher && (
        <TeacherFormModal
          toggleTeacher={toggleTeacher}
          setToggleTeacher={setToggleTeacher}
        />
      )}
      {toggleStudent && (
        <StudentFormModal
          toggleStudent={toggleStudent}
          setToggleStudent={setToggleStudent}
        />
      )}
    </div>
  );
};

export default Header;
