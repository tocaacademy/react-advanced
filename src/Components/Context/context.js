import React, {Component, createContext} from "react";
import Toolbar from "./toolbar";

export const ThemeContext = createContext('red');

export class Contexto extends Component {
  render() {
    return (
      <ThemeContext.Provider value="black">
        <Toolbar />
      </ThemeContext.Provider>
    );
  }
}

