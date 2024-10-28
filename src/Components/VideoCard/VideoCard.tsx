import React from 'react'


interface Props {
    thumbnail:string,
    title:string,
    // channelPhoto:string,
    channelName:string,
    views:number,
    postedAt:number,
}

const VideoCard:React.FC<Props> = ({thumbnail,title,channelName,views,postedAt}) => {
  return (
    <div>
        <div className="flex flex-col gap-y-0.5">
            <img src={thumbnail} alt="" className='h-56 md:h-48 rounded-lg object-cover'/>
            {/* <div className="flex items-center justify-between gap-x-3 py-1 px-1">
                      <p className="text-xs text-gray-400 dark:text-[#616161]">{views} views</p>
                      <p className="text-xs text-gray-400 dark:text-[#616161]">{postedAt} day ago</p>
                   </div> */}
            <div className="flex items-center gap-x-2 mt-0.5">
                {/* channel photo */}
                  <img className="w-8 h-8 rounded-full" src={thumbnail} alt="Rounded avatar"></img>
                {/* channel photo */}
               
                <div className="">
                   <h4 className="text-sm font-poppins  font-medium">{title}</h4>
                   <p className="text-xs dark:text-gray-400 ">{channelName}</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default VideoCard