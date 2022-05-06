type SelectProps = Partial<{
  required: boolean;
  className: Partial<{
    containerClasses: string;
    selectClasses: string;
    optionClasses: string;
  }>;
}> & {
  name: string;
  options: Array<SelectOptionType>;
};

type SelectOptionType = {
  label: string;
  value: string | number;
};

export const Select = ({
  name,
  options,
  required = false,
  className,
}: SelectProps): React.ReactElement => {
  return (
    <div className={className?.containerClasses}>
      <label htmlFor={name}>{name}</label>
      <select
        name={name}
        id={name}
        required={required}
        className={className?.selectClasses}
      >
        <option value="">Seleccione una opcion</option>
        {options.map((option, index) => (
          <option value={option.value}>{option.label}</option>
        ))}
      </select>
    </div>
  );
};
