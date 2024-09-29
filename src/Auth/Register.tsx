

// router
import { Link } from "react-router-dom"

// components
import Button from "../Components/Button/Button"


function Register() {
  return (
    <div className="grid place-items-center content-center md:place-content-center h-screen ">
    <div className="px-4  py-6 w-full">
      <div className="w-full md:w-96">
        {/* header */}
        <div>
          <div className="mb-4">
            <h6 className="text-2xl md:text-4xl font-semi-bold mb-1">Create an account</h6>
            <p className="text-sm md:text-base text-gray-400">
              Let's get you started
            </p>
          </div>
          {/* header */}

          {/* form */}
          <div className="my-6 md:my-8">
            <Button
              type="button"
              text="Sign with Google"
              style="border  text-gray-800 dark:bg-inherit dark:text-white hover:bg-dark-200 hover:dark:bg-white hover:text-white hover:dark:text-gray-900 mt-4 border-gray-500"
            />

            <p className="text-gray-500 text-center my-8 dark:text-white">
              OR
            </p>
          </div>
          <div className="">
            <form>

             <div className="mb-4">
                <label className="text-base  font-normal dark:text-white">
                  Fullname
                </label>
                <input
                  type="text"
                  className="w-full outline-0 px-2 py-3 dark:bg-dark-50 dark:text-white bg-light-50 mt-2"
                  placeholder="John@gmail.com"
                  required
                />
              </div>

              <div className="mb-4">
                <label className="text-base  font-normal dark:text-white">
                 Username
                </label>
                <input
                  type="text"
                  className="w-full outline-0 px-2 py-3 dark:bg-dark-50 dark:text-white bg-light-50 mt-2"
                  placeholder="John@gmail.com"
                  required
                />
              </div>

              <div className="mb-4">
                <label className="text-base  font-normal dark:text-white">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full outline-0 px-2 py-3 dark:bg-dark-50 dark:text-white bg-light-50 mt-2"
                  placeholder="John@gmail.com"
                  required
                />
              </div>

              <div className="mb-4">
                <label className="text-sm  font-normal  dark:text-white">
                  Password
                </label>
                <input
                  type="password"
                  className="w-full outline-0 px-2 py-3 dark:bg-dark-50 dark:text-white bg-light-50 mt-2"
                  placeholder="password"
                  required
                />
              </div>

              <div className="">
                <label className="text-sm  font-normal  dark:text-white">
                 Confirm Password
                </label>
                <input
                  type="password"
                  className="w-full outline-0 px-2 py-3 dark:bg-dark-50 dark:text-white bg-light-50 mt-2"
                  placeholder="password"
                  required
                />
              </div>

              <Button type="submit" text="Register" style="mt-6" />
            </form>
          </div>

          {/* form */}
        </div>
      </div>
    </div>
    <p className="text-center">Already have an account? <Link to='/login' className="ml-1 text-indigo-300">Sign in</Link></p>
  </div>
  )
}

export default Register