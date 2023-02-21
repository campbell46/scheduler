import { useState, useEffect } from "react";
import axios from "axios";

export default function useApplicationData() {

  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: {}
  })

  //Get data on page load
  useEffect(() => {

    Promise.all([
      axios.get("/api/days"),
      axios.get("/api/appointments"),
      axios.get("/api/interviewers")
    ]).then((response) => {
      setState(prev => ({...prev, 
        days: response[0].data, 
        appointments: response[1].data, 
        interviewers: response[2].data 
      }));
    })

  }, []);

  const setDay = day => setState({ ...state, day });
  
  //Update spots every time an interview is booked/deleted
  const updateSpots = (appointments, appointmentId) => {

    // Find the day with the appointment id
    const day = state.days.find(d => d.appointments.includes(appointmentId));

    // Calculate the spots remaining
    const spots = day.appointments.filter(id => appointments[id].interview === null).length;

    // Return the updated spots
    return state.days.map(d => d.appointments.includes(appointmentId) ? { ...d, spots } : d);

  };

  function bookInterview(id, interview) {
  
    //store new appointment
    const appointment = {
      ...state.appointments[id],
      interview: {...interview }
    };
  
    //add it to all appointments
    const appointments = {
      ...state.appointments,
      [id]: appointment
    };
    
    //set state with new appointments object if call is successful
    return axios.put(`/api/appointments/${id}`, {interview})
    .then(() =>  { 
      setState((prev) => {
        return {...prev, appointments, days: updateSpots(appointments, id)};
    });
  });
}

  function cancelInterview(id) {

    //set interview to null
    const appointment = {
      ...state.appointments[id],
      interview: null
    }

    //add it to all appointments
    const appointments = {
      ...state.appointments,
      [id]: appointment
    };

    //set state with new appointments object if call is successful
    return axios.delete(`/api/appointments/${id}`)
    .then(() => {
      setState((prev) => {
        return {...prev, appointments, days: updateSpots(appointments, id)};
    });
    });
  }



  return { state, setDay, bookInterview, cancelInterview  }
}