import React, { useState } from 'react'



export default function TextFrom(props) {



    const handelUpClick = () => {
        // console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to uppercase!", "success");

    }
    const handelDnClick = () => {
        let lowText = text.toLowerCase();
        setText(lowText)
        props.showAlert("Converted to lowerCase!", "success");
    }

    const handelCopyClick = () => {
        navigator.clipboard.writeText(text)
        props.showAlert("copy to clipBoard!", "success");
    }


    const handelOnChange = (event) => {
        setText(event.target.value)
    }

    const speak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
        props.showAlert("speaking start now", "success");

        // setText(text.split('').reverse().join(''))
    }

    const [text, setText] = useState('');
    // text = "new te3xt " // wrong way to change the state 
    //   setText("new text"); // correct way to change the state 
    return (
        <>
            <div className="container" style={{ color: props.mode === 'dark' ? 'white' : '#072648' }}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} style={{ backgroundColor: props.mode === 'dark' ? 'gray' : 'white', color: props.mode === 'dark' ? 'white' : '#072648' }} onChange={handelOnChange} id="myBox" rows="7"></textarea>
                    <button className="btn btn-primary my-2" onClick={handelUpClick}>Convert To UpperCase</button>
                    <button className="btn btn-primary mx-2 " onClick={handelDnClick}>Convert To LowerCase</button>
                    <button className="btn btn-primary mx-2 " onClick={handelCopyClick}>Copy text</button>
                    <button className="btn btn-primary mx-2 my-2" onClick={speak}>Speak</button>

                </div>
            </div>
            <div className="container my-2" style={{ color: props.mode === 'dark' ? 'white' : '#072648' }}>
                <h1>Your Text Summary</h1>
          
                <p> { text.split(" ").length} words and {text.replace(/\s/g, "").length} characters</p>
                <p> {0.008 * text.split(" ").length} Minutes read </p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Enter something to preview it here"}</p>
            </div>
        </>
    )
}

