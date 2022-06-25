import CustomTextInput from "./Components/CustomInputWithRef";
import { IncrementNumber } from './Components/Hooks'

function App() {
  return (
    <div className="container">
      <CustomTextInput />
      <br/>
      <IncrementNumber number={5}/>

    </div>
  );
}

export default App;
