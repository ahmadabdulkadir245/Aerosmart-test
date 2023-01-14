import React from 'react'
import { AiOutlineShop } from 'react-icons/ai'
import { RiUser3Line } from 'react-icons/ri'
import { CiShoppingCart } from 'react-icons/ci'
import { GiConcreteBag, GiOpeningShell, GiWoodBeam } from 'react-icons/gi'
import SideBarLink from './SideBarLink'
import { MdConstruction } from 'react-icons/md'
import { BsBricks } from 'react-icons/bs'

function SideBarLinks() {
  return (
    <div className='px-[10px] py-1 pb-8 text-gray-500 capitalize text-md h-full overflow-y-scroll'>
        <div className='flex justify-between '>
            <button className='rounded-md border-2 border-gray-400 py-2 w-[47%]  '>Login</button>
            <button className='rounded-md border-2 border-gray-400 py-2 w-[47%]  '>Sign Up</button>
        </div>
        <hr className='h-[1px] w-full mt-4 mb-2 bg-gray-500 '/>


        <SideBarLink Icon={RiUser3Line} title={'my account'}/>
        <SideBarLink Icon={AiOutlineShop} title={'orders'}/>
        <SideBarLink Icon={CiShoppingCart} title={'cart'}/>
        <SideBarLink Icon={GiWoodBeam} title={'woods'}/>
        <SideBarLink Icon={MdConstruction} title={'metals'}/>
        <SideBarLink Icon={GiConcreteBag} title={'cement'}/>
        <SideBarLink Icon={GiOpeningShell} title={'stones'}/>
        <SideBarLink Icon={BsBricks} title={'bricks'}/>

    </div>
  )
}

export default SideBarLinks