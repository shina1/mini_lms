"use client";
import Header from "@/components/elements/Header";
import CardGridDisp from "@/components/modules/Cards/CardGridDisp";
import GridMenu from "@/components/modules/Cards/GridMenu";
import React, { useState } from "react";

const Home = () => {
  const [filtredData, setFilteredData] = useState("Teachers");
  const [toggleTeacher, setToggleTeacher] = useState(false);
  const [toggleStudent, setToggleStudent] = useState(false);
  const [teacherDatas, setTeacherDatas] = useState();
  const [studentDatas, setStudentDatas] = useState();
  return (
    <>
      <Header
        toggleTeacher={toggleTeacher}
        setToggleTeacher={setToggleTeacher}
        toggleStudent={toggleStudent}
        setToggleStudent={setToggleStudent}
      />
      <div className="max-w-[1640px] h-full mx-auto p-4 md:py-4 md:px-10 bg-[#F7F7F7]">
        <CardGridDisp teacherDatas={teacherDatas} studentDatas={studentDatas} />
        <GridMenu
          filtredData={filtredData}
          setFilteredData={setFilteredData}
          toggleTeacher={toggleTeacher}
          toggleStudent={toggleStudent}
          setTeacherDatas={setTeacherDatas}
          setStudentDatas={setStudentDatas}
        />
      </div>
    </>
  );
};

export default Home;
