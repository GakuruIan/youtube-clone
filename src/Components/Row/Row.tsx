import React,{ useRef } from "react";

// slider
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// icons
import { GoChevronLeft, GoChevronRight } from "react-icons/go";
import { IoMdMore } from "react-icons/io";

// image
import pic from "../../assets/space2.jpg";

interface Props {
 title:string,
 url:string,
 icon?:React.ReactElement
}

const Row:React.FC<Props> = ({title,icon}) => {
  const slider = useRef<Slider>(null);

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    arrows: false,
    swipeToSlide: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const cards = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <div>
      <div className="mb-4 relative">
        <div className="px-0 md:px-2">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-x-2">
              <button
                onClick={() => slider.current?.slickPrev()}
                className="px-2 py-2 rounded-full dark:bg-dark-50 hover:bg-light-20 hover:dark:bg-dark-20 bg-light-50"
              >
                <GoChevronLeft className="h-5 w-5" />
              </button>
              <div className="flex items-center gap-x-1">
                  {icon &&  React.cloneElement(icon) }
                 <h6 className="text-sm font-poppins  font-medium">{title}</h6>
              </div>
            </div>

            <button
              onClick={() => slider.current?.slickNext()}
              className="px-2 py-2 rounded-full dark:bg-dark-50 hover:bg-light-20 hover:dark:bg-dark-20 bg-light-50"
            >
              <GoChevronRight className="h-5 w-5" />
            </button>
          </div>

          <div className="slick-container w-full md:w-[calc(100vw-150px)]">
            {/* slider */}
            <Slider ref={slider} {...settings} className=" pb-2 px-0 ">
              {cards.map((_, index) => {
                return (
                  <div className="max-w-sm px-1" key={index}>
                    <div className="w-full overflow-hidden ">
                      <img
                        src={pic}
                        alt=""
                        className="h-40 w-full rounded-md object-cover mb-1"
                      />
                      <div className="flex items-center justify-between my-0.5">
                        <h6 className="text-sm font-poppins  font-medium">Video title</h6>
                        <IoMdMore className="h-5 w-5" />
                      </div>
                      <div className="flex items-center gap-x-2">
                        <p className="text-sm  text-gray-500 dark:text-gray-400">33k views</p>
                        <p className="text-sm  text-gray-500 dark:text-gray-400">1 day ago</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </Slider>
            {/* Slider */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Row;
