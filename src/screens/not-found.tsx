import { ButtonLink } from "../components";

export const NotFoundScreen = () => {
  return (
    <div>
      <div>404 Not Found</div>
      <ButtonLink name="Login" to="/login" />
    </div>
  );
};
