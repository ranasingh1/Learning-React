import React from "react";
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
/* My Food App structure will look like this, 
            1) Header
                - Logo
                - Nav Items(right side)
                - Cart
            2) Body
                - Search bar
                - Restaurants List
                    - Restaurant card
                        - Image
                        - Name
                        - Rating
            3) Footer
                - Links
                - Copyrights
       
*/

// Title component for display logo

// Header component for header section: Logo, Nav Items

// RestaurantList is JSON Data for displaying cards

// Restaurant card component: Image, name, cuisine

// Body Component for body section: It contain all restaurant cards
// We are mapping restaurantList array and passing data to RestaurantCard component as props with unique key as index

// Footer component for footer section

// AppLayout component to show: Header, Body, Footer
const AppLayout = () => {
  return (
    <>
      <Header />
      <Outlet/>
      <Footer />
    </>
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
        element:<About />,
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