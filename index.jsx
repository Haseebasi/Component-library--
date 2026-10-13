import React from 'react';
import ReactDOM from 'react-dom/client';
import Menu from "./components/Menu/index"
import Star from "./components/Star"
import Badge from "./components/Badge"
import Banner from "./components/Banner"
import Card from "./components/Card"
import Testimonial from "./components/testimonial/Testimonial"
import avatar from "./utils/avatar.jpg"
function App() {
  return (
    <>
    <h1>Your components go here</h1>
    <Banner status="congrats" title="Congratulations"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo totam eius aperiam dolorum.</Banner>
    <Card status="deployment" title="Easy Deployment">Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.</Card>
    <Testimonial img={avatar} name={"May Andersons"} location={"Workcation, CTO"}>“Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias molestiae. Numquam corrupti in laborum sed rerum et corporis.”</Testimonial>
    </>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
