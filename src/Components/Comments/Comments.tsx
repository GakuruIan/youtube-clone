import { useState } from "react";

// image
import pic from "../../assets/space2.jpg";

import { IoMdMore } from "react-icons/io";
import { FiThumbsUp, FiThumbsDown } from "react-icons/fi";

const Comments = () => {
  const [isReplying, setIsReplying] = useState<boolean>(false);

  return (
    <div>
      <div className="pb-8 mt-4">
        <div className="mb-6">
          <h4 className="text-base font-semibold mb-4">Comments</h4>
          <form action="" className="">
            <div className="flex items-center gap-x-2">
              <div className="">
                <img
                  className="w-8 h-8 rounded-full"
                  src={pic}
                  alt="Rounded avatar"
                ></img>
              </div>
              <textarea
                maxLength={500}
                rows={1}
                className="w-full outline-0 bg-transparent border-b border-b-dark-20 px-2 py-2"
                placeholder="Add a comment"
                required
              ></textarea>
            </div>

            <div className="flex items-center gap-x-2 mt-4 w-full justify-end">
              <button
                type="button"
                className="py-1.5 px-4 rounded-md bg-transparent border dark:border-dark-20 border-gray-600"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="py-1.5 px-4 rounded-md dark:bg-white dark:text-gray-800 bg-dark-300 text-gray-300"
              >
                Comment
              </button>
            </div>
          </form>
        </div>

        {/* comment */}
        <div className="mb-4">
          <div className="">
            <div className="flex items-start w-full py-1">
              <div className="flex items-start gap-x-2">
                {/* user avatar */}
                <img
                  className="w-8 h-8 rounded-full"
                  src={pic}
                  alt="Rounded avatar"
                ></img>

                <div className="block">
                  {/* username */}
                  <div className="flex items-center gap-x-2">
                    <h6 className="text-base font-normal font-saira">
                      @username
                    </h6>
                    <span className="text-sm dark:text-gray-400 text-gray-500">
                      timeline
                    </span>
                  </div>

                  {/* user comment */}
                  <p className="text-sm mt-0.5">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Placeat consectetur sit, eaque reiciendis aut dolor
                    obcaecati hic tempore aliquid provident.
                  </p>
                  {/* comment like,dislike and reply  */}
                  <div className="flex items-center mt-3 gap-x-4">
                    {/* like comment */}
                    <div className="flex items-center gap-x-2 ">
                      <button className="outline-0 p-2 rounded-full hover:bg-light-20 hover:dark:bg-dark-20 transition-colors duration-75">
                        <FiThumbsUp className="h-5 w-5" />
                      </button>
                      <span className="text-base dark:text-gray-300 text-gray-500">
                        100k
                      </span>
                    </div>
                    {/* like comment */}

                    {/* dislike comment */}
                    <div className="flex items-center gap-x-2 ">
                      <button className="outline-0 p-2 rounded-full hover:bg-light-20 hover:dark:bg-dark-20 transition-colors duration-75">
                        <FiThumbsDown className="h-5 w-5" />
                      </button>
                      <span className="text-base dark:text-gray-300 text-gray-500">
                        3k
                      </span>
                    </div>
                    {/* dislike comment */}

                    {/* reply */}
                    <div className="">
                      <button className="outline-0 px-4 py-1.5 rounded-full hover:bg-light-20 hover:dark:bg-dark-20 transition-colors duration-75">
                        Reply
                      </button>
                    </div>
                  </div>

                {/* show reply form if user is replying */}
                  {isReplying && (
                    <div className="">
                      <form action="" className="mt-2">
                        <div className="flex items-center gap-x-2">
                          <div className="">
                            <img
                              className="w-8 h-8 rounded-full"
                              src={pic}
                              alt="Rounded avatar"
                            ></img>
                          </div>
                          <textarea
                            maxLength={500}
                            rows={1}
                            className="w-full outline-0 bg-transparent border-b border-b-dark-20 px-2 py-2"
                            placeholder="Add a comment"
                            required
                          ></textarea>
                        </div>

                        <div className="flex items-center gap-x-2 mt-4 w-full justify-end">
                          <button
                            type="button"
                            className="py-1.5 px-4 rounded-md bg-transparent border dark:border-dark-20 border-gray-600"
                          >
                            Cancel
                          </button>
                          <button
                            type="submit"
                            className="py-1.5 px-4 rounded-md dark:bg-white dark:text-gray-800 bg-dark-300 text-gray-300"
                          >
                            Comment
                          </button>
                        </div>
                      </form>
                    </div>
                  )}
                  {/* show reply form if user is replying */}

                  {/* comment like,dislike and reply  */}
                </div>
              </div>

              <div className="justify-end">
                <IoMdMore className="h-5 w-5" />
              </div>
            </div>
          </div>
        </div>
        {/* comment */}
         {/* comment */}
         <div className="mb-4">
          <div className="">
            <div className="flex items-start w-full py-1">
              <div className="flex items-start gap-x-2">
                {/* user avatar */}
                <img
                  className="w-8 h-8 rounded-full"
                  src={pic}
                  alt="Rounded avatar"
                ></img>

                <div className="block">
                  {/* username */}
                  <div className="flex items-center gap-x-2">
                    <h6 className="text-base font-normal font-saira">
                      @username
                    </h6>
                    <span className="text-sm dark:text-gray-400 text-gray-500">
                      timeline
                    </span>
                  </div>

                  {/* user comment */}
                  <p className="text-sm mt-0.5">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Placeat consectetur sit, eaque reiciendis aut dolor
                    obcaecati hic tempore aliquid provident.
                  </p>
                  {/* comment like,dislike and reply  */}
                  <div className="flex items-center mt-3 gap-x-4">
                    {/* like comment */}
                    <div className="flex items-center gap-x-2 ">
                      <button className="outline-0 p-2 rounded-full hover:bg-light-20 hover:dark:bg-dark-20 transition-colors duration-75">
                        <FiThumbsUp className="h-5 w-5" />
                      </button>
                      <span className="text-base dark:text-gray-300 text-gray-500">
                        100k
                      </span>
                    </div>
                    {/* like comment */}

                    {/* dislike comment */}
                    <div className="flex items-center gap-x-2 ">
                      <button className="outline-0 p-2 rounded-full hover:bg-light-20 hover:dark:bg-dark-20 transition-colors duration-75">
                        <FiThumbsDown className="h-5 w-5" />
                      </button>
                      <span className="text-base dark:text-gray-300 text-gray-500">
                        3k
                      </span>
                    </div>
                    {/* dislike comment */}

                    {/* reply */}
                    <div className="">
                      <button className="outline-0 px-4 py-1.5 rounded-full hover:bg-light-20 hover:dark:bg-dark-20 transition-colors duration-75">
                        Reply
                      </button>
                    </div>
                  </div>

                {/* show reply form if user is replying */}
                  {isReplying && (
                    <div className="">
                      <form action="" className="mt-2">
                        <div className="flex items-center gap-x-2">
                          <div className="">
                            <img
                              className="w-8 h-8 rounded-full"
                              src={pic}
                              alt="Rounded avatar"
                            ></img>
                          </div>
                          <textarea
                            maxLength={500}
                            rows={1}
                            className="w-full outline-0 bg-transparent border-b border-b-dark-20 px-2 py-2"
                            placeholder="Add a comment"
                            required
                          ></textarea>
                        </div>

                        <div className="flex items-center gap-x-2 mt-4 w-full justify-end">
                          <button
                            type="button"
                            className="py-1.5 px-4 rounded-md bg-transparent border dark:border-dark-20 border-gray-600"
                          >
                            Cancel
                          </button>
                          <button
                            type="submit"
                            className="py-1.5 px-4 rounded-md dark:bg-white dark:text-gray-800 bg-dark-300 text-gray-300"
                          >
                            Comment
                          </button>
                        </div>
                      </form>
                    </div>
                  )}
                  {/* show reply form if user is replying */}

                  {/* comment like,dislike and reply  */}
                </div>
              </div>

              <div className="justify-end">
                <IoMdMore className="h-5 w-5" />
              </div>
            </div>
          </div>
        </div>
        {/* comment */}
         {/* comment */}
         <div className="mb-4">
          <div className="">
            <div className="flex items-start w-full py-1">
              <div className="flex items-start gap-x-2">
                {/* user avatar */}
                <img
                  className="w-8 h-8 rounded-full"
                  src={pic}
                  alt="Rounded avatar"
                ></img>

                <div className="block">
                  {/* username */}
                  <div className="flex items-center gap-x-2">
                    <h6 className="text-base font-normal font-saira">
                      @username
                    </h6>
                    <span className="text-sm dark:text-gray-400 text-gray-500">
                      timeline
                    </span>
                  </div>

                  {/* user comment */}
                  <p className="text-sm mt-0.5">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Placeat consectetur sit, eaque reiciendis aut dolor
                    obcaecati hic tempore aliquid provident.
                  </p>
                  {/* comment like,dislike and reply  */}
                  <div className="flex items-center mt-3 gap-x-4">
                    {/* like comment */}
                    <div className="flex items-center gap-x-2 ">
                      <button className="outline-0 p-2 rounded-full hover:bg-light-20 hover:dark:bg-dark-20 transition-colors duration-75">
                        <FiThumbsUp className="h-5 w-5" />
                      </button>
                      <span className="text-base dark:text-gray-300 text-gray-500">
                        100k
                      </span>
                    </div>
                    {/* like comment */}

                    {/* dislike comment */}
                    <div className="flex items-center gap-x-2 ">
                      <button className="outline-0 p-2 rounded-full hover:bg-light-20 hover:dark:bg-dark-20 transition-colors duration-75">
                        <FiThumbsDown className="h-5 w-5" />
                      </button>
                      <span className="text-base dark:text-gray-300 text-gray-500">
                        3k
                      </span>
                    </div>
                    {/* dislike comment */}

                    {/* reply */}
                    <div className="">
                      <button className="outline-0 px-4 py-1.5 rounded-full hover:bg-light-20 hover:dark:bg-dark-20 transition-colors duration-75">
                        Reply
                      </button>
                    </div>
                  </div>

                {/* show reply form if user is replying */}
                  {isReplying && (
                    <div className="">
                      <form action="" className="mt-2">
                        <div className="flex items-center gap-x-2">
                          <div className="">
                            <img
                              className="w-8 h-8 rounded-full"
                              src={pic}
                              alt="Rounded avatar"
                            ></img>
                          </div>
                          <textarea
                            maxLength={500}
                            rows={1}
                            className="w-full outline-0 bg-transparent border-b border-b-dark-20 px-2 py-2"
                            placeholder="Add a comment"
                            required
                          ></textarea>
                        </div>

                        <div className="flex items-center gap-x-2 mt-4 w-full justify-end">
                          <button
                            type="button"
                            className="py-1.5 px-4 rounded-md bg-transparent border dark:border-dark-20 border-gray-600"
                          >
                            Cancel
                          </button>
                          <button
                            type="submit"
                            className="py-1.5 px-4 rounded-md dark:bg-white dark:text-gray-800 bg-dark-300 text-gray-300"
                          >
                            Comment
                          </button>
                        </div>
                      </form>
                    </div>
                  )}
                  {/* show reply form if user is replying */}

                  {/* comment like,dislike and reply  */}
                </div>
              </div>

              <div className="justify-end">
                <IoMdMore className="h-5 w-5" />
              </div>
            </div>
          </div>
        </div>
        {/* comment */}
      </div>
    </div>
  );
};

export default Comments;
