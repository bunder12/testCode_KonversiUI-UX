import React from "react";
import Navbar from "../navbar/navbar";

export default function Layouts(props) {
  const { children, refBeranda, refKeunggulan, refFitur, refTestimoni } = props;

  return (
    <div>
      <Navbar
        refBeranda={refBeranda}
        refKeunggulan={refKeunggulan}
        refFitur={refFitur}
        refTestimoni={refTestimoni}
      />
      <div>{children}</div>
    </div>
  );
}
