import React from "react"
import cardIconSelector from "./utils/cardIconSelector"

function Card({status,title,children}){
    const cardIcon = cardIconSelector(status)
    return(
        <div className="card">
            {cardIcon}
            <h1>{title}</h1>
            <p>{children}</p>
        </div>
    )
}
export default Card