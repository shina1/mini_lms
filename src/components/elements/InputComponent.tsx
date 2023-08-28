import React from "react";
import { useFormContext, Controller, FieldError } from "react-hook-form";

type InputProps = {
  type: string;
  name: string;
  classNames: string;
  label: string;
  placeHolder: string;
  validationMessage?: string;
  required: boolean;
  value: string;
  handleChange: (name: string, value: string) => void;
};

export const sanitizeInput = (input: string): string => {
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
  required,
  value,
  handleChange,
}) => {
  const { control, setError, clearErrors } = useFormContext();

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
            value={value}
            onChange={(e) => {
              const sanitizedValue = sanitizeInput(e.target.value);
              field.onChange(sanitizedValue);
              clearErrors(name);
              handleChange(name, sanitizedValue);
            }}
            onBlur={() => {
              setError(name, emptyError);
            }}
          />
        )}
        rules={{
          required: required ? `${label} is required` : false,
        }}
      />
      {validationMessage && (
        <p className="text-red-500 text-sm">{validationMessage}</p>
      )}
    </div>
  );
};

export default InputComponent;
