import { useState } from "react";
import AddColor from "./AddColor";
import Square from "./Square";

function App() {
  const [colorName, setColorName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('submitted');
    if (!colorName) return;
    
    setColorName(''); 
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="text-center text-4xl mt-5">Color Square</h1>
      </header>

      <Square 
        colorName={colorName}
        setColorName={setColorName}
      />

      <AddColor 
        colorName={colorName}
        setColorName={setColorName}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}

export default App;
