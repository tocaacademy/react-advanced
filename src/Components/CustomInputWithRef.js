import {Component, createRef} from 'react'


class CustomTextInput extends Component {
  constructor(props) {
    super(props);
    // Crea una referencia para guardar el elemento textInput del DOM
    this.textInput = createRef();
    this.focusTextInput = this.focusTextInput.bind(this);
  }

  focusTextInput() {
    // Hace enfoque explícitamente del campo de texto, haciendo uso de un API del DOM
    // Nota: Estamos accediendo la propiedad "current" para obtener el nodo del DOM
    this.textInput.current.focus();

    console.log(this.textInput.current.value)
  }

  render() {
    // Informa a React de que queremos agregar la referencia `textInput` que creamos
    // en el constructor a la etiqueta <input>
    return (
      <div>
        <input
          type="text"
          ref={this.textInput} />
        <input
          type="button"
          value="Focus the text input"
          onClick={this.focusTextInput}
        />
      </div>
    );
  }
}

export default CustomTextInput