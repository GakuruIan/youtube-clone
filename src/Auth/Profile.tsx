import SideBar from "../Components/Sidebar/SideBar";

const Profile = () => {
  return (
    <div className="flex">
      <SideBar />
      <div className="w-full md:ml-[5.06rem] px-4">
        <h1 className="text-base mb-4">Profile</h1>
        <form action="">
          {/* username */}
          <div className="mb-6">
            <label className="text-base mb-1">Username</label>
            <div className="mt-2">
              <input
                type="text"
                name="title"
                placeholder="JohnDoe"
                id=""
                className="w-full max-w-3xl outline-0 px-2 py-3 placeholder:text-sm rounded-md dark:bg-dark-50 dark:text-white bg-light-50"
              />
            </div>
          </div>
          {/* username */}

          {/* email */}
          <div className="mb-6">
            <label className="text-base mb-1">Email</label>
            <div className="mt-2">
              <input
                type="Email"
                name="title"
                placeholder="Johndoe@gmail.com"
                id=""
                className="w-full max-w-3xl outline-0 px-2 py-3 placeholder:text-sm rounded-md dark:bg-dark-50 dark:text-white bg-light-50"
              />
            </div>
          </div>
          {/* email */}

          {/* thumbnail picture */}
          <div className="mb-6">
            <h6 className="text-base mb-1">Profile Image</h6>
            <p className="text-sm text-gray-400">Image other users will see</p>
            {/* dropzone */}
            <div className="flex items-center justify-center w-full max-w-3xl mt-2">
              <label
                htmlFor="dropzone-file"
                className="flex flex-col md:px-0 px-2 items-center justify-center w-full  h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-light-50  dark:bg-dark-50 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-dark-20"
              >
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <svg
                    className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 16"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                    />
                  </svg>
                  <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                    <span className="font-semibold">Click to upload</span> or
                    drag and drop
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    It’s recommended to use a picture that’s at least 98 x 98
                    pixels and 4MB or less.
                  </p>
                </div>
                <input id="dropzone-file" type="file" className="hidden" />
              </label>
            </div>
            {/* dropzone */}
          </div>
          {/* thumbnail picture */}

          <div className="flex items-center gap-x-2 justify-end max-w-3xl">
            <button
              type="button"
              className="px-4 py-1.5 border border-gray-500 dark:border-dark-50 rounded-md"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-1.5 bg-dark-50 text-white dark:bg-white font-medium dark:text-dark-50 rounded-md"
            >
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Profile;
