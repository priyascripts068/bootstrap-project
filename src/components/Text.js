import React , {useState} from 'react';

export default function Text(props) {
    const [text , setText]=useState('Enter your text');
    const onchangehandler=(event)=>{
        console.log(" handle on change");
        setText(event.target.value);
    }
    const textup=()=>{
        console.log("upper case");
        let uppercase= text.toUpperCase();
        setText(uppercase);
    }
    const textdown=()=>{
        let lowercase=text.toLowerCase();
        setText(lowercase);
    }
    const textclear=()=>{
        let newtext=" ";
        setText(newtext);
    }

  return (
    <>
    <div className="container" style={{color : props.mode==="dark" ? "white" : "black" } }>
    <div className="mb-3">
    <h1 className="my-3">{props.heading}</h1>
    <textarea className="form-control" id="exampleFormControlTextarea1" rows="10" value={text} onChange={onchangehandler} style={{color : props.mode==="dark" ? "white" : "black",backgroundColor : props.mode==="dark" ? "grey" : "white"} }></textarea>
    <button type="button" className="btn btn-primary my-3" onClick={textup}>UpperCase</button>
    <button type="button" className="btn btn-primary my-3 mx-2" onClick={textdown}>LowerCase</button>
    <button type="button" className="btn btn-primary my-3 mx-2" onClick={textclear}>Clear text</button>
    <div>
        {/* counting words and characters */}
        <div className="container my-3">
            <h3>Your text summary</h3>
            <p>{text.split(" ").length } words and {text.length} characters.</p>
            <p>{0.008*text.split(" ").length} minutes to read.</p>
        </div>
    </div>
    </div>
    </div>
    </>
  )
}
