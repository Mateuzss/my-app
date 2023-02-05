import React from "react";
import { Sidebar } from '../componentes/Sidebar';
import  Form from "../componentes/form";
import {CalendarDate} from "../componentes/calendar";
import TabelaFilter from "../componentes/table";  

export const ScheduledAppointments = () => {
    return ( <>
         <header
        style={{
          backgroundColor: '#4cc9f0',
          height: '100px',
        }} >
        <Sidebar style={{
          marginleft: '25px',

        }} 
        buttontext="AdviceHealth"
        > </Sidebar>
      </header>
         <TabelaFilter></TabelaFilter>
        
          </>
    
  ); }