import classNames from "classnames";
import React from "react";
import { useFormContext, Controller } from "react-hook-form";

type InputProps = {
  type: string;
  name: string;
  classNames: string;
  validationMessage?: string;
};

const sanitizeInput = (input: string): string => {
  const allowedCharacters = /^[a-zA-Z0-9\s.,!?@#$%^&*()\-_=+[\]{}:;"'<>/`~]*$/;

  // Escape any disallowed characters using character entities
  return input.replace(
    new RegExp(`[^${allowedCharacters.source}]`, "g"),
    (match) => `&#${match.charCodeAt(0)};`
  );
};

const InputComponent: React.FC<InputProps> = ({
  type,
  name,
  classNames,
  validationMessage,
}) => {
  const { control, errors } = useFormContext();

  return (
    <div>
      <Controller
        as={<input type={type} className={classNames} />}
        name={name}
        control={control}
        onChange={(e) => {
          const sanitizedValue = sanitizeInput(e.target.value);
          return sanitizedValue;
        }}
        rules={{
          required: `${name} is required`,
          // Add other validation rules as needed
        }}
      />
      {errors[name] && <p>{errors[name]?.message}</p>}
    </div>
  );
};

export default InputComponent;
