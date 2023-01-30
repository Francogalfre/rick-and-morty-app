import React from "react";

// Css
import "./app.css";

// Components
import CharacterList from "./components/CharacterList";
import Logo from "./assets/Logo.png";

function App() {
  return (
    <>
      <img className="logo" src={Logo} alt="Rick and Morty Logo" />
      <CharacterList />
    </>
  );
}

export default App;
