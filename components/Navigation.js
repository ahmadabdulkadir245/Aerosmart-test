import {RiUser3Line} from 'react-icons/ri'
import {BiSearchAlt} from 'react-icons/bi'
import {HiOutlineMenuAlt3} from 'react-icons/hi'
import { MdClear } from "react-icons/md";
import SideBar from "./SideBar"
import {  AiOutlineShoppingCart} from "react-icons/ai";
import Link from 'next/link';
import { useState, useEffect } from 'react';
import router from 'next/router'
import { useRecoilState } from 'recoil';
import { navState } from '../atoms/navHandler';

const items = []
function Navigation() {
  const [openSideBar, setOpenSideBar] = useRecoilState(navState);
  // const [openSideBar, setOpenSideBar] = useState(false);
  const sideBarHandler = () => {
      setOpenSideBar(true);
    };
    const closeNavHandler = () => {
      setOpenSideBar(false);
    };
  const [showSearch, setShowSearch] = useState(false);
  const showSearchHandeler = () => {
    setShowSearch(!showSearch);
  };

  return (
<>
{/* sidebar menu */}
<SideBar openSideBar={openSideBar} showSearch={showSearch} />
    {/* navigation */}
  <nav className={`flex items-center justify-between flex-wrap bg-gray-50 py-4 ${showSearch ? '': 'shadow-lg'}  lg:shadow-lg px-[10px] lg:px-[50px]`}>
  
    {/* Logo */}
    <div className="flex items-center space-x-2">
      <div className="">
      {openSideBar ? (
                  <MdClear
                    className='w-6 h-6 text-gray-500 lg:hidden transition-transform duration-500 ease-in-out'
                    onClick={closeNavHandler}
                  />
                ) : (
                  <HiOutlineMenuAlt3 className='w-6 h-6 text-gray-500 lg:hidden' onClick={sideBarHandler}/>
                )}
      
      </div>
      <div className="text-xl lg:text-2xl font-changa text-gray-500" onClick={() => router.push("/")}>
      AERO<span className='text-yellow-400'>SMART</span>
      </div>
      
      </div>

     {/* search for Desktop */}
              <div className='hidden md:flex items-center  h-10 rounded-md max-w-3xl flex-grow cursor-pointer bg-yellow-400  hover:bg-[#f7b32b] transition-all duration-500 linear'>
                <input
                  type='text'
                  className='py-5 px-4 h-full w-6 flex-grow  flex-shrink rounded-l-sm focus:outline-none bg-gray-300 font-play text-gray-700'
                  placeholder='search on Aerosmart'
                  
                />
                <BiSearchAlt className='h-12 w-12 p-3  text-gray-500 transition duration-200 ease-in' />
                
              </div>

                 {/*  Right*/}
                 <div className='flex text-gray-500 text-xs  space-x-5 lg:space-x-12  whitespace-nowrap px-4 lg:px-'>
                <div className='flex space-x space-x-6 items-center'>
                  <BiSearchAlt
                    className={`  md:hidden w-6 h-6 lg:w-7 lg:h-7 ${showSearch ? 'hidden': ''}`}
                onClick={showSearchHandeler}
                  />
                  <Link href='/login'>
                     <div className='hover:text-[#f7b32b] transition-all duration-500 linear'>
                        <RiUser3Line className='w-6 h-6 lg:w-7 lg:h-5 ' />
                     <p className='hidden sm:inline font-semiold md:text-xs font-titilliumWeb link'>
                    Sign In
                  </p>
                  </div>
                  </Link>
                </div>

                <div
                  onClick={() => router.push("/cart")}
                  className='link flex items-center relative '
                >
                  <span className='absolute -top-1 -right-1 md:right-10 h-4 text-xs w-4 bg-yellow-400 rounded-full  text-center font-semibold items-center font-titilliumWeb transition-all duration-500 linear '>
                    {items.length}
                  </span>
                  <AiOutlineShoppingCart className='w-6 h-6 lg:w-7 lg:h-7' />
                  <p className='hidden sm:inline font-semibold md:text-sm font-titilliumWeb'>
                    Cart
                  </p>
                </div>
              </div>


  </nav>
              {/* mobile search bar */}
                 {/* search for mobile */}
            {showSearch ? (
              <div className='md:hidden bg-gray-50 pt-2 pb-4 px-[10px] -mt-3 shadow-lg'>
                <div className='flex items-center m-auto h-12 rounded-md flex-grow cursor-pointer bg-yellow-400  hover:bg-yellow-400'>
                  <input
                    type='text'
                    className='px-2 py-[24px] h-full w-6 flex-grow  flex-shrink rounded-l-md focus:outline-none bg-gray-300 font-play text-gray-700'
                    placeholder='search on Aerosmart'
                    // value={searchWord}
                    // onChange={searchHandler}
                  />
                  {/* {searchWord.length > 0 ? (
                    <MdClear
                      className='w-12 h-6 text-white transition duration-200 ease-in'
                      onClick={clearHandler}
                    />
                  ) : ( */}
                    <BiSearchAlt className='h-12 w-12 p-3  text-gray-500 transition duration-200 ease-in' />
                  {/* )} */}
                </div>
              </div>
            ) : (
              ""
            )}
</>
  )
  };

export default Navigation;
