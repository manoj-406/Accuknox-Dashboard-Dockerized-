import NavBar from "./components/NavBar";

import { LuRefreshCcw } from "react-icons/lu";
import { HiDotsVertical } from "react-icons/hi";
import { FaClock } from "react-icons/fa6";
import { MdKeyboardArrowDown } from "react-icons/md";
import Widgets from "./components/Widgets";
import SideBar from "./components/SideBar";
function App() {
  return (
    <>
      <NavBar />
      <div className="p-8">
        <div className="flex items-center justify-between">
          <h1 className="font-bold">CNAPP Dashboard</h1>
          <div className="flex gap-6">
            <SideBar />
            <div className="hidden md:block">
              <div className="flex gap-6 ">
                <button className="btn">
                  <LuRefreshCcw />
                </button>
                <button className="btn">
                  <HiDotsVertical />
                </button>
                <button className="btn text-blue-800 border-blue-800 px-2">
                  <FaClock
                    className="border-r border-blue-800 pr-1"
                    size={24}
                  />
                  Last 2 days
                  <MdKeyboardArrowDown size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-6">
          <Widgets />
        </div>
      </div>
    </>
  );
}

export default App;
