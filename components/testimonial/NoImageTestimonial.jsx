import React from "react"
import Mark from "../../utils/Mark.png"
import { TestimonialContext } from "./TestimonialContext"

export default function NoImageTestimonial({children}){
    const {name,location} = React.useContext(TestimonialContext)
    return(
        <section className="testimonial2">
            <div className="testi-logo">
                <img src={Mark}/><h1><span style={{color:"#1F2937"}}>work</span><span style={{color:"#2E59F3"}}>cation</span></h1>
            </div>
            <p className="disc">{children}</p>
            <p className="avatar-details"><span className="avatar-name">{name}</span> / <span className="location">{location}</span></p>
            <div className="dot-pattern"></div>
        </section>
    )
}