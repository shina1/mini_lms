import React, { ReactNode } from "react";
import { IconType } from "react-icons";
import classNames from "classnames";

interface ButtonProps {
  icon?: IconType;
  text: string;
  type: "primary" | "secondary";
  handleClick?: ((e: any) => void) | undefined;
}

const Button: React.FC<ButtonProps> = ({
  icon: Icon,
  text,
  type,
  handleClick,
}) => {
  const buttonClasses = classNames(
    " items-center border border-[#FF7606] gap-[0.5rem] xl:gap-2 p-2 xl:px-4 rounded-full border-none text-sm xl:text-lg transition duration-300",
    {
      "hidden md:flex bg-[#FF7606]/80 text-white": type === "primary",
      "flex bg-[#000]  text-[#fff]": type === "secondary",
    }
  );

  return (
    <button className={buttonClasses} onClick={handleClick}>
      {Icon && <Icon className="inline-block mr-2" size={25} />} {text}
    </button>
  );
};

export default Button;
