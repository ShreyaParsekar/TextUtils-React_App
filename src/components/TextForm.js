import React, {useState} from 'react'

export default function TextForm(props) {
    const [text, setText] = useState('');
    const handleUpClick = () => {
        let newtext = text.toUpperCase();
setText(newtext)
props.showalert("converted to uppercase","success")
    }

    const handleLowClick = () => {
        let newtext = text.toLowerCase();
setText(newtext)
props.showalert("converted to Lowercase","success")
    }

    const handleOnChange = (event) => {
setText(event.target.value);
    }
    const handleClearClick = () => {
      let newText = ""
      setText(newText)
      props.showalert("Cleared text","success")
    }

  //   const [daStyle, setDaStyle] = useState({
  //     color: "white",
  //     backgroundColor: "black"
  //   })
  
  //  const [btntext, setBtntext] = useState("Dark Mode")
  
  //   const toggleStle = () => {
  //     if ( daStyle.color === "white"){
  //       setDaStyle({
  //         color: "black",
  //     backgroundColor: "white"
  //       })
  //       setBtntext("Dark Mode")
  //     }
  //     else{
  //       setDaStyle({
  //         color: "white",
  //     backgroundColor: "black"
  //     })
  //     setBtntext("Light Mode")
  //   }
  // }
  return (
    
    <div className='mainContainer' style={{backgroundColor: props.mode === 'dark'? '#042743':'white',color: props.mode === 'dark'? 'white':'black'}} >
    <div className='container' >
      <div className="mx-5">
  <label htmlFor="exampleFormControlTextarea1" className="form-label"><h2>{props.heading}</h2></label>
  <textarea className="form-control" style={ { backgroundColor: props.mode === 'dark'? '#042743':'white', color: props.mode === 'dark'? 'white':'black' }}  value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="10"></textarea>
</div>
<button className="btn btn-primary mt-3 ms-5" onClick={handleLowClick}>Convert to LowerCase</button>
<button className="btn btn-primary mt-3 ms-5" onClick={handleUpClick} >Convert to UpperCase</button>
<button className="btn btn-primary mt-3 ms-5" onClick={handleClearClick} >Clear text</button>
{/* <button className="btn btn-primary mt-3 ms-5 " onClick={toggleStle}>{btntext}</button> */}
    </div>
    <div className="container ">
      <h2 className="ms-5 mt-3">Your text summary</h2>
      <p className="ms-5 mt-3">{text.split(" ").length} words and {text.length} characters</p>
      <p className="ms-5 mt-3">{0.008 * text.split(" ").length} minutes to read.</p>
      <h2 className="ms-5 mt-3">Preview</h2>
      <p className="ms-5 mt-3">{text.length>0? text:"Enter something in the textbox to preview it here."}</p>
       </div>
       </div>
       
  )
}
