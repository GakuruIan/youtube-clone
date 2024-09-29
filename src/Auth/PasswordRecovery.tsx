
// components
import Button from "../Components/Button/Button";

// router
import { Link } from "react-router-dom";

const PasswordRecovery = () => {
  return (
    <div className="grid place-items-center content-center md:place-content-center h-screen">
      <div className="px-4  py-6  w-full">
        <div className="w-full md:w-96 ">
          <div className="">
            {/* header */}
            <div className="mb-4">
              <h6 className="text-2xl md:text-4xl font-semi-bold mb-1">
                Password Recovery
              </h6>
              <p className="text-sm md:text-base text-gray-400">
                Let's get you back into your account.
              </p>
            </div>
            {/* header */}

            <div className="my-6 md:my-8">
              <form action="">

                <div className="mb-4">
                  <label className="text-base  font-normal dark:text-white">
                    Enter your Email
                  </label>
                  <input
                    type="email"
                    className="w-full outline-0 px-2 py-3 dark:bg-dark-50 dark:text-white bg-light-50 mt-2"
                    placeholder="John@gmail.com"
                    required
                  />
                </div>

                <Button type="submit" text="Send Recovery Link" style="mt-6" />
              </form>
            </div>
          </div>
        </div>
      </div>
      <p className="text-center">Remembered password ? <Link to='/login' className="ml-1 text-indigo-300">Sign in</Link></p>
    </div>
  );
};

export default PasswordRecovery;
