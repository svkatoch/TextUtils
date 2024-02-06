import React, { useState } from 'react'


export default function TextForm(props) {
    const handleUpClick = () => {
        let newtext = text.toUpperCase();
        setText(newtext);
        props.showAlert("Converted to UpperCase","success");
    }
    const handleOnchange = (event) => {
        setText(event.target.value);
       
    }

    const handlecopy = () => {
        console.log("I am copy");
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text Copied!","success");
    }

    const handlespaces = () =>{
        let newText= text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Text Cleared!!","success");
    }

    

    const [text, setText] = useState('Enter Text Here');

    return (
        <>

            <div className='container' style={{color:props.mode === 'dark' ? 'white' : '#212529'}} >
                <div className="mb-3 my-3">
                    <h2>{props.heading}</h2>
                    <textarea className="form-control" id="myBox" value={text} onChange={handleOnchange} style={{backgroundColor:props.mode === 'dark' ? 'grey' : 'white', color:props.mode === 'dark' ? 'white' : 'black'}} rows="8"></textarea>
                </div>
                <button className=" btn btn-primary m-3" onClick={handleUpClick}>Convert to UpperCase</button>
                <button className=" btn btn-primary m-3" onClick={handlecopy}>Copy Text</button>
                <button className=" btn btn-primary m-3" onClick={handlespaces}>Remove Extra Spaces</button>
            </div>
            <div className="container my-3 mb-3 " style={{color:props.mode === 'dark' ? 'white' : 'black'}}>
                <h2><b>Your text summary</b></h2>
                <p>{text.split(".").length} sentences, {text.split(" ").length} words, {text.length} characters</p>
                <h3>Preview</h3>
                <p>{text.length>0?text:"Enter some text in the box."}</p>
            </div>
        </>
    )
}
