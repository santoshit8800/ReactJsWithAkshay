import React from "react";
import ReactDOM from "react-dom/client";
// import Header from "./components/Header";
// import {Title, Header} from "./components/Header"
// import * as abc from "./components/Header"
// import Header, {Title} from "./components/Header"
import Header from "./components/Header"
import Body from "./components/Body"
import Footer from "./components/Footer"



// Composing Components
const burgerKing = {
  name: "Burder King",
  image: "https://lh3.googleusercontent.com/p/AF1QipNZCXWLqGecr7aGdFq2gvZWHJ6MrH3KWBFTm15E=w1080-h608-p-no-v0",
  cusines: ["Burger", "Americal"],
  rating: "4.2",
}


// const styleObj = {
//   backgroundColor: "red",
// }
// const jsx = (
//   // <div style={styleObj}>
//   <div style={
//     {
//       backgroundColor: "red",
//     }
//   }>
//     <h1>jsx</h1>
//     <h2>h2</h2>
//   </div>
// )

const AppLayout = () => {
  return(
    <div className="wrapper">
      
      <Header />
      <Body />
      <Footer />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

//passing a react element inside the root

//async defer
root.render(<AppLayout />);
