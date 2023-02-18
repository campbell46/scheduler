import { useState, useEffect } from "react";
import axios from "axios";

export default function useApplicationData() {

  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: {}
  })

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
  
  const updateSpots = (appointments, appointmentId) => {
    // Find the day with the appointment id
    const day = state.days.find(d => d.appointments.includes(appointmentId));

    // Calculate the spots remaining
    const spots = day.appointments.filter(id => appointments[id].interview === null).length;

    // Return the updated spots
    return state.days.map(d => d.appointments.includes(appointmentId) ? { ...d, spots } : d);

  };

  function bookInterview(id, interview) {
  
    const appointment = {
      ...state.appointments[id],
      interview: {...interview }
    };
  
    const appointments = {
      ...state.appointments,
      [id]: appointment
    };
    
    return axios.put(`/api/appointments/${id}`, {interview})
    .then(() =>  { 
      setState((prev) => {
        return {...prev, appointments, days: updateSpots(appointments, id)};
    });
  });
}

  function cancelInterview(id) {

    const appointment = {
      ...state.appointments[id],
      interview: null
    }
  
    const appointments = {
      ...state.appointments,
      [id]: appointment
    };


    return axios.delete(`/api/appointments/${id}`)
    .then(() => {
      setState((prev) => {
        return {...prev, appointments, days: updateSpots(appointments, id)};
    });
    });
  }



  return { state, setDay, bookInterview, cancelInterview  }
}