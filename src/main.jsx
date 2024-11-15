import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './page/Home.jsx';
import New from './page/New.jsx';
import Diary from './page/Diary.jsx';
import Edit from './page/Edit.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element:<Home/>
  },
  {
    path: "new",
    element:<New/>
  },
  {
    path: "diary",
    element:<Diary/>
  },
  {
    path: "edit",
    element:<Edit/>
  }
 ]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}/>
    
   
  </StrictMode>
);
