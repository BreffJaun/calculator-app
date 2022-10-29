const Display = ({value, commafy}) => {
  
  return (
    <div className="display">
      {commafy(value)}       
    </div>
  )
}


export default Display;