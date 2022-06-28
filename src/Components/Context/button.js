import React from "react";
import { ThemeContext } from './provider'

class ThemedButton extends React.Component {
    static contextType = ThemeContext;
    render() {
        const {isLightTheme,light, dark}=this.context
        const theme=isLightTheme?light:dark
                return (
                    <button style={{background: theme.ui, 
                                    border:"2px solid black", 
                                    color:theme.syntax}} >
                    Theme Button
                    </button>
                )
            }
  }


  export default ThemedButton
