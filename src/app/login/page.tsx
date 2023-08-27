"use client";
import React from "react";
import { authSigninWithGoogle } from "@/auth/auth";
import { useRouter } from "next/navigation";

type loginProps = {
  setIsLogIn: React.Dispatch<React.SetStateAction<boolean>>;
};

const Login = ({ setIsLogIn }: loginProps) => {
  const router = useRouter();
  const handleSignInWithGoogle = (e: React.MouseEvent) => {
    e.preventDefault();
    authSigninWithGoogle(setIsLogIn, router);
  };
  return (
    <div className="flex flex-col items-center justify-center gap-5 w-[90%] lg:w-[30%] h-[55vh] lg:h-[45vh] ml-auto mr-auto mt-20 lg:mt-40 shadow-md shadow-black">
      <p className="text-md lg:text-lg font-bold">
        Sign In With Google to Continue
      </p>
      <button
        className="bg-[#FF7606]/80 text-white md:flex  items-center gap-2 py-2 rounded-full border-none"
        onClick={handleSignInWithGoogle}
      >
        Sign in with Google
      </button>
    </div>
  );
};

export default Login;
