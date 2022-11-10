import Download from "../components/download/download";
import Footer from "../components/footer/footer";
import Hero from "../components/hero/hero";
import InputBar from "../components/input/input";
import Keunggulan from "../components/keunggulan/keunggulan";
import Layouts from "../components/layouts/layouts";
import Prosedur from "../components/prosedur/prosedur";
import Testimonial from "../components/testimonial/testimonial";

export default function Home() {
  return (
    <Layouts>
      <Hero />
      <InputBar />
      <Keunggulan />
      <Prosedur />
      <Testimonial />
      <Download />
      <Footer />
    </Layouts>
  );
}
