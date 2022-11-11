import React, { useRef } from "react";
import Download from "../components/download/download";
import Footer from "../components/footer/footer";
import Hero from "../components/hero/hero";
import InputBar from "../components/input/input";
import Keunggulan from "../components/keunggulan/keunggulan";
import Layouts from "../components/layouts/layouts";
import Prosedur from "../components/prosedur/prosedur";
import Testimonial from "../components/testimonial/testimonial";

export default function Home() {
  const refBeranda = useRef(null);
  const refKeunggulan = useRef(null);
  const refFitur = useRef(null);
  const refTestimoni = useRef(null);

  return (
    <Layouts
      refBeranda={refBeranda}
      refKeunggulan={refKeunggulan}
      refFitur={refFitur}
      refTestimoni={refTestimoni}
    >
      <Hero refBeranda={refBeranda} />
      <InputBar />
      <Keunggulan refKeunggulan={refKeunggulan} />
      <Prosedur refFitur={refFitur} />
      <Testimonial refTestimoni={refTestimoni} />
      <Download />
      <Footer />
    </Layouts>
  );
}
