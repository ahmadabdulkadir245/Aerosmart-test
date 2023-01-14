
function SideBarLink({Icon, title}) {
  return (
            <div className='text-lg'>
        <div className=' flex items-center space-x-3'>
        <Icon className='w-6 h-6 ' />
            <p className='py-2 '>{title}</p>
        </div>
        <hr className='h-[0px] w-full mt-4 mb-2 bg-gray-500 '/>

        </div>
  )
}

export default SideBarLink