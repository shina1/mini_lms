import React from "react";
import { filterButtons } from "@/Utils/filterButtons";

type filterCompProps = {
  setFilteredData: any;
  filtredData: string;
};

const FilterButtons = ({ setFilteredData, filtredData }: filterCompProps) => {
  const handleSetData = (name: string) => {
    setFilteredData(name);
  };
  return (
    <div className="flex flex-col lg:flex-row items-center my-2">
      {/* filter type */}
      <div>
        <p className="font-bold text-gray-700">Filter</p>
        <div className="flex justify-between flex-wrap max-w-[680px] my-1">
          {filterButtons.map((button) => (
            <button
              className={`${
                button.name === filtredData
                  ? "bg-orange-400 text-[#F7F7F7] border-0"
                  : ""
              } m-1 border border-orange-600 text-orange-600 rounded-full px-2 `}
              onClick={() => handleSetData(button.name)}
              key={button.id}
            >
              {button.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FilterButtons;
