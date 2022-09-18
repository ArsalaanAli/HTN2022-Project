import "./App.css";
import Dectector from "./Detector";
import Login from "./Login";
import { React, useState, useEffect } from "react";

function App() {
  const [currentPage, setCurrentPage] = useState("home");
  useEffect(() => {}, [currentPage]);

  if (currentPage === "home") {
    return (
      <div>
        <Home setCurrentPage={setCurrentPage} />
      </div>
    );
  }
  if (currentPage === "login") {
    return <Login />;
  }
}

export default App;

/*
    if ("geolocation" in navigator) {
      console.log("Available");
      navigator.geolocation.getCurrentPosition((pos) => {
        console.log(pos);
      });
    } else {
      console.log("Not Available");
    }
*/
