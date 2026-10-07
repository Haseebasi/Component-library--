import React from "react"
import { FaCheckCircle } from "react-icons/fa"; //congrats //<FaCheckCircle />
import { FaTriangleExclamation } from "react-icons/fa6"; //warning
import { FaCircleXmark } from "react-icons/fa6"; //error 
import { BsFillInfoCircleFill } from "react-icons/bs"; //update

function Banner(){
    return(
        <div className="banner">
            <FaCheckCircle style={{color:"#34D399"}}/>
            <div>
            <h1>Congratulations</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.</p>
            </div>
        </div>
    )
}
export default Banner
