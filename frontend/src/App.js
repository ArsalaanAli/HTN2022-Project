import "./App.css";
import Home from "./Home";
import Login from "./Login";
import { React, useState, useEffect } from "react";

function App() {
  const [currentPage, setCurrentPage] = useState("home");
  useEffect(() => {
    if ("geolocation" in navigator) {
      console.log("Available");
      navigator.geolocation.getCurrentPosition((pos) => {
        console.log(pos);
      });
    } else {
      console.log("Not Available");
    }
  }, [currentPage]);

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
