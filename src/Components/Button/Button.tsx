import React from "react";

interface ButtonProps {
  text: string;
  type: "submit" | "button" | "reset";
  style?: string;
  handleClick?: () => void;
  variant: "primary" | "secondary";
}

const Button: React.FC<ButtonProps> = ({
  text,
  type,
  style,
  handleClick,
  variant,
}) => {
  return (
    <button
      type={type}
      className={`${
        variant == "primary"
          ? "bg-indigo-600  hover:bg-indigo-700 text-white dark:bg-white hover:dark:bg-gray-200 dark:text-gray-950"
          : "border text-gray-800  dark:text-white dark:hover:border-white hover:bg-indigo-600 hover:border-indigo-600 hover:dark:bg-white hover:text-white hover:dark:text-gray-900 border-gray-500"
      }  px-4 py-2.5   transition-colors duration-75 ${style}`}
      onClick={handleClick}
    >
      {text}
    </button>
  );
};

export default Button;
