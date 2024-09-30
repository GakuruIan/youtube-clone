import ReactPlayer from "react-player/youtube";

// image
import pic from "../../assets/space2.jpg";

// components
import Button from "../../Components/Button/Button";
import Comments from "../../Components/Comments/Comments";

// icons
import { FiThumbsUp, FiThumbsDown } from "react-icons/fi";
import { IoIosShareAlt, IoIosMore } from "react-icons/io";
import { IoDownloadOutline,IoSaveOutline } from "react-icons/io5";
import { MdOutlineReportGmailerrorred } from "react-icons/md";
import Similiar from "../../Components/Similiar/Similiar";

const Video = () => {
  return (
    <div className="pb-8">
      <div className="w-full h-full">
        <ReactPlayer
          url="https://www.youtube.com/watch?v=k4FF7x8vnZg"
          controls={true}
          width="100%"
          height={"550px"}
        />
        <div className="mt-3 px-2">
          <div className="grid grid-cols-1 md:grid-cols-12  gap-x-2">

            <div className="order-1  md:col-span-8">
              <h2 className="text-xl font-semibold">Test title</h2>

              {/* channel info */}
              <div className="mt-2">
                <div className="flex items-center justify-between">
                  <div className="flex w-full  items-center gap-x-8">
                    <div className="flex  items-center gap-x-2">
                      <img
                        className="w-10 h-10 rounded-full"
                        src={pic}
                        alt="Rounded avatar"
                      ></img>

                      <div className="flex w-full flex-col gap-y-0.5">
                        <p className="text-base">Channel name</p>
                        <p className="text-sm dark:text-gray-400">
                          666k subscribers
                        </p>
                      </div>
                    </div>

                    <Button
                      type="submit"
                      text="Subscribe"
                      style="w-36 rounded-full"
                    />
                  </div>

                  {/* !! like and share button */}
                  <div className="flex items-center gap-x-2">
                    <div className="flex items-center  px-4">
                      <button className="px-6 py-2.5 bg-light-50 hover:bg-light-20 rounded-l-full dark:bg-dark-50 hover:dark:bg-dark-20 transition-colors duration-75">
                        <FiThumbsUp className="h-5 w-5" />
                      </button>
                      <button className="px-6 py-2.5 bg-light-50 hover:bg-light-20  rounded-r-full dark:bg-dark-50 hover:dark:bg-dark-20 transition-colors duration-75 border-l border-l-gray-300 dark:border-l-gray-500">
                        <FiThumbsDown className="h-5 w-5" />
                      </button>
                    </div>

                    {/* share button */}
                    <button className="px-4 py-2.5 gap-x-2 bg-light-50 hover:bg-light-20  dark:bg-dark-50 hover:dark:bg-dark-20 rounded-full  flex items-center justify-center">
                      <IoIosShareAlt className="h-5 w-5" />
                      Share
                    </button>
                    {/* share button */}

                    {/* more button */}

                    <div className="relative">
                      <button className="px-4 py-2.5 bg-light-50 hover:bg-light-20  dark:bg-dark-50 hover:dark:bg-dark-20 rounded-full  flex items-center justify-center">
                        <IoIosMore className="h-5 w-5" />
                      </button>

                      {/* more dropdown */}
                      <div
                        id="dropdown"
                        className="z-10 absolute mt-2 hidden  divide-y divide-gray-100 rounded-lg shadow-2xl dark:shadow w-44 dark:bg-dark-50"
                      >
                        <ul
                          className="py-2 text-sm text-gray-700 dark:text-gray-200"
                          aria-labelledby="dropdownDefaultButton"
                        >

                            {/* download button */}
                          <li className="">
                            <button className="flex items-center w-full px-4 py-2.5 gap-x-3 hover:bg-gray-100 dark:hover:bg-dark-20 dark:hover:text-white">
                              <IoDownloadOutline className="h-5 w-5" />
                              Download
                            </button>
                          </li>

                          {/* Save button */}
                          <li className="">
                            <button className="flex items-center w-full px-4 py-2.5 gap-x-3 hover:bg-gray-100 dark:hover:bg-dark-20 dark:hover:text-white">
                              <IoSaveOutline className="h-5 w-5" />
                              Save
                            </button>
                          </li>

                          {/* Report button */}
                          <li className="">
                            <button className="flex items-center w-full px-4 py-2.5 gap-x-3 hover:bg-gray-100 dark:hover:bg-dark-20 dark:hover:text-white">
                              < MdOutlineReportGmailerrorred  className="h-5 w-5" />
                              Report
                            </button>
                          </li>

                        </ul>
                      </div>
                      {/* more dropdown */}
                    </div>

                    {/* more button */}
                  </div>
                </div>
                 {/* channel info */}

                {/* video description */}

                <div className="py-4 px-4 bg-light-50 dark:bg-dark-50  w-full mt-4 rounded-md">
                  <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque sit voluptates fugit ex aliquid quisquam voluptas sapiente fugiat, quibusdam, rem exercitationem, facere nesciunt dolor. Rem blanditiis corporis, quas beatae sit officiis rerum praesentium tempore facere atque optio voluptatum, consequuntur consectetur! Esse quae dolorem quas iure animi, obcaecati labore, ducimus inventore mollitia doloribus molestiae nulla tempora consectetur facere qui! Rem nesciunt, commodi aut mollitia hic voluptatibus dolore laudantium accusantium voluptatem. Aspernatur dolorum voluptas impedit rem enim earum quas cum! Eos nisi facilis officia natus enim dolore, labore, iste quaerat voluptates cumque repudiandae impedit consequatur, assumenda quia eveniet eligendi vel. Placeat, at!</p>
                </div>

                {/* video description */}

                {/* comments section */}
                    <Comments/>
                {/* comments section */}
              </div>

             
            </div>

            {/* get similiar video with similiar tag */}
            <div className="order-2 md:col-span-4">
              <div className="mt-3">
                  <Similiar/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Video;
