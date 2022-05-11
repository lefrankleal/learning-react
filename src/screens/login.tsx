import { Button, Input } from "../components";
import { FaKey } from "react-icons/fa";
import { useForm } from "react-hook-form";

export const LoginScreen = (): React.ReactElement => {
  const { handleSubmit, register, watch } = useForm();

  const submitForm = () => {
    console.log("submit");
  };

  console.log(watch("username"));

  return (
    <form onSubmit={handleSubmit(submitForm)}>
      <div className="grid grid-rows-4 px-5">
        <span>Iniciar sesión</span>
        <Input className="mt-2" register={register} name="username" />
        <Input
          register={register}
          className="my-2"
          name="password"
          type="password"
        />
        <div className="justify-self-end">
          <Button id="test" name="test" icon={<FaKey />}>
            Iniciar sesión
          </Button>
        </div>
      </div>
    </form>
  );
};
