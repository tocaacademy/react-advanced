import React from "react";
import { ThemeContext } from './context'

class ThemedButton extends React.Component {
    // static contextType = ThemeContext;
    render() {
        return(
            <ThemeContext.Consumer >
                {(theme)=>{
                    console.log("Them",theme)
                    return (
                        <button style={{background: theme, border:"2px solid black", color:"white"}} >
                        Theme Button
                      </button>
                    )
                }
                }
            </ThemeContext.Consumer>
        )
    }
  }


  export default ThemedButton
