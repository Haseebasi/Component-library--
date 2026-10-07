import React from "react"
import chooseColor from "../hooks/chooseColor"
function Badge({ color = "grey", children = "badge" }) {
    return (
        
            <span className="badge" style={chooseColor(color)}>
                {children}
            </span>
    )
}

export default Badge