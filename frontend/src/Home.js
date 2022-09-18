import React from "react";
import "./Home.css";

function Home(props) {
  return (
    <div className="home">
      <h1>Is Your Head Ouchie Wowchie?</h1>
      <button
        onClick={() => {
          props.setCurrentPage("login");
        }}
      >
        Login
      </button>
    </div>
  );
}

export default Home;
