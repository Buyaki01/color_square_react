import { useState } from "react";
import AddColor from "./AddColor";
import Square from "./Square";

function App() {
  const [colorName, setColorName] = useState('');
  const [hexValue, setHexValue] = useState(''); 

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="text-center text-4xl mt-5">Color Square</h1>
      </header>

      <Square 
        colorName={colorName}
        hexValue={hexValue}
      />

      <AddColor 
        colorName={colorName}
        setColorName={setColorName}
        setHexValue={setHexValue}
      />
    </div>
  );
}

export default App;
