
// icons
import { CiSearch,CiBellOn,CiVideoOn  } from "react-icons/ci";
import { FiMenu } from "react-icons/fi";


// image
import pic from '../../assets/space.jpg'


const TopBar = () => {
  return (
    <div className="py-3 z-20 fixed top-0 left-0 w-screen bg-white dark:bg-dark-300">
      <div className="px-4 md:px-8 flex flex-col gap-y-2 ">
          <div className="flex items-center justify-between gap-x-8">
              <div className="">
                 < FiMenu className="h-6 w-6"/>
              </div>

              {/* search bar */}
                <div className="flex-1 flex items-center justify-center">
                  <form action="" className="w-full md:w-3/5 max-w-xl flex items-center rounded-md overflow-clip dark:bg-dark-50 dark:text-white bg-light-50">
                    <input
                      type="text"
                      className="w-full outline-0 bg-inherit px-2 py-0.5"
                      placeholder="search"
                      required
                    />
                    <button className="flex items-center justify-center p-4 dark:bg-indigo-500 bg-indigo-600 hover:bg-indigo-700 transition-colors duration-75">
                        <CiSearch className="h-4 w-4 text-white "/>
                    </button>
                  </form>
                </div>
               {/* search bar */}

               {/* icons */}
                  <div className=" flex items-center gap-x-1 md:gap-x-4">
                    <CiVideoOn className="h-6 w-6 hidden"/>
                    <CiBellOn className="h-6 w-6 hidden"/>
                    <img className="w-10 h-10 rounded-full" src={pic} alt="Rounded avatar"></img>
                  </div>
               {/* icons */}
          </div>

      </div>
    </div>
  )
}

export default TopBar