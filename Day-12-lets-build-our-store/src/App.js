import React, { lazy, Suspense, useState } from "react";
import ReactDOM from "react-dom/client";
// import Header from "./components/Header";
// import {Title, Header} from "./components/Header"
// import * as abc from "./components/Header"
// import Header, {Title} from "./components/Header"
import Header from "./components/Header"
import Body from "./components/Body"
import Footer from "./components/Footer"
// import About from "./components/About"
import Error from "./components/Error"
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Contact from "./components/Contact";
import RestrauntMenu from "./components/RestrauntMenu";
import Profile from "./components/Profile";
import Shimmer from "./components/Shimmer";
// import Instamart from "./components/Instamart";
import UserContext from "./utils/UserContext";

// Composing Components
// const burgerKing = {
//   name: "Burder King",
//   image: "https://lh3.googleusercontent.com/p/AF1QipNZCXWLqGecr7aGdFq2gvZWHJ6MrH3KWBFTm15E=w1080-h608-p-no-v0",
//   cusines: ["Burger", "Americal"],
//   rating: "4.2",
// }

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


//chunking
//Code Spliting
//Lazy Loading
//On Demand Conding
//Dymanic Import

const Instamart = lazy(()=> import("./components/Instamart"));
const About = lazy(()=> import("./components/About"));

const AppLayout = () => {
  const [user, setUser] = useState({
    name: "Namaste React",
    email: "santosh.prajp@gmail.com",
  });
  return(
    <div className="wrapper">
      <UserContext.Provider
      value={
        {
          user: user,
          setUser: setUser,
        }
      }
      >
      <Header />
      <Outlet />
      <Footer />
      </UserContext.Provider>
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout/>,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Body 
            
            user={{
              name: "Namaste React",
              email: "santosh.prajp@gmail.com",
            }}

            />
          </Suspense>
        ),
      },
      {
        path: '/about',
        element: <About />,
        children: [
          {
            path: "Profile",
            element: <Profile />,
          }
        ]
      },
      {
        path: '/contact',
        element: <Contact />,
      },
      {
        path: "/restaurant/:resId",
        element: <RestrauntMenu />,        
      },
      {
        path: "/instamart",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Instamart />
          </Suspense>
        ),        
      }
    ],
  }
])

const root = ReactDOM.createRoot(document.getElementById("root"));

//passing a react element inside the root

//async defer
root.render(<RouterProvider router={appRouter} />);
