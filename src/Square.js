const Square = ({colorName, setColorName}) => {
  return(
    <div className="squareContainer mt-5">
      <div className="square m-3"> 
        <form>
          <div className="text-center square-input-container">
            <input 
              type="text" 
              placeholder="Empty Value"
              className="text-center square-input"
              value={colorName}
              onChange={(e) => setColorName(e.target.value)}
            />
          </div>
        </form>
      </div>
    </div>
  )
}

export default Square;
