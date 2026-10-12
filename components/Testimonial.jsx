import React from "react"
import { RiDoubleQuotesL } from "react-icons/ri";

function Testimonial(){
    return(
        <section className="testimonial">
            <div className="avatar-container" style={{backgroundImage:`url(${"../utils/avatar.jpg"})`}}>
            </div>
            <div className="testimonial-contents">
            <RiDoubleQuotesL className="testi-quote"/>
            <p className="disc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna nulla vitae laoreet augue. Amet feugiat est integer dolor auctor adipiscing nunc urna, sit. </p>
            <span className="avatar-name">May Andersons</span>
            <span className="location">Workcation, CTO</span>
            </div>
        </section>
    )
}
export default Testimonial