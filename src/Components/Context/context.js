import React, {Component, createContext} from "react";
import Toolbar from "./toolbar";

import { ThemeContextProvider } from "./provider";


export class Contexto extends Component {
  render() {
    return (
        <ThemeContextProvider>
            <Toolbar />
        </ThemeContextProvider>
    );
  }
}

