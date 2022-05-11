import { ButtonLink } from "../components";

export const ContactScreen = () => {
  return (
    <div>
      <div>Contact</div>
      <ButtonLink name="Go to About" to="/about" />
      <ButtonLink name="Go to Home" to="/home" />
    </div>
  );
};
