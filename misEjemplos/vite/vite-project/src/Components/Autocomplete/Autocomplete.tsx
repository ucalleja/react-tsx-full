import React, { useState, useEffect } from "react";

const Autocomplete = () => {
  const [nombre, setNombre] = useState<string>("");
  const [cocktails, setCocktails] = useState<Cocktail[]>([]);
  const [listCocktails, setListCocktails] = useState<JSX.Element[]>([]);

  useEffect(() => {
    if (nombre.length > 3) {
      fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${nombre}`,
      )
        .then((resp) => resp.json())
        .then(({ drinks }) => {
          setCocktails(() => drinks || []);
        });
    }
  }, [nombre]);

  interface Cocktail {
    idDrink: string;
    strDrink: string;
  }

  const AddListCocktails = () => {
    setListCocktails((prev) => [
      ...prev,
      <li key={cocktails.length}>{nombre}</li>,
    ]);
  };

  const listaCocktails = cocktails.map((c: Cocktail) => (
    <li onClick={() => AddListCocktails()} key={c.idDrink}>
      {c.strDrink}
    </li>
  ));

  return (
    <>
      <div>
        <input
          className="border border-white p-2"
          type="text"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
        <ul>{listaCocktails}</ul>
      </div>

      <ul></ul>
    </>
  );
};

export default Autocomplete;
