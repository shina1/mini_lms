import React from "react";
import StudentForm from "../Forms/StudentForm";

interface compProps {
  toggleStudent: boolean;
  setToggleStudent: React.Dispatch<React.SetStateAction<boolean>>;
}

const StudentFormModal = ({ setToggleStudent, toggleStudent }: compProps) => {
  return (
    <div className="fixed top-5 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full bg-[rgba(65,70,82,0.7)]">
      <div className="relative w-full h-full max-w-2xl md:h-auto mx-auto md:top-[100px]">
        <div className="relative bg-white rounded-lg shadow ">
          <button
            onClick={() => setToggleStudent(!toggleStudent)}
            type="button"
            className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center"
            data-modal-hide="authentication-modal"
          >
            <svg
              className="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
            <span className="sr-only">Close modal</span>
          </button>
          <StudentForm setToggleStudent={setToggleStudent} />
        </div>
      </div>
    </div>
  );
};

export default StudentFormModal;
