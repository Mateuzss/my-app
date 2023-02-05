import React, { createContext, useReducer } from "react";
import AppReduce from "./AppReduce";


const initialState = {
  patients: [
    {
      
      cpf: "978.302.244.90",
      date: "2022-08-13",     
      name: "Eduardo Júnior",
      price: "23",     
      email:"Eduard@hotmail.com",
    },
    {
      
      cpf: "978.302.244.90",
      date: "2022-08-13",
      name: "Andréia Carla",
      price: "78",      
      email:"Andreia@hotmail.com",
    },
    {
     cpf: "978.302.244.90",
      date: "2022-08-13",
      name: "Carlos Eduardo",
      price: "35",
      email:"carlos@hotmail.com",
    },
  ],
};

// Create context

export const GlobalContext = createContext(initialState);

// Provider component

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReduce,initialState);

  // Actions
  function deletePatiente(id) {
    dispatch({
      type: "DELETE_PATIENTE",
      payload: id,
    });
  }

  function addPatiente(patient) {
    dispatch({
      type: "ADD_PATIENTE",
      payload: patient,
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        patients: state.patients,
        deletePatiente,
        addPatiente,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};