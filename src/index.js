import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Pau from './Pau';

let router = createBrowserRouter([
  {
    path: "/",
    Component: App,
  },
  {
    path: "/pau",
    Component: Pau,
  },
  {
    path: "*",
    Component: App,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

