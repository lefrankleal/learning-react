import { Link } from "react-router-dom";

export const NotFoundScreen = () => {
  return (
    <div>
      <div>404 Not Found</div>
      <Link
        to={{
          pathname: "/contact",
        }}
      >
        Go to Contact
      </Link>
    </div>
  );
};
