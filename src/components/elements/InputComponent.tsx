// import React from "react";
// import { useFormContext, Controller, FieldError } from "react-hook-form";

// type InputProps = {
//   type: string;
//   name: string;
//   classNames: string;
//   label: string;
//   placeHolder: string;
//   validationMessage?: string;
// };

// const sanitizeInput = (input: string): string => {
//   const allowedCharacters = /^[a-zA-Z0-9\s.,!?@#$%^&*()\-_=+[\]{}:;"'<>/`~]*$/;
//   return input.replace(
//     new RegExp(`[^${allowedCharacters.source}]`, "g"),
//     (match) => `&#${match.charCodeAt(0)};`
//   );
// };

// const InputComponent: React.FC<InputProps> = ({
//   type,
//   name,
//   classNames,
//   label,
//   validationMessage,
//   placeHolder,
// }) => {
//   const { control, setError, clearErrors } = useFormContext();

//   const emptyError: FieldError = { type: "", message: "" };

//   return (
//     <div>
//       <label
//         htmlFor={name}
//         className="block mb-2 text-sm font-medium text-gray-900 "
//       >
//         {label}
//       </label>
//       <Controller
//         as={
//           <input type={type} className={classNames} placeholder={placeHolder} />
//         }
//         name={name}
//         control={control}
//         onChange={(e: { target: { value: string } }) => {
//           const sanitizedValue = sanitizeInput(e.target.value);
//           clearErrors(name); // Clear errors when the input value changes
//           return sanitizedValue;
//         }}
//         onBlur={() => {
//           setError(name, emptyError); // Set empty error when the input is blurred
//         }}
//         rules={{
//           required: `${label} is required`,
//           // Other validation rules as needed go here
//         }}
//       />
//       {validationMessage && (
//         <p className="text-red-500 text-sm">{validationMessage}</p>
//       )}
//     </div>
//   );
// };

// export default InputComponent;

import React from "react";
import { useFormContext, Controller, FieldError } from "react-hook-form";

type InputProps = {
  type: string;
  name: string;
  classNames: string;
  label: string;
  placeHolder: string;
  validationMessage?: string;
};

const sanitizeInput = (input: string): string => {
  const allowedCharacters = /^[a-zA-Z0-9\s.,!?@#$%^&*()\-_=+[\]{}:;"'<>/`~]*$/;
  return input.replace(
    new RegExp(`[^${allowedCharacters.source}]`, "g"),
    (match) => `&#${match.charCodeAt(0)};`
  );
};

const InputComponent: React.FC<InputProps> = ({
  type,
  name,
  classNames,
  label,
  validationMessage,
  placeHolder,
}) => {
  const { control, setError, clearErrors } = useFormContext();

  // Define an empty FieldError object for TypeScript
  const emptyError: FieldError = { type: "", message: "" };

  return (
    <div>
      <label
        htmlFor={name}
        className="block mb-2 text-sm font-medium text-gray-900 "
      >
        {label}
      </label>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <input
            {...field}
            type={type}
            className={classNames}
            placeholder={placeHolder}
            onChange={(e) => {
              const sanitizedValue = sanitizeInput(e.target.value);
              field.onChange(sanitizedValue);
              clearErrors(name);
            }}
            onBlur={() => {
              setError(name, emptyError);
            }}
          />
        )}
        rules={{
          required: `${label} is required`,
          // Other validation rules as needed go here
        }}
      />
      {validationMessage && (
        <p className="text-red-500 text-sm">{validationMessage}</p>
      )}
    </div>
  );
};

export default InputComponent;
