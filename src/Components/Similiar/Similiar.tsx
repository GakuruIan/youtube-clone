
// image
import pic from '../../assets/space2.jpg'

const Similiar = () => {
  return (
    <div>
        <div className="mt-3 px-2">
            <div className="mb-2">
                <div className="grid grid-cols-2 gap-x-1">
                     {/* thumbnail */}
                         <img src={pic} alt="" className='h-28 rounded-lg w-full object-cover' />
                     {/* thumbnail */}

                     {/* video details */}
                        <div className="flex flex-col gap-y-0.5">
                            {/* title */}
                            <h6 className="text-base font-medium">Video Title</h6>

                            {/* channel name */}
                            <span className="text-sm text-gray-400 dark:text-gray-400">Channel name</span>

                            {/* videos details */}
                            <div className="flex items-center gap-x-4 ">
                              <span className="text-sm text-gray-400 dark:text-gray-400">124k views</span>
                              <span className="text-sm text-gray-400 dark:text-gray-400">12k likes</span>
                            </div>

                            {/* video tag */}
                              <span className="text-sm px-2 py-1 w-14 text-center rounded-md bg-light-50 dark:bg-dark-50 text-gray-400 dark:text-gray-400">New</span>
                            {/* video tag */}
                        </div>
                     {/* video details */}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Similiar