import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { AiOutlineDoubleRight, AiOutlineSolution, AiOutlineSchedule } from "react-icons/ai";
import { BiClinic } from "react-icons/bi";
import { useNavigate} from 'react-router-dom';

export const Sidebar = (props) => {
  const [show, setShow] = useState(false);
  const navigate = useNavigate () 

  const handleNavigate = (path) => navigate(path)
  

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}
        style={{
          marginLeft: '25px',
          marginTop: '25px',
        }}>
        <AiOutlineDoubleRight />
        {props.buttontext}
      </Button>

      <Offcanvas show={show} onHide={handleClose}
        style={{
          backgroundColor: '#4cc9f0',
        }}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>

          <Button onClick ={ () => handleNavigate ("/") }  
           variant="primary" size="lg" style={{
            backgroundColor: '#4cc9f0',
            border: 'none',
            margin: '40px 72px 42px 58px',

          }}> Área de Trabalho <BiClinic /> </Button>

          <Button onClick ={ () => handleNavigate("/scheduled") }
          variant="primary" size="lg" style={{
            backgroundColor: '#4cc9f0',
            border: 'none',
            margin: '40px 72px 42px 58px',


          }}> Agendar consultas <AiOutlineSolution /> </Button>

          <Button onClick ={ () => handleNavigate("/scheduledAppointments") }
          variant="primary" size="lg" style={{
            backgroundColor: '#4cc9f0',
            border: 'none',
            margin: '39px 75px 59px 37px',

          }}>  Consultas Agendadas <AiOutlineSchedule /> </Button>

        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

