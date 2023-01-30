import React from "react";
import './app.css'

// Components
import CharacterList from "./components/CharacterList";
import Logo from "./assets/Logo.png"

function App() {
  return (
    <>
        <img className="logo" src={Logo} alt="" />
        <CharacterList />
    </>
  );
}

export default App;
