import React from 'react';
import './App.scss';
import NavBar from "./components/NavBar/index";
import Jumbotron from "./components/Jumbotron/index";
import Card from "./components/Card/index";

function App() {
  return ([
      <NavBar />,
      <Jumbotron />,
      <Card />
  ]);
}

export default App;
