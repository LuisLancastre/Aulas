import React from "react";

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export const Lista = () => {
  const items = numeros.map((numeros, index) => (
    <li key={`$(index)-$(numeros)`}>{numeros}</li>
  ));
  return (
    <>
      <h1>Lista</h1>
      <ul>{items}</ul>
    </>
  );
};
