const AddColor = ({ colorName, setColorName, handleSubmit }) => {
  return(
    <form onSubmit={handleSubmit}>
      <div className="text-center">
        <input 
          type="text" 
          placeholder="Add color name"
          className="border border-slate-400 rounded p-2 mt-3"
          value={colorName}
          onChange={(e) => setColorName(e.target.value)}
        />
      </div>
    </form>
  )
}

export default AddColor;
