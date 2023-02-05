import React, { useState }  from "react"
import SimpleModal from "../simpleModal"
import './index.css'
import Form from '../form'

const FormModal = ({
    modalIsOpen,
    modalToggle,
    handleClose,
    setaddUsuario,
    addUsuario,
}) => {


    return (
        
        <>
       <div> 
            
            <SimpleModal
                header="Descrever formulario"
                modal={modalIsOpen}
                toggle={modalToggle}
                handleClose={handleClose}
                >  
                <div className="Form">
                  <Form setaddUsuario={setaddUsuario} addUsuario={addUsuario} />
                </div>
            </SimpleModal>
        </div>
        </>
    )
}

export default FormModal