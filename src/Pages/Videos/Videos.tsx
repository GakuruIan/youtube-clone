// components
import SideBar from "../../Components/Sidebar/SideBar";
import Tabs from "../../Components/Tabs/Tabs";
import VideoCard from "../../Components/VideoCard/VideoCard";
import Row from "../../Components/Row/Row";

// image
import pic2 from '../../assets/space2.jpg'

// icons
import { FaFire } from "react-icons/fa";

const Videos = () => {
  const videos = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <div className="flex  ">
      
      <div className="w-full ">
        <Tabs />

        <Row title="Trending" url="/" icon={<FaFire className="text-[#FF0033]"/>}/>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-2 gap-y-6 px-4 pb-6">
          {videos.map((_, index) => {
            return (
              <VideoCard
                thumbnail={pic2}
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
