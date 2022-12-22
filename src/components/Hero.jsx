import { setGlobalState, useGlobalState } from '../store'
const Hero = () => {
  const [stats] = useGlobalState('stats')

  return (
    <div className="text-center bg-gray-800 pt-24 pb-14 px-6 max-w-4xl mx-auto text-gray-50">
      <div className="flex justify-center items-center space-x-2">
        <button
          type="button"
          className="inline-block px-6 py-2.5 bg-orange-600
        text-white font-medium text-xs leading-tight uppercase
        rounded-full shadow-md hover:bg-orange-700"
          onClick={() => setGlobalState('createModal', 'scale-100')}
        >
          Add Project
        </button>

        <button
          type="button"
          className="inline-block px-6 py-2.5 border border-orange-600
        font-medium text-xs leading-tight uppercase text-orange-600
        rounded-full shadow-md bg-transparent hover:bg-orange-700
        hover:text-white"
        >
          Back Projects
        </button>
      </div>

      <div className="flex justify-center items-center mt-10 text-gray-300">
        <div
          className="flex flex-col justify-center items-center
          h-20 border shadow-md w-full rounded-tl-full rounded-bl-full "
        >
          <span
            className="text-lg font-bold text-orange-500
            leading-5"
          >
            {stats?.totalProjects || 0}
          </span>
          <span>Projects</span>
        </div>
        <div
          className="flex flex-col justify-center items-center
          h-20 border shadow-md w-full"
        >
          <span
            className="text-lg font-bold text-orange-500
            leading-5"
          >
            {stats?.totalBacking || 0}
          </span>
          <span>Backings</span>
        </div>
        <div
          className="flex flex-col justify-center items-center
          h-20 border shadow-md w-full rounded-tr-full rounded-br-full"
        >
          <span
            className="text-lg font-bold text-orange-500
            leading-5"
          >
            {stats?.totalDonations || 0} ETH
          </span>
          <span>Donated</span>
        </div>
      </div>
    </div>
  )
}

export default Hero
