import { useState } from "react";

export interface SugusProps {
  name: string;
  color: string;
}

type ColorKey = "red" | "green" | "blue" | "yellow" | "purple";

export const Sugus = ({ name, color }: SugusProps) => {
  const [contador, setContador] = useState(0);
  const [colorSeleccionado, setColorSeleccionado] = useState<ColorKey>(
    color as ColorKey,
  );

  const colors: ColorKey[] = ["red", "green", "blue", "yellow", "purple"];

  const colorClasses: Record<ColorKey, string> = {
    red: "bg-red-500",
    green: "bg-green-500",
    blue: "bg-blue-500",
    yellow: "bg-yellow-500",
    purple: "bg-purple-500",
  };

  const handleDecrement = () => {
    if (contador > 0) {
      setContador(contador - 1);
    }
  };

  return (
    <>
      {contador === 0 && (
        <div className="bg-red-800 text-white p-2">
          <p>No se puede menor que uno</p>
        </div>
      )}

      <div
        className={`${colorClasses[colorSeleccionado]} px-4 py-2 rounded text-white`}
      >
        {name} - {colorSeleccionado}
      </div>

      <p>Has pulsado {contador}</p>

      <div className="grid grid-cols-2 gap-5">
        <button
          onClick={() => setContador(contador + 1)}
          className="bg-blue-500 text-white px-4 py-2 rounded mt-2"
        >
          Pulsar +
        </button>

        <button
          onClick={handleDecrement}
          className="bg-red-500 text-white px-4 py-2 rounded mt-2"
        >
          Pulsar -
        </button>
      </div>

      {colors.map((colorOption) => (
        <button
          key={colorOption}
          onClick={() => setColorSeleccionado(colorOption)}
          className={`${colorClasses[colorOption]} text-white px-4 py-2 rounded mt-2 ml-2`}
        >
          {colorOption}
        </button>
      ))}
    </>
  );
};
