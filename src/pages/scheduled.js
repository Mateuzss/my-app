import React from "react";
import { Sidebar } from '../componentes/Sidebar';
import { useState } from "react";
import  Form from "../componentes/form";
import FormModal from "../componentes/formModal";
import {CalendarDate} from "../componentes/calendar";
import CalendarComponent from "../componentes/Datecalendar";
import {CarouselScheduled} from "../componentes/carouselScheduled";
import Tabela from "../componentes/tableForm";



export const Scheduled = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);  
  const handleClose = () => {setModalIsOpen(!modalIsOpen);}
  const [addUsuario,setaddUsuario] = useState([])
  console.log(addUsuario)
  return ( 
    <> 
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
      <div style={{
        display: 'flex',
        justifyContent:'flex-end',
        
      }}>

      <FormModal
       modalIsOpen={modalIsOpen}  
       modalToggle={handleClose}
       handleClose={handleClose} 
       setaddUsuario={setaddUsuario}
       addUsuario={addUsuario}/>
      
        <button onClick={handleClose} style={{
       backgroundColor: '#4cc9f0',
       width:'150px',
       marginTop: '50px', 
       marginRight: '200px',
       borderRadius: '10px',
       borderStyle: '0',
       border:'none',
        }}
        >Cadastro</button>
      
      </div>
      <div>
      <CarouselScheduled></CarouselScheduled>
      </div>
      <div style={{ 
        
        position: 'fixed', 
        bottom: '40px',
        width: '100%',
      
        
    }}>
      <div style={{marginLeft:'65%'}}>
      
        <Tabela data={addUsuario}></Tabela>
        </div> 
       
      <CalendarComponent/>
      </div>
    </>
  );
}
