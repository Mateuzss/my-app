import React from "react";
import { Route,Routes, BrowserRouter } from "react-router-dom";
import {Home} from "./pages/home";
import {Scheduled} from "./pages/scheduled";
import  {ScheduledAppointments} from "./pages/scheduledAppointments";

const MyRoutes = () => {
   return(
       <BrowserRouter>
       <Routes initialPath = "/">
           <Route element = { <Home/> }  path="/" exact />
           <Route element = { <Scheduled/> }  path="/scheduled" />
           <Route element = { <ScheduledAppointments/> }  path="/scheduledAppointments" />
           </Routes>
       </BrowserRouter>
   )
}

export default MyRoutes;