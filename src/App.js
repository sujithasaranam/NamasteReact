import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import RestaurantMenu from "./components/RestaurantMenu";
import About from "./components/About";
import ContactUs from "./components/ContactUs";
import Error from "./components/Error";

const heading = React.createElement("h1", { id: "heading" }, "Namaste React");

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

const appRouter = createBrowserRouter(
  [
    {
      path: "/",
      element: <AppLayout/>,
      children: [
      {
        path: "/",
        element: <Body/>
      },
      {
        path: "/about",
        element: <About/>
      },
      {
        path: "/contact-us",
        element: <ContactUs/>
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu/>
      }
      ],
      errorElement: <Error />
    },
  ]
)

root.render(<RouterProvider router={appRouter} />);
