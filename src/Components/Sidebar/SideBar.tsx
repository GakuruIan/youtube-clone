// components
import NavLink from "../NavLink/NavLink";

// icons
import { CiHome, CiUser, CiLogout } from "react-icons/ci";
import { IoVideocamOutline } from "react-icons/io5";
import { MdOutlineSubscriptions } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";


const SideBar = () => {
  return (
    <div className="hidden w-22 md:block bg-white dark:bg-dark-300 fixed h-[calc(100vh-64px)]">
      <div className="flex flex-col h-full gap-y-8  py-2 px-1">
        {/* <div className="p-2 flex w-full items-center justify-center">
            <Link to='/' className="flex items-center  p-2">
               <img src={logo} alt="" className="h-6 w-6 object-contain"/>
            </Link>

        </div> */}
        <div className="flex flex-1 flex-col gap-y-6">
          <NavLink text="Home" url="/">
            <CiHome className="h-5 w-5" />
          </NavLink>

          <NavLink text="Shorts" url="/">
            <IoVideocamOutline className="h-5 w-5" />
          </NavLink>

          <NavLink text="Subcriptions" url="/subscriptions">
            <MdOutlineSubscriptions className="h-5 w-5" />
          </NavLink>

          <NavLink text="You" url="/profile">
            <CiUser className="h-5 w-5" />
          </NavLink>
        </div>
        <div className="flex flex-col gap-y-6">
          <NavLink text="Settings" url="/">
            <IoSettingsOutline className="h-5 w-5" />
          </NavLink>
          <NavLink text="Logout" url="/">
            <CiLogout className="h-5 w-5" />
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
