import React from "react"
import { HiOutlineCloudUpload } from "react-icons/hi";
import { IoMdArrowRoundUp } from "react-icons/io";
import { IoMdArrowRoundDown } from "react-icons/io";


export default function cardIconSelector(status){
    switch(status){
        case "deployment":
            return(<div className="card-icon" style={{backgroundColor:"#3F75FE",color:"white"}}>
                            <HiOutlineCloudUpload />
                    </div>)
        case "update":
            return(<div className="card-icon" style={{backgroundColor:"#3F75FE",color:"white"}}>
                            <IoMdArrowRoundUp />
                    </div>)
        case "install":
            return(<div className="card-icon" style={{backgroundColor:"#3F75FE",color:"white"}}>
                            <IoMdArrowRoundDown />
                    </div>)
    }
}