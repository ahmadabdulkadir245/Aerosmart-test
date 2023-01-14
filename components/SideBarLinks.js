import React from 'react'
import { RiUser3Line } from 'react-icons/ri'
import SideBarLink from './SideBarLink'

function SideBarLinks() {
  return (
    <div className='py-1 px-[10px] text-gray-500 capitalize text-md'>
        <div className='flex justify-between '>
            <button className='rounded-md border-2 border-gray-400 py-2 w-[47%]  '>Login</button>
            <button className='rounded-md border-2 border-gray-400 py-2 w-[47%]  '>Sign Up</button>
        </div>
        <hr className='h-[1px] w-full mt-4 bg-gray-500 '/>

        {/* links Area */}
        <div className=''>
        <div className=' flex items-center space-x-3'>
        <RiUser3Line className='w-6 h-6 ' />
            <p className='py-2 '>my account</p>
        </div>
        </div>
        <SideBarLink Icon={RiUser3Line} title={'orders'}/>
    </div>
  )
}

export default SideBarLinks