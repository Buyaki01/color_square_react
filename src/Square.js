const Square = ({colorName}) => {
  return(
    <div className="squareContainer mt-5">
      <div style={{backgroundColor: colorName}} className="square m-3 border border-black-600"> 
          <div className="text-center square-input-container">
            <p
              style={{ backgroundColor: colorName }}
              className="text-center square-input"
            >
              {colorName ? colorName : "Empty Value"}
            </p>
          </div>
    
      </div>
    </div>
  )
}

export default Square;
