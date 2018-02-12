import React from "react";

const Actor = ({ name, film }) => (
  <div className="container">
    <span className="name">{name}</span> -&nbsp;
    <span className="film">
      <i>{film}</i>
    </span>
  </div>
);

export default Actor;
