import React from "react";
import { cardDatas } from "@/Utils/cardData";
import { formatDate, formatNumberToNaira } from "@/Utils/customFormter";

type menuProps = {
  filtredData: string;
};

const FilteredData = ({ filtredData }: menuProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
      {cardDatas &&
        cardDatas.map((data) => {
          return (
            data.category.toLowerCase() === filtredData.toLowerCase() && (
              <div
                key={data?.id}
                className="relative border shadow-lg hover:scale-105 duration-300 rounded-lg"
              >
                <img
                  src={
                    data?.title === "Mr" || data?.title === "Prof"
                      ? data?.maleTeacherImageUrl
                      : data?.femaleTeacherImageUrl
                  }
                  alt={data?.firstName}
                  className="w-full h-[200px] object-cover rounded-t-lg cursor-pointer"
                />

                <div className="flex items-center justify-center absolute right-0 top-2 text-[#fff] text[13px] bg-[#0F344E] w-[100px] p-1 rounded-l-xl">
                  {data?.title}
                </div>

                <div className="flex flex-col px-2 py-4 h-auto">
                  <p className="font-bold text-[24px] leading-2">
                    {data?.firstName} {data?.surName}
                  </p>
                  <p className="fifty-chars text-[15px] leading-2">
                    Salary: {formatNumberToNaira(data?.salary)}
                  </p>
                  <p className="fifty-chars text-[15px] leading-2">
                    Date of Birth: {data?.dob}
                  </p>
                  <p className="fifty-chars text-[15px] leading-2">
                    NIN: {data?.nationalId}
                  </p>
                  <p className="fifty-chars text-[15px] leading-2">
                    Contact: {data?.teacherNo}
                  </p>
                </div>
              </div>
            )
          );
        })}
    </div>
  );
};

export default FilteredData;
