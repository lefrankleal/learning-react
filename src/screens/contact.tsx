import { Button } from "../components";

export const ContactScreen = () => {
  return (
    <div>
      <div>Contact</div>
      <Button name="Go to About" to="/about" />
      <Button name="Go to Home" to="/home" />
    </div>
  );
};
