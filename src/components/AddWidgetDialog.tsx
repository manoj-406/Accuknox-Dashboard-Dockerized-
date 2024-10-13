import React from "react";
import { Dialog, DialogHeader, DialogFooter } from "@material-tailwind/react";
import { useRecoilState } from "recoil";
import { widgetsState } from "../store/atom";

export default function DialogDefault() {
  const [open, setOpen] = React.useState(false);
  const [data, setData] = useRecoilState(widgetsState);

  const [WidgetId, setWidgetId] = React.useState("7");
  const [widgets, setWidgets] = React.useState<any>({
    categoryId: "1",
    Title: "",
    Description: "",
  });

  const handleOpen = () => setOpen(!open);

  const AddWidget = (e: any) => {
    e.preventDefault();
    console.log(widgets);

    const newWidgets = data.map((item: any) => {
      if (item.id === widgets.categoryId.toString()) {
        return {
          ...item,
          widgets: [
            ...item.widgets,
            {
              id: WidgetId,
              name: widgets.Title,
              text: widgets.Description,
              visible: false,
            },
          ],
        };
      }
      return item;
    });
    setWidgetId(WidgetId + 1);

    setData(newWidgets);

    handleOpen();
  };

  return (
    <>
      <button
        onClick={handleOpen}
        className="btn bg-indigo-900 text-white hover:bg-indigo-800 hover:text-white"
      >
        Add Widget
      </button>
      <Dialog
        open={open}
        handler={handleOpen}
        placeholder=""
        onPointerEnterCapture={() => {}}
        onPointerLeaveCapture={() => {}}
      >
        <DialogHeader
          placeholder=""
          onPointerEnterCapture={() => {}}
          onPointerLeaveCapture={() => {}}
        >
          Add Widget
        </DialogHeader>
        <div className="flex flex-col max-w-md mx-auto gap-4">
          <div className="w-full">
            <label htmlFor="Title">Title</label>
            <input
              type="text"
              id="Title"
              placeholder="Title"
              value={widgets.Title}
              className="p-2 border border-gray-500 rounded-lg w-full"
              onChange={(e) =>
                setWidgets({ ...widgets, Title: e.target.value })
              }
            />
          </div>
          <div className="w-full">
            <label htmlFor="Description">Description</label>
            <input
              type="text"
              placeholder="Description"
              id="Description"
              className="p-2 border border-gray-500 rounded-lg w-full"
              value={widgets.Description}
              onChange={(e) =>
                setWidgets({ ...widgets, Description: e.target.value })
              }
            />
          </div>

          <div className="flex justify-end">
            <select
              name="Category"
              id=""
              className="p-2 border border-gray-500 rounded-lg "
              onChange={(e) =>
                setWidgets({ ...widgets, categoryId: parseInt(e.target.value) })
              }
              value={widgets.categoryId}
            >
              <option value="1">CSPP</option>
              <option value="2">CWPP 2</option>
              <option value="3">Registry Scan 3</option>
            </select>
          </div>
        </div>

        <DialogFooter
          placeholder=""
          onPointerEnterCapture={() => {}}
          onPointerLeaveCapture={() => {}}
        >
          <button onClick={handleOpen} className="mr-1 btn  ">
            <span>Cancel</span>
          </button>
          <button
            className="btn bg-indigo-900 text-white hover:bg-indigo-800 hover:text-white"
            onClick={AddWidget}
          >
            Confirm
          </button>
        </DialogFooter>
      </Dialog>
    </>
  );
}
