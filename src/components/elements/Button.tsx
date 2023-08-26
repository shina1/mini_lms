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
    " items-center border border-[#FF7606] gap-2 py-2 px-4 rounded-full border-none text-lg transition duration-300",
    {
      "hidden md:flex bg-[#FF7606]/80 text-white": type === "primary",
      "flex bg-white  text-[#FF7606]/80": type === "secondary",
    }
  );

  return (
    <button className={buttonClasses} onClick={handleClick}>
      {Icon && <Icon className="inline-block mr-2" size={25} />} {text}
    </button>
  );
};

export default Button;
