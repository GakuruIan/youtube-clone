import ReactPlayer from "react-player/youtube";

// image
import pic from "../../assets/space2.jpg";

// components
import Button from "../../Components/Button/Button";

const Video = () => {
  return (
    <div className="">
      <div className="w-full h-full">
        <ReactPlayer
          url="https://www.youtube.com/watch?v=k4FF7x8vnZg"
          controls={true}
          width="100%"
          height={"550px"}
        />
        <div className="mt-3 px-2">
          <div className="grid md:grid-cols-12  gap-x-2">
            <div className="col-span-8">
              <h2 className="text-xl font-semibold">Test title</h2>

              {/* channel info */}
              <div className="mt-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-x-8">
                    <div className="flex items-center gap-x-2">
                      <img
                        className="w-10 h-10 rounded-full"
                        src={pic}
                        alt="Rounded avatar"
                      ></img>

                      <div className="flex flex-col gap-y-0.5">
                        <p className="text-base">Channel name</p>
                        <p className="text-sm dark:text-gray-500">
                          666k subscribers
                        </p>
                      </div>
                    </div>

                    <Button
                      type="submit"
                      text="Subscribe"
                      style="w-44 rounded-full"
                    />
                  </div>

{/* !! like and share button */}
                  <div className="flex items-center gap-x-2">
                    <div className="dark:bg-dark-100/20 px-4 py-2">kjkjfg</div>
                  </div>
                </div>
              </div>
              {/* channel info */}
            </div>

            <div className="col-span-4">hello</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Video;
