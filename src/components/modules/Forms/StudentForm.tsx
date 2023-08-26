import Button from "@/components/elements/Button";
import InputComponent from "@/components/elements/InputComponent";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";

const StudentForm = () => {
  const methods = useForm();
  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("...submit");
  };
  return (
    <FormProvider {...methods}>
      <div className="px-6 py-6 lg:px-8">
        <h3 className="mb-4 text-xl font-medium text-gray-900 ">
          Add a New Teacher
        </h3>
        <form className="space-y-6" action="#">
          <div>
            <InputComponent
              name="nationalId"
              type="text"
              classNames="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeHolder="Nationa Id number (NIN)"
              label="National ID Number"
            />
          </div>
          <div>
            <InputComponent
              name="name"
              type="text"
              classNames="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeHolder="Teachers name"
              label="Name"
            />
          </div>
          <div>
            <InputComponent
              name="surname"
              type="text"
              classNames="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeHolder="Teachers surname"
              label="Surname"
            />
          </div>
          <div>
            <InputComponent
              name="dob"
              type="date"
              classNames="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeHolder="mm/dd/yy"
              label="Date of birth"
            />
          </div>
          <div>
            <InputComponent
              name="teacherNo"
              type="number"
              classNames="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeHolder="Teacher Number"
              label="Teacher Number"
            />
          </div>

          <Button text="Submit" type="secondary" handleClick={handleSubmit} />
        </form>
      </div>
    </FormProvider>
  );
};

export default StudentForm;
