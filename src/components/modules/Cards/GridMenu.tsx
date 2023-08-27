import React from "react";
import FilterButtons from "./FilterButtons";
import FilteredData from "./FilteredData";

type menuProps = {
  setFilteredData: React.Dispatch<React.SetStateAction<string>>;
  filtredData: string;
};

const GridMenu = ({ setFilteredData, filtredData }: menuProps) => {
  return (
    <section className="max-w-[1640px] mx-auto px-4 py-12 md:px-10">
      <h2 className="text-orange-600 font-bold text-4xl text-center">
        List of {filtredData}
      </h2>
      {/* filter row */}
      <FilterButtons
        setFilteredData={setFilteredData}
        filtredData={filtredData}
      />
      <FilteredData filtredData={filtredData} />
    </section>
  );
};

export default GridMenu;