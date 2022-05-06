import { Fragment } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "../components";

export const AboutScreen = () => {
  const location = useLocation() as any;

  console.log(location.state);

  return (
    <div>
      <div>About</div>
      {location.state && location.state.test ? (
        <Fragment>
          <Button name="Go to Contact" to="/contact" />
          <Button name="Go to Home" to="/home" />
        </Fragment>
      ) : null}
    </div>
  );
};
