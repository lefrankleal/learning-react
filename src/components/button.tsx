type ButtonType = Partial<{
  className: Partial<{
    buttonClasses: string;
    iconClasses: string;
  }>;
  disabled: boolean;
  type: "submit" | "button";
  icon: React.ReactElement;
  onClick: () => void;
}> & {
  id: string;
  name: string;
  children: React.ReactNode;
};

export const Button = ({
  children,
  className,
  disabled = false,
  icon,
  id,
  name,
  onClick,
  type = "submit",
}: ButtonType): React.ReactElement => {
  return (
    <button
      type={type}
      className={`bg-lime-500 grid grid-cols-5 rounded-md py-2 px-2 hover:bg-sky-500 ${
        className?.buttonClasses ? className?.buttonClasses : ""
      }`}
      disabled={disabled}
      onClick={onClick ? onClick : () => {}}
    >
      {icon ? (
        <div
          className={`h-full justify-center items-center flex ${
            className?.iconClasses ? className?.iconClasses : ""
          }`}
        >
          {icon}
        </div>
      ) : null}
      <div className="col-span-4 text-white">{children}</div>
    </button>
  );
};
