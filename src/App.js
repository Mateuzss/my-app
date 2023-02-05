import React from "react";
import { Sidebar } from "./componentes/Sidebar"
import { Painel } from "./componentes/painel";
import NavDropdown from 'react-bootstrap/NavDropdown';
import {CalendarDate} from "./componentes/calendar";
import {ControlledCarousel} from "./componentes/carousel";

import { GlobalProvider } from "../src/componentes/hooks/globalstate";


export const App = () => {
  return (
    <>
     <GlobalProvider>
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
      <ControlledCarousel></ControlledCarousel>
      <Painel></Painel>
      <CalendarDate></CalendarDate>
      </GlobalProvider>
    </>
  );
}