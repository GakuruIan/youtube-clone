

// icons
import { CiSearch } from "react-icons/ci";

// components
import SideBar from "../../Components/Sidebar/SideBar";

// image
import pic from "../../assets/space.jpg";

const Channel = () => {
  return (
    <div>
      <div className="flex  ">
        <SideBar />
        <div className="w-full md:ml-[5.06rem]">
          <div className="mt-4 px-4">
            <div className="w-full h-36 md:h-60 mb-4">
              <img
                src={pic}
                alt=""
                className="h-full w-full rounded-md object-cover"
              />
            </div>

            <div className="mt-2">
              <div className="flex w-full items-center gap-x-2">
                <img
                  className="w-20 md:w-36 h-20 md:h-36 rounded-full"
                  src={pic}
                  alt="Rounded avatar"
                />

                <div className="">
                  <h4 className="text-2xl md:text-4xl font-medium mb-1">
                    Channel Name
                  </h4>

                  <div className="grid grid-cols-2 md:grid-cols-3  gap-1 md:gap-x-2">
                    <span className="text-sm dark:text-gray-400">
                      @Channelname
                    </span>
                    <span className="text-sm dark:text-gray-400">
                      318M subscribers
                    </span>
                    <span className="text-sm dark:text-gray-400">
                      80 videos
                    </span>
                  </div>

                  <div className="mt-1.5">
                    <button className="px-6 py-1.5 border border-gray-400 hover:dark:bg-white hover:dark:text-gray-900  rounded-lg transition-colors duration-75 ">
                      Subscribe
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* channel tabs */}
            <div className="sticky top-0">
              <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
                <ul className="flex flex-wrap -mb-px">
                  <li className="me-2">
                    <a
                      href="#"
                      className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                    >
                     Home
                    </a>
                  </li>
                  <li className="me-2">
                    <a
                      href="#"
                      className="inline-block p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500"
                      aria-current="page"
                    >
                     Videos
                    </a>
                  </li>
                  <li className="me-2">
                    <a
                      href="#"
                      className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                    >
                     Shorts
                    </a>
                  </li>
                  <li className="me-2">
                    <a
                      href="#"
                      className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                    >
                     Playlist
                    </a>
                  </li>
                  <li className="me-2 flex items-center">
                     <CiSearch className="h-5 w-5"/>
                  </li>

                </ul>
              </div>
            </div>
            {/* channel tabs */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Channel;
