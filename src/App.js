import Home from "./pages/home/Home";
import Radio from "./pages/radio/Radio";
import RadioSez from "./pages/radio/RadioSez";
import RadioIdk from "./pages/radio/RadioIdk";
import Prto from "./pages/prto/Prto";
import Eco from "./pages/eco/Eco";
import EcoHealth from "./pages/eco/EcoHealth";
import EcoSzz from "./pages/eco/EcoSzz";
import EcoZso from "./pages/eco/EcoZso";
import EcoWaste from "./pages/eco/EcoWaste";
import Priemka from "./pages/priemka/Priemka";
import Pat from "./pages/pat/Pat";
import About from "./pages/about/About";
import Lab from "./pages/about/Lab";
import Inspection from "./pages/about/Inspection";
import PrtoSez from "./pages/prto/PrtoSez";
import HomeAdm from "./pages/home/HomeAdm";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="radio">
              <Route index element={<Radio />} />
              <Route path="sez" element={<RadioSez />} />
              <Route path="idk" element={<RadioIdk />} />
            </Route>
            <Route path="prto">
              <Route index element={<Prto />} />
              <Route path="sez" element={<PrtoSez />} />
            </Route>
            <Route path="pat">
              <Route index element={<Pat />} />
            </Route>
            <Route path="eco">
              <Route index element={<Eco />} />
              <Route path="health" element={<EcoHealth />} />
              <Route path="szz" element={<EcoSzz />} />
              <Route path="waste" element={<EcoWaste />} />
              <Route path="zso" element={<EcoZso />} />
            </Route>
            <Route path="about">
              <Route index element={<About />} />
              <Route path="lab" element={<Lab />} />
              <Route path="inspection" element={<Inspection />} />
            </Route>
            <Route path="priemka" element={<Priemka />} />
            <Route path="admin">
              <Route path="index" element={<HomeAdm />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
