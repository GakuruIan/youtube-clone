import { useState } from "react";
// router
import { Link } from "react-router-dom";

// components
import Button from "../Components/Button/Button";

// images
import pic from "../assets/pic.jpeg";

function Register() {
  // place-items-center content-center md:place-content-center
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
      <div className="flex items-center justify-center flex-col px-4 py-4  w-full">
        <div className="w-full md:w-[500px]">
          {/* header */}
          <div>
            <div className="">
              <h6 className="text-3xl md:text-4xl font-semi-bold mt-2">
                Create an account
              </h6>
              <p className="text-sm md:text-base text-gray-400">
                Let's get you started
              </p>
            </div>
            {/* header */}

            {/* form */}
            <div className="mb-4 md:my-4">
              <Button
                type="submit"
                text="Sign with Google"
                variant="secondary"
                style="mt-6 w-full"
              />

              <p className="text-gray-500 text-center my-8 dark:text-white">
                OR
              </p>
            </div>
            <div className="">
              {/* <Stepper steps={steps} currentStep={currentStep} /> */}

              <form className="mt-6">
                <div className="">
                  {/* step */}
                  <div className="">
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

                    <div className="flex items-center justify-between mt-6 ">
                      <Button
                        type="button"
                        text="Back"
                        variant="secondary"
                        style="w-28"
                       
                      />
                      <Button
                        type="button"
                        text="Next"
                        variant="primary"
                        style="w-28"
                       
                      />
                    </div>
                  </div>
                  {/* step */}
                </div>
              </form>
            </div>

            {/* form */}
          </div>
        </div>
        <p className=" mt-4">
          Already have an account?{" "}
          <Link
            to="/login"
            className="ml-1 dark:text-indigo-300 text-indigo-500"
          >
            Sign in
          </Link>
        </p>
      </div>

      <div className="w-full h-screen hidden md:block p-4">
        <img
          src={pic}
          alt=""
          className="h-full w-full object-cover rounded-lg"
        />
      </div>
    </div>
  );
}

export default Register;
