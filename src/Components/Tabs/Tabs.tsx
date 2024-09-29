
const tags = [1,2,3,4,5,6]

const Tabs = () => {
  return (
    <div className="flex px-2 w-full border-t border-light-50 dark:border-dark-50  bg-white dark:bg-dark-300 py-2.5 items-center mt-1 5 mb-2">
    {
      tags.map((_,index)=>{
        return <div key={index} className="px-4 py-1.5 rounded-md  mx-2 flex items-center justify-center bg-light-50 dark:bg-dark-50">
           <p className="text-base">tags</p>
        </div>
      })
    }
</div>
  )
}

export default Tabs