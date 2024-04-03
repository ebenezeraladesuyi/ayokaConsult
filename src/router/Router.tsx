/* eslint-disable react-refresh/only-export-components */
import { createBrowserRouter } from "react-router-dom";
import { lazy } from "react";
import HomeLayout from "../layout/HomeLayout";
import ContactUsLayout from "../layout/ContactUsLayout";


const HomeComp = lazy(() => import("../pages/home/HomeComp"));
const ContactUs = lazy(() => import("../pages/Contact/ContactUs"));


export const element = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout />,
        children: [
            {
                index: true,
                element: <HomeComp />
            }
        ]
    },
    {
        path: "/contact",
        element: <ContactUsLayout />,
        children: [
            {
                index: true,
                element: <ContactUs />
            }
        ]
    }
])