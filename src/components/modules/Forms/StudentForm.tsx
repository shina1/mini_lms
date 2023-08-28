import { calculateAge } from "@/Utils/calculateAge";
import { addDoc, collection } from "firebase/firestore";
import Button from "@/components/elements/Button";
import InputComponent from "@/components/elements/InputComponent";
import React, { useEffect, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { db } from "@/store/config";

type FormState = {
  nationalId: string;
  firstName: string;
  surName: string;
  dob: string;
  studentNo: string;
};

type formCompProps = {
  setToggleStudent: React.Dispatch<React.SetStateAction<boolean>>;
};

const initialFormState: FormState = {
  nationalId: "",
  firstName: "",
  surName: "",
  dob: "",
  studentNo: "",
};

const StudentForm = ({ setToggleStudent }: formCompProps) => {
  const methods = useForm();
  const [formState, setFormState] = useState<FormState>(initialFormState);
  const [validateAgeError, setValidateAgeError] = useState("");

  const studentsCollectionRef = collection(db, "students");

  const handleChange = (name: string, value: string) => {
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  function checkAgeAndThrowError(dateOfBirth: string): void {
    const age = calculateAge(dateOfBirth);

    if (age > 22) {
      setValidateAgeError("Age must not be more than 22 years.");
    } else {
      setValidateAgeError("");
    }
  }

  useEffect(() => {
    if (formState.dob !== "") {
      checkAgeAndThrowError(formState?.dob);
    }
  }, [formState]);

  const setPayload = () => {
    const payload = {
      nationalId: formState.nationalId,
      firstName: formState.firstName,
      category: "Students",
      surName: formState.surName,
      dob: formState.dob,
      studentNo: formState.studentNo,
      imageUrl:
        "https://media.istockphoto.com/id/1468458501/photo/teacher-assisting-student-with-computer-science-lesson.webp?b=1&s=170667a&w=0&k=20&c=dFXdcOs4o6-8YcBZAnCVJlOdpkzfhMclNZ5H5ERxkVk=",
    };
    return payload;
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const payload = setPayload();

    try {
      const res = await addDoc(studentsCollectionRef, payload);
      if (res?.firestore) {
        setToggleStudent(false);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <FormProvider {...methods}>
      <div className="px-6 py-6 lg:px-8">
        <h3 className="mb-4 text-xl font-medium text-gray-900 ">
          Add a New Student
        </h3>
        <form className="space-y-6" action="#">
          <div>
            <InputComponent
              name="nationalId"
              type="number"
              classNames="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeHolder="Nationa Id number (NIN)"
              label="National ID Number"
              required={true}
              value={formState.nationalId}
              handleChange={handleChange}
            />
          </div>
          <div>
            <InputComponent
              name="firstName"
              type="text"
              classNames="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeHolder="Teachers name"
              label="Name"
              required={true}
              value={formState.firstName}
              handleChange={handleChange}
            />
          </div>
          <div>
            <InputComponent
              name="surName"
              type="text"
              classNames="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeHolder="Student surname"
              label="Surname"
              required={true}
              value={formState.surName}
              handleChange={handleChange}
            />
          </div>
          <div>
            <InputComponent
              name="dob"
              type="date"
              classNames="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeHolder="mm/dd/yy"
              label="Date of birth"
              required={true}
              value={formState.dob}
              handleChange={handleChange}
            />
            {validateAgeError && (
              <span className="text-sm text-red-400">{validateAgeError}</span>
            )}
          </div>
          <div>
            <InputComponent
              name="studentNo"
              type="number"
              classNames="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeHolder="Student Number"
              label="Student Number"
              required={true}
              value={formState.studentNo}
              handleChange={handleChange}
            />
          </div>

          <Button text="Submit" type="secondary" handleClick={handleSubmit} />
        </form>
      </div>
    </FormProvider>
  );
};

export default StudentForm;
