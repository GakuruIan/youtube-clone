import React,{ useRef } from "react";

// slider
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// icons
import { GoChevronLeft, GoChevronRight } from "react-icons/go";


// image
import pic from "../../assets/space2.jpg";

interface Props {
    title?:string,
}

const LinkedChannels:React.FC<Props> = ({title}) => {
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
    const cards = [1, 2, 3, 4];

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
              <h6 className="text-xl font-medium">{title}</h6>
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
                    <div className="flex items-center justify-center flex-col gap-y-2 w-full overflow-hidden ">
                      <img
                        src={pic}
                        alt=""
                        className="h-44 w-44 rounded-full object-cover"
                      />
                      <div className="flex items-center justify-between my-0.5">
                        <h6 className="text-base  text-gray-900 dark:text-gray-200 font-medium">Channel name</h6>
                      </div>
                      <div className="flex items-center gap-x-2">
                        {/* dark:bg-dark-50 bg-white-50 */}
                        <button className="px-6 py-1.5 rounded-md bg-light-50 hover:bg-light-20 dark:bg-dark-50 hover:dark:bg-dark-20 font-normal">
                          Subscribe
                        </button>
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
  )
}

export default LinkedChannels