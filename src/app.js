import React, { Suspense, lazy, useState } from "react";
import ReactDOM from "react-dom/client";
import '../index.css'
import Header from "./components/Header";
import Body from "./components/Body";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import About from "./components/About";
import Error from "./components/Error";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
import Profile from "./components/Profile";
import UserContext from "../utils/UserContext";
import Instamart from "./components/Instamart";
import { Provider } from "react-redux";
import store from "../utils/store";
import Cart from "./components/Cart";

const About = lazy(()=>import("./components/About"))

// AppLayout component to show: Header, Body, Footer
const AppLayout = () => {
const[user, setUser] = useState({
  
    name:"Dummy",
    email:"email@gmail.com"
  
});


  return (
    <Provider store={store}>
    <UserContext.Provider value={{
      user:user,
      setUser:setUser
    }} >
      <Header />
      <Outlet/>
      <Footer />
      </UserContext.Provider>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path:'/',
    element:<AppLayout/>,
    errorElement:<Error/>,
    children:[
      {
        path:'/',
        element:<Body/>
      },
      {
        path:"/about",
        element:
        <Suspense>
        <About />
        </Suspense>,
        children:[
          {
            path:"profile",
            element:<Profile/>,
          }
        ]
      },
      {
        path:"/contact",
        element:<Contact />
      },
      {
        path:"/restaurant/:id",
        element:<RestaurantMenu />
      },
      {
        path:"/instamart",
        element:<Instamart />
      },
      {
        path:"/cart",
        element:<Cart/>
      }
    ]
  },
  // {
  //   path:'/about',
  //   element:<About/>

  // }
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);