
// image
import pic from '../../assets/space2.jpg'

// components
import VideoCard from '../../Components/VideoCard/VideoCard'

const Subscriptions = () => {
    const videos = [1, 2, 3, 4, 5, 6, 7, 8,9];
  return (
    <div className='px-2'>
       <h1 className="text-2xl mb-4">Subscriptions</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pb-8">
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
  )
}

export default Subscriptions