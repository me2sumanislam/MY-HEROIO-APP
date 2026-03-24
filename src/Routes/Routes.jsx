 import React from 'react'
import { createBrowserRouter } from "react-router-dom";  
import Root from '../Pages/Root/Root'
import Error from '../Pages/ErrorPage/Error'
import Home from '../Pages/Home/Home';
import Apps from '../Pages/Apps/Apps';
import AppDetails from '../Pages/APPDetails/AppsDetails';
 
import AddToInstallList from '../Pages/Install/AddToInstallList';

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,  
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: () => fetch('/Data.json')  
      },
      {
        path: "/apps",
        element: <Apps />, 
        loader: () => fetch('/Data.json')
      },
      {
        path: "/app/:id",
        element: <AppDetails />,
        loader: () => fetch('/Data.json') 
      },
      {
        
        path: "/Installation", 
        element: <AddToInstallList />
      }
    ]
  },
]);