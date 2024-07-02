import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './pages/App';
import Contact from './pages/Contact';

import './index.css';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
{
  path: "/",
  element: <App />,
},
{
    path: "/contact",
    element: <Contact />,
},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
<RouterProvider
  router={router}
/>
);
