import { Button, Input } from "../components";
import { FaKey } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

export type FormType = {
  username: string;
  password: string;
};

export const LoginScreen = (): React.ReactElement => {
  const loginSchema = Yup.object({
    username: Yup.string()
      .email("Por favor escribe un correo electronico válido")
      .required("Por favor escribe un correo electronico"),
    password: Yup.string().required("Por favor escribe tu contraseña"),
  });

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FormType>({
    resolver: yupResolver(loginSchema),
  });

  const navigate = useNavigate();

  const submitForm = ({ username, password }: FormType) => {
    navigate("/home");
  };

  return (
    <form onSubmit={handleSubmit(submitForm)}>
      <div className="grid grid-rows-4 px-5">
        <span>Iniciar sesión</span>
        <Input register={register} className="mt-2" name="username" />
        {errors.username?.message}
        <Input
          register={register}
          className="my-2"
          name="password"
          type="password"
        />
        {errors.password?.message}

        {/**
         * Agregar un campo tipo select para la seccion del usuario
         * 
         * ie: Desarrollo, Servicios generales, Administrativo
         * 
         * Modificar el select para que quede registrado dentro del form
         * Agregar validaciones
         * 
         */}

        <div className="justify-self-end">
          <Button id="test" name="test" icon={<FaKey />}>
            Iniciar sesión
          </Button>
        </div>
      </div>
    </form>
  );
};
