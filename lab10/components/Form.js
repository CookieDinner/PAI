import React from "react"

function Form(props){
    return (
        <div className="addform">    
            <input type="textbox" onChange={props.updateText}/>
            <button onClick={props.addItem}>Add</button>
        </div>
    )
}

export default Form