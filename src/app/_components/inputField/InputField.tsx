import { ChangeEventHandler, InputHTMLAttributes } from "react";

interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  disabled?: boolean;
}
const InputField = ({
  placeholder,
  onChange,
  className = "w-[220px] rounded-sm bg-[#EDEDED] p-2 text-sm font-normal placeholder:text-black focus:outline-brand",
  disabled = false,
  ...rest
}: InputFieldProps) => {
  return (
    <input
      {...rest}
      disabled={disabled}
      onChange={onChange}
      placeholder={placeholder}
      className={className}
    />
  );
};

export default InputField;
