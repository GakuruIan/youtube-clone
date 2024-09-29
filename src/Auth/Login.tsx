// router
import { Link } from "react-router-dom";

// components
import Button from "../Components/Button/Button";

const Login = () => {
  return (
    <div className="grid place-items-center content-center md:place-content-center h-screen ">
      <div className="px-4  py-6 w-full">
        <div className=" w-full md:w-96 ">
          {/* header */}
          <div>
            <div className="mb-4">
              <h6 className="text-2xl md:text-4xl font-semi-bold mb-1">Welcome back</h6>
              <p className="text-sm md:text-base text-gray-400">
                Let get you into your account
              </p>
            </div>
            {/* header */}

            {/* form */}
            <div className="my-6 md:my-8">
              <Button
                type="button"
                text="Sign with Google"
                style="border bg-inherit text-gray-900 dark:bg-transparent dark:text-white  hover:bg-dark-200 hover:dark:bg-white hover:text-white hover:dark:text-gray-900 mt-4 border-gray-500"
              />

              <p className="text-gray-500 text-center my-8 dark:text-white">
                OR
              </p>
            </div>
            <div className="">
              <form>
                <div className="mb-8">
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

                <div className="">
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
                
                <div className="mt-1 text-right">
                  <Link
                    to="/forgot-password"
                    className="text-gray-500 text-sm dark:text-white "
                  >
                    Forgot Password?
                  </Link>
                </div>

                <Button type="submit" text="Login" style="mt-6" />
              </form>
            </div>

            {/* form */}
          </div>
        </div>
      </div>

      <p className="text-center">Don't have an account? <Link to='/register' className="ml-1 text-indigo-300">Sign up</Link></p>
    </div>
  );
};

export default Login;
