import "./styles/components/app.sass";
import Sidebar from "./componenets/Sidebar";
import MainContent from "./componenets/MainContent";
import { useState } from "react";

function App() {
  return (
    <div id="portfolio">
      <h1>Mikael Kobama</h1>
      <Sidebar/>
      <MainContent/>
    </div>
  );
}

export default App;
