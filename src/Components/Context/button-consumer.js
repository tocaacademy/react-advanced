import React from "react";
import { ThemeContext } from './provider'

class ThemedButton extends React.Component {
    render() {
        
        return(
          <ThemeContext.Consumer>
            {(context)=>{
              const {isLightTheme,light, dark}=context
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
          </ThemeContext.Consumer>
        )


    }
  }


  export default ThemedButton
