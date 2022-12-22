import { TbBusinessplan } from 'react-icons/tb'
import { Link } from 'react-router-dom'
import { connectWallet } from '../services/blockchain'
import { truncate, useGlobalState } from '../store'
import logo from '../assets/gblockchain.png'
const Header = () => {
  const [connectedAccount] = useGlobalState('connectedAccount')

  return (
    <header
      className="flex justify-between items-center mt-4
        py-1 px-2 bg-gray-700 shadow-lg fixed top-0 left-0 right-0 max-w-6xl cr:mx-auto rounded-full mx-2"
    >
      <Link
        to="/"
        className="flex justify-start items-center
      text-xl text-black space-x-1"
      >
        <img src={logo} alt="logo" className='w-10 rounded-full'/>
      </Link>

      <div className="flex space-x-2 justify-center">
        {connectedAccount ? (
          <button
            type="button"
            className="inline-block px-6 py-2.5 bg-orange-600
            text-gray-100 font-medium text-xs leading-tight uppercase
            rounded-full shadow-md hover:bg-orange-700"
          >
            {truncate(connectedAccount, 8, 9, 20)}
          </button>
        ) : (
          <button
            type="button"
            className="inline-block px-6 py-2.5 bg-orange-500
            text-white font-medium text-xs leading-tight uppercase
            rounded-full shadow-md hover:bg-orange-700"
            onClick={connectWallet}
          >
            Connect Wallet
          </button>
        )}
      </div>
    </header>
  )
}

export default Header
