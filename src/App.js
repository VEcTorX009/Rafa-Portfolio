import "./App.css";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Home from "./components/Home";
import Work from "./components/Work";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import { useState, useEffect } from "react";
import Spinner from "./components/Spinner";
import Footer from "./components/Footer";

function App() {
  const [mode, setMode] = useState("dark");
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#323437";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  };
  const Mouseon = () => {
    const el = document.querySelector("#module");
    el.addEventListener("mousemove", (e) => {
      el.style.backgroundPositionX = -e.offsetX + "px";
      el.style.backgroundPositionY = -e.offsetY + "px";
    });
  };
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return (
    <>
      <Router>
        {loading ? (
          <Spinner />
        ) : (
          <div
            className="svg"
            id="module"
            onMouseEnter={Mouseon}
            style={{
              backgroundImage: ` url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1600 900'%3E%3Cdefs%3E%3ClinearGradient id='a' x1='0' x2='0' y1='1' y2='0' gradientTransform='rotate(14,0.5,0.5)'%3E%3Cstop offset='0' stop-color='%230FF'/%3E%3Cstop offset='1' stop-color='%23CF6'/%3E%3C/linearGradient%3E%3ClinearGradient id='b' x1='0' x2='0' y1='0' y2='1' gradientTransform='rotate(123,0.5,0.5)'%3E%3Cstop offset='0' stop-color='%23F00'/%3E%3Cstop offset='1' stop-color='%23FC0'/%3E%3C/linearGradient%3E%3C/defs%3E%3Cg fill='%23FFF' fill-opacity='0' stroke-miterlimit='10'%3E%3Cg stroke='url(%23a)' stroke-width='15.839999999999998'%3E%3Cpath transform='translate(-102.55 12.799999999999999) rotate(5.15 1409 581) scale(0.9910929999999999)' d='M1409 581 1450.35 511 1490 581z'/%3E%3Ccircle stroke-width='5.28' transform='translate(-98.5 70) rotate(11.5 800 450) scale(1.016766)' cx='500' cy='100' r='40'/%3E%3Cpath transform='translate(32.599999999999994 100) rotate(105.5 401 736) scale(1.016766)' d='M400.86 735.5h-83.73c0-23.12 18.74-41.87 41.87-41.87S400.86 712.38 400.86 735.5z'/%3E%3C/g%3E%3Cg stroke='url(%23b)' stroke-width='4.8'%3E%3Cpath transform='translate(420 -8.999999999999998) rotate(2.2499999999999996 150 345) scale(0.9670309999999999)' d='M149.8 345.2 118.4 389.8 149.8 434.4 181.2 389.8z'/%3E%3Crect stroke-width='10.56' transform='translate(-175.5 -184.5) rotate(115.19999999999999 1089 759)' x='1039' y='709' width='100' height='100'/%3E%3Cpath transform='translate(-313.6 94.4) rotate(19.200000000000003 1400 132) scale(0.905)' d='M1426.8 132.4 1405.7 168.8 1363.7 168.8 1342.7 132.4 1363.7 96 1405.7 96z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          >
            <Navbar toggleMode={toggleMode} mode={mode} />
            <Routes>
              <Route exact path="/" element={<Home mode={mode} />}></Route>
              <Route exact path="/home" element={<Home mode={mode} />}></Route>
              <Route
                exact
                path="/about"
                element={<About mode={mode} />}
              ></Route>
              <Route exact path="/work" element={<Work mode={mode} />}></Route>
            </Routes>
            <Footer mode={mode} />
          </div>
        )}
      </Router>
    </>
  );
}

export default App;
