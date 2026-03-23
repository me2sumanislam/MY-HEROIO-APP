 import React from 'react'
 import { createBrowserRouter } from "react-router";
 import Root from '../Pages/Root/Root'
 import Error from '../Pages/ErrorPage/Error'
import Home from '../Pages/Home/Home';
import Apps from '../Pages/Apps/Apps';








 export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement:<Error></Error>,
    children:[
        {
            index: true,
            path:'/',
            Component: Home,
            loader:()=> fetch('/public/Data.json')
        },
       {
        path: "/apps",
        Component: Apps //vaiya happs dichi file jate 2 app
      },
    ]
  },
]);