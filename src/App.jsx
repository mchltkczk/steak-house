import { Header } from "./components/Header/Header";
import { Slider } from "./components/Slider/Slider";
import { Partners } from "./components/Partners/Partners";
import { Ads } from "./components/Ads/Ads";
import "./styles/global.scss";

function App() {
  return (
    <>
      <Header />
      <Slider />
      <Partners />
      <Ads />
    </>
  );
}

export default App;
