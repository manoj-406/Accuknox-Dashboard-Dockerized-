import { BsBarChart } from "react-icons/bs";
type Props = {
  title: string;
  name: string;
  image?: string;
  id: any;
};
import { RxCross2 } from "react-icons/rx";
import { useRecoilState } from "recoil";
import { WidgetStatus } from "../store/atom";

const WidgetCard = ({ title, name, image, id }: Props) => {
  const [status, setStatus] = useRecoilState(WidgetStatus);

  const handleCheckbox = () => {
    const newStatus = { ...status, [id]: false };
    setStatus(newStatus);
  };

  return (
    <div className="bg-white w-full rounded-lg p-8 h-56 hover:shadow-md relative">
      <h1 className="font-bold">{name}</h1>
      <p className="text-gray-500">{title}</p>

      {!image && (
        <div className="w-full h-full flex items-center mt-6  flex-col font-medium text-gray-500 ">
          <BsBarChart className="w-8 h-8  " />
          <p>No Graph data available</p>
        </div>
      )}

      {image && (
        <img
          src={image}
          alt="image"
          className=" object-contain h-24 w-full mt-6"
        />
      )}
      <button
        className="absolute right-5 top-4 text-gray-500 hover:text-black p-2  hover:bg-gray-100 rounded-lg"
        onClick={handleCheckbox}
      >
        <RxCross2 />
      </button>
    </div>
  );
};

export default WidgetCard;
