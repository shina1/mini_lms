import { calculateAge } from "@/Utils/calculateAge";
import { addDoc, collection } from "firebase/firestore";
import Button from "@/components/elements/Button";
import InputComponent from "@/components/elements/InputComponent";
import React, { useEffect, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { db } from "@/store/config";

type Data = {
  title: string;
  nationalId: string;
  firstName: string;
  surName: string;
  dob: string;
  teacherNo: string;
  salary: string;
  maleTeacherImageUrl: string;
  femaleTeacherImageUrl: string;
};

type FormState = {
  title: string;
  nationalId: string;
  firstName: string;
  surName: string;
  dob: string;
  teacherNo: string;
  salary: string;
};

const initialFormState: FormState = {
  title: "",
  nationalId: "",
  firstName: "",
  surName: "",
  dob: "",
  teacherNo: "",
  salary: "",
};
type formCompProps = {
  setToggleTeacher: React.Dispatch<React.SetStateAction<boolean>>;
};

const TeachersForm = ({ setToggleTeacher }: formCompProps) => {
  const methods = useForm();
  const [formState, setFormState] = useState<FormState>(initialFormState);
  const [selectState, setSelectState] = useState<string>("");
  const [validateAgeError, setValidateAgeError] = useState("");

  // collection from the datABSE
  //   teachers
  const teacherCollectionRef = collection(db, "teachers");

  console.log("blogCollectionRef", teacherCollectionRef);

  const handleChange = (name: string, value: string) => {
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  function checkAgeAndThrowError(dateOfBirth: string): void {
    const age = calculateAge(dateOfBirth);

    if (age < 21) {
      setValidateAgeError("Age must be at least 21 years.");
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
      title: selectState,
      nationalId: formState.nationalId,
      firstName: formState.firstName,
      surName: formState.surName,
      dob: formState.dob,
      teacherNo: formState.teacherNo,
      salary: formState.salary,
      maleTeacherImageUrl:
        "https://media.istockphoto.com/id/1468458501/photo/teacher-assisting-student-with-computer-science-lesson.webp?b=1&s=170667a&w=0&k=20&c=dFXdcOs4o6-8YcBZAnCVJlOdpkzfhMclNZ5H5ERxkVk=",
      femaleTeacherImageUrl:
        "https://media.istockphoto.com/id/1328488607/photo/portrait-of-african-american-female-teacher-smiling-in-the-class-at-school.webp?b=1&s=170667a&w=0&k=20&c=e1eCZEsldaHDfCeHPl5VjADjeYEnmuxDgaj7va-L4sg=",
    };
    return payload;
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const payload = setPayload();

    try {
      const res = await addDoc(teacherCollectionRef, payload);
      if (res?.firestore) {
        setToggleTeacher(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <FormProvider {...methods}>
      <div className="px-6 py-6 lg:px-8">
        <h3 className="mb-4 text-xl font-medium text-gray-900 ">
          Add a New Teacher
        </h3>
        <form
          className="space-y-6"
          action="#"
          onSubmit={(e) => handleSubmit(e)}
        >
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
            <label
              htmlFor="title"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Title
            </label>
            <select
              name="title"
              className="bg-gray-50 border border-gray-300 text-gray-900
            text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block
            w-full p-2.5"
              value={selectState}
              onChange={(e) => setSelectState(e.target.value)}
            >
              <option value="Mr">Mr</option>
              <option value="Mrs">Mrs</option>
              <option value="Miss">Miss</option>
              <option value="Dr">Dr</option>
              <option value="Prof">Prof</option>
            </select>
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
              placeHolder="Teachers surname"
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
              <span className="text-sm text-red-500">{validateAgeError}</span>
            )}
          </div>
          <div>
            <InputComponent
              name="teacherNo"
              type="number"
              classNames="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeHolder="Teacher Number"
              label="Teacher Number"
              required={true}
              value={formState.teacherNo}
              handleChange={handleChange}
            />
          </div>
          <div>
            <InputComponent
              name="salary"
              type="text"
              classNames="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeHolder="Teacher's Salary"
              label="Teacher's Salary"
              required={false}
              value={formState.salary}
              handleChange={handleChange}
            />
          </div>
          <Button text="Submit" type="secondary" />
        </form>
      </div>
    </FormProvider>
  );
};

export default TeachersForm;
