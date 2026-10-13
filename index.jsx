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

    <Badge color="grey">Badge</Badge>
    <Badge color="red">Badge</Badge>
    <Badge color="yellow">Badge</Badge>
    <Badge color="green">Badge</Badge>
    <Badge color="blue">Badge</Badge>
    <Badge color="indigo">Badge</Badge>
    <Badge color="purple">Badge</Badge>
    <Badge color="pink">Badge</Badge>
    
    <Banner status="congrats" title="Congratulations"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo totam eius aperiam dolorum.</Banner>
    <Banner status="congrats" title="congratulations"/>
    <Banner status="warning" title="Attention"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo totam eius aperiam dolorum.</Banner>
    <Banner status="warning" title="Attention"/>
    <Banner status="error" title="There is a problem with your application"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo totam eius aperiam dolorum.</Banner>
    <Banner status="error" title="There is a problem with your application"/>
    <Banner status="info" title="update available"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo totam eius aperiam dolorum.</Banner>
    <Banner status="info" title="update available"/>



    <Card status="deployment" title="Easy Deployment">Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.</Card>
    <Card status="update" title="Easy Update">Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.</Card>
    <Card status="install" title="Easy Installing">Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.</Card>


    <Testimonial img={avatar} name={"May Andersons"} location={"Workcation, CTO"}>“Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias molestiae. Numquam corrupti in laborum sed rerum et corporis.”</Testimonial>
    <Testimonial name={"May Andersons"} location={"Workcation, CTO"}>“Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias molestiae. Numquam corrupti in laborum sed rerum et corporis.”</Testimonial>
    </>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
