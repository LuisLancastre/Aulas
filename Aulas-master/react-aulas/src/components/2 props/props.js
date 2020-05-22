import React from "react";

export const Propriedades = (props) => {
  return (
    <>
      <h1>{props.texto}</h1>
      <p style={{ color: props.cor }}> Paragrafo</p>
    </>
  );
};
