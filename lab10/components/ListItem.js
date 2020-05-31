import React from "react"

function ListItem(props){
    return (
        <div className="listitem">
            <label>
                <input 
                type="checkbox" 
                checked={props.checked}
                onChange={() => props.handleChange(props.id)}/>
                <span id="itemtext"> {props.text}</span>
            </label>
        </div>
    )
}

export default ListItem