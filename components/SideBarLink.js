import Link from "next/link"
import {  useRecoilState } from "recoil"
import { navState } from "../atoms/navHandler"

function SideBarLink({Icon, title, path}) {
  const [openSideBar, setOpenSideBar] = useRecoilState(navState);
  const closeNav = () => {
    setOpenSideBar(false)
  }
  return (
   <Link href={`/${path}`} onClick={closeNav}>
             <div className='text-lg'>
        <div className=' flex items-center space-x-3'>
        <Icon className='w-6 h-6 ' />
            <p className='py-2 '>{title}</p>
        </div>
        <hr className='h-[0px] w-full mt-4 mb-2 bg-gray-500 '/>
        </div>
   </Link>
  )
}

export default SideBarLink