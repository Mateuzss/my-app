export default (state, action) => {
    switch (action.type) {
      case "DELETE_PATIENTE":
        return {
          ...state,
          patients: state.patients.filter(
            (patient) => patient.id !== action.payload
          ),
        };
      case "ADD_PATIENTE":
        return {
          ...state,
          patients: [action.payload, ...state.patients],
        };
      default:
        return state;
    }
  };
  