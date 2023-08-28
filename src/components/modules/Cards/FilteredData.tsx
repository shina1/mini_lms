import React, { useState, useEffect } from "react";
import { cardDatas } from "@/Utils/cardData";
import { formatDate, formatNumberToNaira } from "@/Utils/customFormter";
import { getDocs, collection } from "firebase/firestore";
import { db } from "@/store/config";
import { Skeleton } from "antd";

type menuProps = {
  filtredData: string;
  toggleTeacher: boolean;
  toggleStudent: boolean;
};

const FilteredData = ({
  filtredData,
  toggleTeacher,
  toggleStudent,
}: menuProps) => {
  const [cardData, setCardData] = useState<any>();

  const teacherCollectionRef = collection(db, "teachers");
  const studentsCollectionRef = collection(db, "students");

  //   Students Teachers
  const handleFEtchTeachersData = async () => {
    try {
      const result = await getDocs(teacherCollectionRef);
      if (result) {
        const refinedResult = result.docs.map((res) => ({
          ...res.data(),
          id: res.id,
        }));
        setCardData(refinedResult);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleFetchStudentsData = async () => {
    try {
      const result = await getDocs(studentsCollectionRef);
      if (result) {
        const refinedResult = result.docs.map((res) => ({
          ...res.data(),
          id: res.id,
        }));
        setCardData(refinedResult);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (filtredData === "Teachers") {
      handleFEtchTeachersData();
    } else {
      handleFetchStudentsData();
    }
  }, [filtredData, toggleTeacher, toggleStudent]);

  console.log("cardData", cardData);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 pt-4">
      {cardData !== undefined || cardData.length > 0
        ? cardData.map(
            (data: {
              category: string;
              id: React.Key | null | undefined;
              title: string | undefined;
              maleTeacherImageUrl: string | undefined;
              femaleTeacherImageUrl: string | undefined;
              firstName: string | undefined;
              ImageUrl: string | undefined;
              surName: string | undefined;
              salary: string | number;
              dob: string | number | undefined;
              nationalId: string | number | undefined;
              teacherNo: string | number | undefined;
              studentNo: string | number | undefined;
            }) => {
              return (
                data?.category?.toLowerCase() === filtredData.toLowerCase() && (
                  <div
                    key={data?.id}
                    className="relative border shadow-lg hover:scale-105 duration-300 rounded-lg"
                  >
                    {data?.category === "Teachers" ? (
                      <img
                        src={
                          data?.title === "Mr" || data?.title === "Prof"
                            ? data?.maleTeacherImageUrl
                            : data?.femaleTeacherImageUrl
                        }
                        alt={data?.firstName}
                        className="w-full h-[200px] object-cover rounded-t-lg cursor-pointer"
                      />
                    ) : (
                      <img
                        src={data?.ImageUrl}
                        alt={data?.firstName}
                        className="w-full h-[200px] object-cover rounded-t-lg cursor-pointer"
                      />
                    )}

                    {data?.category === "Teachers" && (
                      <div className="flex items-center justify-center absolute right-0 top-2 text-[#fff] text[13px] bg-[#0F344E] w-[100px] p-1 rounded-l-xl">
                        {data?.title}
                      </div>
                    )}

                    <div className="flex flex-col px-2 py-4 h-auto">
                      <p className="font-bold text-[24px] leading-2">
                        {data?.firstName} {data?.surName}
                      </p>
                      {data?.category === "Teachers" && (
                        <p className="fifty-chars text-[15px] leading-2">
                          Salary: {formatNumberToNaira(data?.salary)}
                        </p>
                      )}

                      <p className="fifty-chars text-[15px] leading-2">
                        Date of Birth: {data?.dob}
                      </p>
                      <p className="fifty-chars text-[15px] leading-2">
                        NIN: {data?.nationalId}
                      </p>
                      {data?.category === "Teachers" ? (
                        <p className="fifty-chars text-[15px] leading-2">
                          Contact: {data?.teacherNo}
                        </p>
                      ) : (
                        <p className="fifty-chars text-[15px] leading-2">
                          Contact: {data?.studentNo}
                        </p>
                      )}
                      <p className="fifty-chars text-[15px] leading-2">
                        Contact: {data?.teacherNo}
                      </p>
                    </div>
                  </div>
                )
              );
            }
          )
        : cardDatas.map(
            (data: {
              category: string;
              id: React.Key | null | undefined;
              title: string | undefined;
              maleTeacherImageUrl: string | undefined;
              femaleTeacherImageUrl: string | undefined;
              firstName: string | undefined;
              ImageUrl: string | undefined;
              surName: string | undefined;
              salary: string | number;
              dob: string | number | undefined;
              nationalId: string | number | undefined;
              teacherNo: string | number | undefined;
              studentNo: string | number | undefined;
            }) => {
              return (
                data?.category?.toLowerCase() === filtredData.toLowerCase() && (
                  <div
                    key={data?.id}
                    className="relative border shadow-lg hover:scale-105 duration-300 rounded-lg"
                  >
                    <Skeleton.Image active />

                    <div className="flex items-center justify-center absolute right-0 top-2 text-[#fff] text[13px]  w-[100px] p-1 rounded-l-xl">
                      <Skeleton.Button active />
                    </div>

                    <div className="flex flex-col px-2 py-4 h-auto">
                      <p className="font-bold text-[24px] leading-2">
                        <Skeleton.Input active />
                      </p>
                      {data?.category === "Teachers" && (
                        <p className="fifty-chars text-[15px] leading-2">
                          Salary: <Skeleton.Input active />
                        </p>
                      )}

                      <p className="fifty-chars text-[15px] leading-2">
                        Date of Birth: <Skeleton.Input active />
                      </p>
                      <p className="fifty-chars text-[15px] leading-2">
                        NIN: <Skeleton.Input active />
                      </p>
                      {data?.category === "Teachers" ? (
                        <p className="fifty-chars text-[15px] leading-2">
                          Contact:
                          <Skeleton.Input active />
                        </p>
                      ) : (
                        <p className="fifty-chars text-[15px] leading-2">
                          Contact:
                          <Skeleton.Input active />
                        </p>
                      )}
                      <p className="fifty-chars text-[15px] leading-2">
                        Contact: <Skeleton.Input active />
                      </p>
                    </div>
                  </div>
                )
              );
            }
          )}
    </div>
  );
};

export default FilteredData;
