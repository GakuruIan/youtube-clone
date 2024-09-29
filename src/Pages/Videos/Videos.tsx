// components
import SideBar from "../../Components/Sidebar/SideBar";
import Tabs from "../../Components/Tabs/Tabs";
import VideoCard from "../../Components/VideoCard/VideoCard";

// image
import pic from "../../assets/space3.jpg";

const Videos = () => {
  const videos = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <div className="flex  ">
      <SideBar />
      <div className="w-full md:ml-[5.06rem]">
        <Tabs />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-4 gap-y-6 px-4 pb-6">
          {videos.map((_, index) => {
            return (
              <VideoCard
                thumbnail={pic}
                title="Test title "
                channelName="Channel name"
                views={20}
                postedAt={1}
                key={index}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Videos;
