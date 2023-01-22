import "./App.css";
import About from "./Components/About";
import Navbar from "./Components/Navbar";
import Textdata from "./Components/Textdata";
import React, { useState } from "react";
import Alert from "./Components/Alert";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const showalert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setInterval(() => {
      setAlert(null);
    }, 3000);
  };
  const togglemode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      document.body.style.color = "white";
      showalert("Dark Mode Enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      showalert("Light Mode Enabled", "success");
    }
  };
  return (

    <>
      <Router>
        <Navbar
          title="TextUtlies"
          About="About"
          mode={mode} n
          togglemode={togglemode}
        />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route path='/About' element={<About mode={mode} />} />
            <Route path='/' element={<Textdata
              showalert={showalert}
              heading="Enter the text to analyze below:"
              mode={mode}
            />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
