import { Link } from "react-router-dom";
import { Button, Select } from "../components";

type DataType = Partial<{}> & {
  id: number;
  name: string;
  options: Array<{
    id: number;
    long: string;
    lat: string;
  }>;
};

export const HomeScreen = () => {
  const data: Array<DataType> = [
    {
      id: 1,
      name: "ubicacion_casa",
      options: [
        { id: 1, lat: "6.238681746758866", long: "-75.58558708385034" },
        { id: 1, lat: "6.238681746758866", long: "-75.58558708385034" },
        { id: 1, lat: "6.238681746758866", long: "-75.58558708385034" },
        { id: 1, lat: "6.238681746758866", long: "-75.58558708385034" },
        { id: 1, lat: "6.238681746758866", long: "-75.58558708385034" },
        { id: 1, lat: "6.238681746758866", long: "-75.58558708385034" },
        { id: 1, lat: "6.238681746758866", long: "-75.58558708385034" },
        { id: 1, lat: "6.238681746758866", long: "-75.58558708385034" },
      ],
    },
    {
      id: 2,
      name: "ubicacion_trabajo",
      options: [
        { id: 1, lat: "6.238681746758866", long: "-75.58558708385034" },
      ],
    },
    {
      id: 3,
      name: "ubicacion_casa_padres",
      options: [
        { id: 1, lat: "6.238681746758866", long: "-75.58558708385034" },
      ],
    },
    {
      id: 4,
      name: "ubicacion_casa_novia",
      options: [
        { id: 1, lat: "6.238681746758866", long: "-75.58558708385034" },
      ],
    },
    {
      id: 5,
      name: "ubicacion_casa_perro",
      options: [
        { id: 1, lat: "6.238681746758866", long: "-75.58558708385034" },
      ],
    },
    {
      id: 6,
      name: "ubicacion_casa_tia",
      options: [
        { id: 1, lat: "6.238681746758866", long: "-75.58558708385034" },
      ],
    },
  ];
  return (
    <div>
      <div>Home</div>
      {data.map((val, index) => (
        <Select
          key={`locations-${val.id}-${index}`}
          name={val.name}
          className={{
            containerClasses: "w-full bg-amber-300",
          }}
          options={val.options.map((opt) => ({
            label: `${opt.lat}, ${opt.long}`,
            value: opt.id,
          }))}
        />
      ))}

      <Button name="Go to Contact" to="/contact" />
      <Button name="Go to About" to="/about" state={{ test: "New button" }} />
    </div>
  );
};
