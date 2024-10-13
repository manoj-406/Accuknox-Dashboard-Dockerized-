import { MdAdd } from "react-icons/md";

const EmptyWidgetCard = () => {
  return (
    <div className="bg-white w-full rounded-lg p-8 h-56 flex justify-center items-center hover:shadow-md">
      <button className="btn">
        <span>
          <MdAdd size={24} />
        </span>
        Add Widget
      </button>
    </div>
  );
};

export default EmptyWidgetCard;
