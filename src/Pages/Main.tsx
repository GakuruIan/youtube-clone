
// components
import SideBar from "../Components/Sidebar/SideBar"
import Tabs from "../Components/Tabs/Tabs"
import TopBar from "../Components/Topbar/TopBar"

// router
import { Outlet } from "react-router-dom"

const Main = () => {
  return (
   <div className="flex flex-col">
     <TopBar/>

     <div className="flex mt-[4.3rem] relative w-full flex-row">
         {/* <SideBar/> */}
         <div className='w-full mx-1'>
           <div className="">

               <div className="">
                <Outlet/>
               </div>

           </div>
         </div>
       </div>
   </div>
  )
}

export default Main