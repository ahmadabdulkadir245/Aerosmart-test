import {RiUser3Line} from 'react-icons/ri'
import {BiSearchAlt} from 'react-icons/bi'
import {HiOutlineMenuAlt3} from 'react-icons/hi'
import {
  AiOutlineSearch,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import Link from 'next/link';

const items = []
const Navigation = () => (
  
  <nav className="flex items-center justify-between flex-wrap bg-gray-50 py-4 shadow-lg px-[10px] lg:px-[50px]">
  
    {/* Logo */}
    <div className="flex items-center space-x-2">
      <div className="">
      <HiOutlineMenuAlt3 className='w-6 h-6 text-gray-500 lg:hidden '/>
      </div>
      <div className="text-xl lg:text-2xl font-changa text-gray-500">
      AERO<span className='text-yellow-400'>SMART</span>
      </div>
      
      </div>

     {/* search for Desktop */}
              <div className='hidden sm:flex items-center  h-10 rounded-md max-w-3xl flex-grow cursor-pointer bg-yellow-400  hover:bg-[#f7b32b]'>
                <input
                  type='text'
                  className='py-5 px-4 h-full w-6 flex-grow  flex-shrink rounded-l-sm focus:outline-none bg-gray-300 font-play text-gray-700'
                  placeholder='Search on Aerosmart'
                  
                />
                <BiSearchAlt className='h-12 w-12 p-3  text-gray-500 transition duration-200 ease-in' />
                
              </div>

                 {/*  Right*/}
                 <div className='flex text-gray-500 text-xs  space-x-5 lg:space-x-12  whitespace-nowrap px-4 lg:px-'>
                <div className='flex space-x space-x-6 items-center'>
                  <BiSearchAlt
                    className={`
                md:hidden w-6 h-6 lg:w-7 lg:h-7`}
                  />
                  <Link href='/login'>
                     <div className=' '>
                        <RiUser3Line className='w-6 h-6 lg:w-7 lg:h-5' />
                     <p className='hidden sm:inline font-semibold md:text-xs font-titilliumWeb'>
                    Sign In
                  </p>
                  </div>
                  </Link>
                </div>

                <div
                  onClick={() => router.push("/basket")}
                  className='link flex items-center relative '
                >
                  <span className='absolute -top-1 -right-1 md:right-10 h-4 text-xs w-4 bg-yellow-400 rounded-full  text-center font-semibold items-center font-titilliumWeb'>
                    {items.length}
                  </span>
                  <AiOutlineShoppingCart className='w-6 h-6 lg:w-7 lg:h-7' />
                  <p className='hidden sm:inline font-semibold md:text-sm font-titilliumWeb'>
                    Cart
                  </p>
                </div>
              </div>
  </nav>
);

export default Navigation;
