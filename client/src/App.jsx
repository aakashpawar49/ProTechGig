import "./app.scss";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import React from "react";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import Gigs from "./pages/gigs/Gigs";
import Gig from "./pages/gig/Gig";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Add from "./pages/add/Add";
import Orders from "./pages/orders/Orders";
import Messages from "./pages/messages/Messages";
import Message from "./pages/message/Message";
import MyGigs from "./pages/myGigs/MyGigs";
import Contact from "./pages/Contact/contact";
import Privacy from "./pages/Privacy/Privacy";
import Terms from "./pages/Terms/Terms";
import Help from "./pages/Help/Help";
import Trust from "./pages/Trust/Trust";
import About from "./pages/About/About";
import Story from "./pages/Community/Story/Story";
import Standards from "./pages/Community/Standards/Standards";
import Job from "./pages/Job/Job";
import Selling from "./pages/Selling/Selling";
import Buying from "./pages/Buying/Buying";
import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import Pay from "./pages/pay/Pay";
import Success from "./pages/success/Success";
import Verify from "./pages/verify/Verify";
import Forpwd from "./components/forpwd/Forpwd";
import Reset from "./pages/reset/Reset";
import Admin from "./pages/admin/Admin";


function App() {
  const queryClient = new QueryClient();

  const Layout = () => {
    return (
      <div className="app">
        <QueryClientProvider client={queryClient}>
          <Navbar />
          <Outlet />
          <Footer />
        </QueryClientProvider>
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/gigs",
          element: <Gigs />,
        },
        {
          path: "/myGigs",
          element: <MyGigs />,
        },
        {
          path: "/orders",
          element: <Orders />,
        },
        {
          path: "/messages",
          element: <Messages />,
        },
        {
          path: "/message/:id",
          element: <Message />,
        },
        {
          path: "/add",
          element: <Add />,
        },
        {
          path: "/gig/:id",
          element: <Gig />,
        },
        {
          path: "/register",
          element: <Register />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/verify",
          element: <Verify />,
        },
        {
          path: "/forgot-password",
          element: <Forpwd />,
        },
        {
          path: "/reset",
          element: <Reset />,
        },
        {
          path: "/pay/:id",
          element: <Pay />,
        },
        {
          path: "/success",
          element: <Success />,
        },
        {
          path: "/Contact",
          element: <Contact />,
        },
        {
          path: "/Privacy",
          element: <Privacy />,
        },
        {
          path: "/Terms",
          element: <Terms />,
        },
        {
          path: "/Help",
          element: <Help />,
        },
        {
          path: "/Trust",
          element: <Trust />
        },
        {
          path: "/About",
          element: <About />
        },        {
          path: "/Story",
          element: <Story />
        },        
        {
          path: "/Standards",
          element: <Standards />
        },
        
        {
          path: "/Job",
          element: <Job />
        },
        {
          path: "/Selling",
          element: <Selling />
        },
        {
          path: "/Buying",
          element: <Buying />
        },
        {
          path: "/admin",
          element: <Admin />
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}
export default App;