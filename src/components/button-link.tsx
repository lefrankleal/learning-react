import { Link } from "react-router-dom";

type ButtonType = {
  to: string;
  name: string;
  state?: { [key: string]: unknown };
};

export const ButtonLink = ({
  to,
  name,
  state = {},
}: ButtonType): React.ReactElement => {
  return (
    <Link
      to={{ pathname: to }}
      state={state}
      className="bg-sky-300 hover:bg-green-300 p-2 rounded-md"
    >
      {name}
    </Link>
  );
};
