import React from "react";

export type CardType = {
  id: string;
  label: string;
  value: string;
  icon: any;
  percent: string;
};
type compProps = {
  teacherDatas: any;
  studentDatas: any;
};

const CardGridDisp = ({ teacherDatas, studentDatas }: compProps) => {
  const CardDetials: CardType[] = [
    {
      id: "1",
      label: "Total No. Teachers",

      value: teacherDatas?.length,
      icon: "stock-down",
      percent: "2%",
    },
    {
      id: "2",
      label: "Total No. Profesors",
      value: 5,
      icon: "up-stock",
      percent: "2%",
    },
    {
      id: "3",
      label: "Total No. Students",
      value: studentDatas?.length,
      icon: "up-stock",
      percent: "2%",
    },
  ];
  return (
    <div className="grid xl:grid-cols-3 sm:grid-cols-2 sm:gap-6 gap-4">
      {CardDetials &&
        CardDetials.map((item: CardType) => (
          <div key={`${item.id}cards`} className="bg-[#DBEAFE] p-6 ">
            <div className="text-gray-900">{item.label}</div>
            <div className="font-semibold sm:text-xl text-lg text-[#000]">
              {item.value}
            </div>
            <div className="flex items-center space-x-3 text-red-800 ">
              {/* <img src={`/images/${item.icon}.svg`} alt="" /> */}
              <div>{item.percent} </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default CardGridDisp;
