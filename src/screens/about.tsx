import { Fragment } from "react";
import { useLocation } from "react-router-dom";
import { ButtonLink } from "../components";

export const AboutScreen = () => {
  const location = useLocation() as any;

  return (
    <div>
      <div>About</div>
      {location.state && location.state.test ? (
        <Fragment>
          <ButtonLink name="Go to Contact" to="/contact" />
          <ButtonLink name="Go to Home" to="/home" />
        </Fragment>
      ) : null}
    </div>
  );
};
