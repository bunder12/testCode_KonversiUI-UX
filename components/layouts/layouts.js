import React from "react";
import Navbar from "../navbar/navbar";

export default function Layouts(props) {
  const { children } = props;

  return (
    <div>
      <Navbar />
      <div>{children}</div>
    </div>
  );
}
