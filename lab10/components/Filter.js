import React from "react"

function Filter (props){
    return (
        <div className="hidebox">
            <label>
                <input type="checkbox" checked={props.checked}
                    onChange={() => props.handleChange()}/>
                <span> Hide completed</span>
            </label>
        </div>
    )
}

export default Filter