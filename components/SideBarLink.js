
function SideBarLink({Icon, title}) {
  return (
            <div className='text-lg'>
        <div className=' flex items-center space-x-3'>
        <Icon className='w-6 h-6 ' />
            <p className='py-5 '>{title}</p>
        </div>
        </div>
  )
}

export default SideBarLink