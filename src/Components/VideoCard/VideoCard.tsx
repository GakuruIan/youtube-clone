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
            <img src={thumbnail} alt="" className='h-64 md:h-48 rounded-md object-cover'/>
            <div className="flex items-start gap-x-2">
                {/* channel photo */}
                  <img className="w-10 h-10 rounded-full" src={thumbnail} alt="Rounded avatar"></img>
                {/* channel photo */}
               
                <div className="">
                   <h4 className="text-base font-medium">{title}</h4>
                   <p className="text-sm dark:text-gray-300 ">{channelName}</p>
                   <div className="flex items-center gap-x-2">
                      <p className="text-sm dark:text-gray-400">{views} views</p>
                      <p className="text-sm dark:text-gray-400">{postedAt} day ago</p>
                   </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default VideoCard