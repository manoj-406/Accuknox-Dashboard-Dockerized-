import React from "react";
import { Drawer, IconButton } from "@material-tailwind/react";
import AddWidgetDialog from "./AddWidgetDialog";

import { MdAdd } from "react-icons/md";

import { useEffect } from "react";
import { widgetsState, WidgetStatus } from "../store/atom";
import { useRecoilState, useRecoilValue } from "recoil";

export default function DrawerDefault() {
  const [open, setOpen] = React.useState(false);
  const [widgets, setWidgets] = React.useState<any>("");
  const data = useRecoilValue(widgetsState);
  const [status, setStatus] = useRecoilState(WidgetStatus);

  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);

  useEffect(() => {
    WidgetsMenu("1");
  }, [data]);

  const WidgetsMenu = (categoryId: string) => {
    const widgetsData = data.find((item: any) => item.id === categoryId);
    setWidgets(widgetsData?.widgets);
  };

  const handleCheckbox = (e: any) => {
    const id = e.target.id;
    const checked = e.target.checked;

    const newStatus = { ...status, [id]: checked };
    setStatus(newStatus);
  };

  return (
    <>
      <button className="btn  " onClick={openDrawer}>
        Add Widget
        <span>
          <MdAdd />
        </span>
      </button>

      <Drawer
        open={open}
        onClose={closeDrawer}
        placement="right"
        className="h-full"
        size={500}
        placeholder=""
        onPointerEnterCapture={() => {}}
        onPointerLeaveCapture={() => {}}
      >
        <div className="mb-6 flex items-center justify-between bg-indigo-900 px-4 text-white">
          <p className="text-white">Add Widget</p>
          <IconButton
            variant="text"
            color="blue-gray"
            onClick={closeDrawer}
            placeholder=""
            onPointerEnterCapture={() => {}}
            onPointerLeaveCapture={() => {}}
            className="text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </IconButton>
        </div>
        <h3 className="pr-4 font-medium px-4 text-gray-800">
          Personalise your dashboard by adding following widget
        </h3>
        <div className="flex flex-col justify-between ">
          <div>
            <div className="flex gap-2 px-4">
              <ul className="flex ">
                <li
                  id="list"
                  className="p-2 border-b-2 border-indigo-900 hover:bg-gray-100 hover:text-indigo-900  hover:border-indigo-900"
                  onClick={() => WidgetsMenu("1")}
                >
                  CSWP
                </li>
                <li
                  id="list"
                  className="p-2 border-b-2 border-gray-300 hover:bg-gray-100 hover:text-indigo-900  hover:border-indigo-900"
                  onClick={() => WidgetsMenu("2")}
                >
                  CWPP
                </li>
                <li
                  id="list"
                  className="p-2 border-b-2 border-gray-300 hover:bg-gray-100 hover:text-indigo-900  hover:border-indigo-900"
                  onClick={() => WidgetsMenu("3")}
                >
                  Registry
                </li>
              </ul>
            </div>

            {widgets.length > 0 && (
              <div className="flex gap-2 px-4 flex-col my-4">
                {widgets.map((item: any) => (
                  <div className="flex items-center " key={item.id}>
                    <input
                      id={item.id}
                      type="checkbox"
                      defaultChecked={item.visible}
                      onClick={handleCheckbox}
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 "
                    />
                    <label
                      htmlFor={item.id}
                      className="ms-2 text-sm font-medium text-gray-900"
                    >
                      {item.name}
                    </label>
                  </div>
                ))}
              </div>
            )}

            <div className="flex justify-end gap-2  px-4">
              <AddWidgetDialog />
              <button
                className="btn btn bg-indigo-900 text-white hover:bg-indigo-800 hover:text-white"
                onClick={closeDrawer}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </Drawer>
    </>
  );
}
