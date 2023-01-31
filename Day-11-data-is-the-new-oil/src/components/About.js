// import React from "react";
import {Component} from "react";
import { Outlet } from "react-router-dom";
import ProfileFunctionalComponent from "./Profile";
import Profile from "./ProfileClass";

// const About4 = () => {
//     return (
//         <div>
//             <h1>About us page</h1>
//             <p>This is about us page.</p>
//             {/* <Outlet /> */}
//             <ProfileFunctionalComponent name={"Santosh Kumar function"} />
//             <Profile name={"Santosh Kumar class"} />
//         </div>
//     )
// }

class About extends Component {
    constructor(props){
        super(props);
        console.log('Parent-constructor');
    }
    componentDidMount(){
        console.log('Parent-componentdidmount');
    }
    render(){
        console.log('Parent-render');
        return (
            <div>
                <h1>About us page</h1>
                <p>This is about us page.</p>
                {/* <Outlet /> */}
                <ProfileFunctionalComponent name={"Santosh Kumar function"} />
                <Profile name={"Santosh Kumar class"} />
            </div>
        )
    }
}

export default About;