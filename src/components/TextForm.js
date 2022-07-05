import React, {useState} from 'react'

export default function TextForm(props) {

    const handleUpClick = () =>{
       // console.log("Uppercase was clicked");
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleLoClick = () =>{
        let newtext2 = text.toLowerCase();
        setText(newtext2);
    }

    const handleClClick = () =>{
        let newtext3 = " ";
        setText(newtext3);
    }

    const handleOnChange = (event) =>{
        setText(event.target.value); 
    }

    const [text, setText] = useState(" "); 
    // console.log(text);
    // text="ageagewg" This is wrong, the right way is -
    // setText(ageagewg)

  return (
    <>
    <div className='container' style={{color: props.mode==="dark"?"white":"black"}}>
        <h2>{props.heading}</h2>
        <div className="mb-3">
            <textarea className="form-control" onChange={handleOnChange} value={text} 
            style={{backgroundColor: props.mode==="light"?"white":"black", color: props.mode==="dark"?"white":"black"}} id="myBox" rows="8"></textarea>
         </div>
         <buton className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</buton>
         <buton className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</buton>
         <buton className="btn btn-primary mx-2" onClick={handleClClick}>Clear Text</buton>

    </div> 
    <br/>
    <div className="container" style={{color: props.mode==="dark"?"white":"black"}}>
        <h2>Your text Summary</h2>
        <p>{text.split(" ").length} words {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something in the textbox to preview it here"}</p>
    </div>
    </>
  )
}
