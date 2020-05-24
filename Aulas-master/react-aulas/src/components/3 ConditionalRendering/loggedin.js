import React from "react";

const logged = false;

export const LoggedIn = () => {
  return (
    <>{logged === true ? <h1>Estou loggado</h1> : <h1>Nao estou loggado</h1>}</>
  );
};
