import { MdOutlineNotificationsActive } from "react-icons/md";
import { FaCircleUser } from "react-icons/fa6";
import { useState, useEffect } from "react";
import { useRecoilValue } from "recoil";
import { widgetsState } from "../store/atom";

const NavBar = () => {
  const [searchvalue, setSearchValue] = useState("");
  const [filteredData, setFilteredData] = useState<any>([]);
  const data = useRecoilValue(widgetsState);
  useEffect(() => {
    if (searchvalue.length > 2) {
      const filteredWidgets: any = data
        .flatMap((item) => item.widgets)
        .filter((widget) =>
          widget.name.toLowerCase().includes(searchvalue.toLowerCase())
        );
      setFilteredData(filteredWidgets);
    } else {
      setFilteredData([]);
    }
  }, [searchvalue]);

  return (
    <nav
      className="flex bg-white p-2 px-6 items-center justify-between w-full"
      aria-label="Breadcrumb"
    >
      <div>
        <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
          <li className="inline-flex items-center">
            <a
              href="#"
              className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-blue-600 "
            >
              Home
            </a>
          </li>
          <li>
            <div className="flex items-center">
              <svg
                className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 9 4-4-4-4"
                />
              </svg>
              <a
                href="#"
                className="ms-1 text-sm  text-gray-700 hover:text-blue-600 md:ms-2 font-bold "
              >
                Dashboard V2
              </a>
            </div>
          </li>
        </ol>
      </div>
      <div className="flex items-center gap-6 ">
        <form className="max-w-lg md:w-[1000px] mx-auto hidden md:block">
          <label
            htmlFor="default-search"
            className="mb-2 text-sm font-medium text-gray-900 sr-only "
          >
            Search
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 "
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="text"
              id="default-search"
              value={searchvalue}
              onChange={(e) => setSearchValue(e.target.value)}
              className="block w-full p-2 ps-10 text-sm text-gray-900 border border-[#e1f2f7] rounded-lg  bg-[#e1f2f7]/40 focus:ring-blue-500 focus:border-blue-500 "
              placeholder="Search anything..."
              required
            />
          </div>
          {filteredData.length > 0 && (
            <div className="absolute z-10  bg-white border border-gray-200 rounded-lg mt-1 px-4 py-2">
              {filteredData.map((item: any) => (
                <div key={item.id} className="p-2 hover:bg-gray-100">
                  {item.name}
                </div>
              ))}
            </div>
          )}
        </form>
        <div className="flex gap-6 items-center text-gray-700 ">
          <div className="hidden md:block">
            <div className="flex items-center gap-6 font-medium ">
              <select name="Category" id="" className=" p-2">
                <option value="">Categories</option>
                <option value="1">CSPP</option>
                <option value="2">CWPP 2</option>
                <option value="3">Registry Scan 3</option>
              </select>
            </div>
          </div>
          <MdOutlineNotificationsActive size={22} />
          <div className="flex gap-2 items-center">
            <FaCircleUser size={20} className="" />
            <p className="font-medium ">Mahesh</p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
