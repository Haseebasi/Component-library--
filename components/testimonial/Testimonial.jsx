import React from "react"
import NoImageTestimonial from "./NoImageTestimonial"
import ImageTestimonial from "./ImageTestimonial"
import { TestimonialContext } from "./TestimonialContext"

function Testimonial({ children, img, name, location }) {
    return (
        <TestimonialContext.Provider value={{ img, name, location }}>
            {img ? (
                <ImageTestimonial>{children}</ImageTestimonial>
            ) : (
                <NoImageTestimonial>{children}</NoImageTestimonial>
            )}
        </TestimonialContext.Provider>
    )
}

export default Testimonial