import React from "react"
import { RiDoubleQuotesL } from "react-icons/ri";
import { TestimonialContext } from "./TestimonialContext"



export default function ImageTestimonial({children}){
    const {img,name,location} = React.useContext(TestimonialContext)
    return(
        <section className="testimonial1">
            <div className="avatar-container" style={{backgroundImage:`url(${img})`}}>
            </div>
            <div className="testimonial-contents">
            <RiDoubleQuotesL className="testi-quote"/>
            <p className="disc">{children}</p>
            <span className="avatar-name">{name}</span>
            <span className="location">{location}</span>
            </div>
        </section>
    )
}