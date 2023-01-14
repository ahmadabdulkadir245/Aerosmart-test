import { AiOutlineHeart, AiOutlineInbox, AiOutlineShop } from "react-icons/ai";
import SidebarListItem from "./SidbebarListItem";
import SideBarLinks from "./SideBarLinks";

function SideBar({ openSideBar, showSearch }) {
  const items = 0;
  // Logout func
  const logOut = () => {
    sessionStorage.removeItem("Token");
    router.push("/login");
  };
  return (
    <div className='text-[#0e1318]  capitalize font-lg  '>
      {!openSideBar ? (
        <div className={`lg:hidden fixed top-0 left-0  w-full lg:w-1/3 bg-gray-50 h-screen    transition-transform duration-700 ease-in-out translate-y-full z-50 ${showSearch ? 'mt-[120px]' : 'mt-[60px]'} overflow-y-scroll pb-12`}>
          {/* <SidebarListItem Icon={AiOutlineShop} title={"orders"} /> */}
         <SideBarLinks/>

        </div>
      ) : (
        <div className={`lg:hidden fixed top-0 left-0  w-full lg:w-1/3 bg-gray-50 h-screen transition-transform duration-700 ease-in-out translate-y-0 z-50 ${showSearch ? 'mt-[120px]' : 'mt-[60px] '} ${showSearch ? 'mb-[120px]' : 'mb-[60px] '} overflow-y-scroll  pb-14`}>
         <SideBarLinks/>
        </div>
      )}
    </div>
  );
}

export default SideBar;
