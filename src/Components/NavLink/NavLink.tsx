import React from "react";

import { Link } from "react-router-dom";

interface NavProps {
  text: string;
  url: string;
  children?: React.ReactNode;
  horizontal?: boolean;
}

const NavLink: React.FC<NavProps> = ({ text, url, children, horizontal }) => {
  return (
    <div className="hover:bg-light-50 hover:dark:bg-dark-50 p-2 rounded-md transition-all duration-75">
      <Link
        to={url}
        className={`flex items-center  ${
          horizontal ? "flex-row gap-x-4" : "flex-col gap-y-2"
        }`}
      >
        <div >{children}</div>
        <p className="text-sm">{text}</p>
      </Link>
    </div>
  );
};

export default NavLink;
