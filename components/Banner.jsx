import React from "react"
import { FaCheckCircle } from "react-icons/fa"; //congrats //<FaCheckCircle />
import { FaTriangleExclamation } from "react-icons/fa6"; //warning
import { FaCircleXmark } from "react-icons/fa6"; //error 
import { BsFillInfoCircleFill } from "react-icons/bs"; //update
import clsx from 'clsx'

function Banner({status,title,children}){
    let icon = ""
    function iconChoose(){
        switch (status){
            case "congrats":
                return(<FaCheckCircle style={{color:"#34D399"}}/>)
                break
            case "warning":
                return(<FaTriangleExclamation style={{color:"#FBBF24"}}/>)
                break
            case "error":
                return(<FaCircleXmark style={{color:"#F87171"}}/>)
                break
            case "info":
                return(<BsFillInfoCircleFill style={{color:"#60A5FA"}}/>)
                break
        }
    }
    icon = iconChoose()
    return(
        <div className={clsx("banner",
            status === "congrats" && "congrats",
            status === "warning" && "warning",
            status === "error" && "error",
            status === "info" && "info"

    )}>
            {icon}
            <div>
            <h1>{title}</h1>
            <p>{children}</p>
            </div>
        </div>
    )
}
export default Banner
