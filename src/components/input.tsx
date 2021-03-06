import { FieldValues, UseFormRegister } from "react-hook-form";
import { FormType } from "../screens/login";

type InputType = Partial<{
  className: string;
  defaultValue: string;
  type: string;
}> & {
  name: string;
  register: UseFormRegister<FieldValues & FormType>;
};

export const Input = ({
  name,
  className,
  register,
  type = "input",
}: InputType): React.ReactElement => {
  return (
    <input
      className={`rounded-md h-10 bg-slate-300 px-2 w-full ${
        className ? className : ""
      }`}
      type={type}
      {...register(name)}
    />
  );
};
