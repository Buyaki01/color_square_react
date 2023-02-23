import colorNames from "colornames";

const AddColor = ({ colorName, setColorName, setHexValue }) => {
  return(
    <form onSubmit={(e) => e.preventDefault()}>
      <div className="text-center">
        <input 
          type="text" 
          placeholder="Add color name"
          className="border border-slate-400 rounded p-2 mt-3"
          required
          value={colorName}
          onChange={(e) => {
            setColorName(e.target.value);
            setHexValue(colorNames(e.target.value));
          }
          }
        />
      </div>
    </form>
  )
}

export default AddColor;
