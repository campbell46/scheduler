import React, { useState, useEffect } from "react";
import axios from 'axios';
import "components/Application.scss";
import DayList from "components/DayList";
import Appointment from "components/Appointment";
import  { getAppointmentsForDay, getInterview, getInterviewersForDay }  from "../helpers/selectors";


export default function Application() {
  //Hooks
  let [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: {}
  })

  const setDay = day => setState({ ...state, day });

  useEffect(() => {

    Promise.all([
      axios.get("/api/days"),
      axios.get("/api/appointments"),
      axios.get("/api/interviewers")
    ]).then((response) => {
      setState(prev => ({...prev, days: response[0].data, appointments: response[1].data, interviewers: response[2].data }));
    })

  }, []);

  //Functions
  const dailyAppointments = getAppointmentsForDay(state, state.day);

  function bookInterview(id, interview) {
  
    const appointment = {
      ...state.appointments[id],
      interview: {...interview }
    }
  
    const appointments = {
      ...state.appointments,
      [id]: appointment
    };
    
    return axios.put(`/api/appointments/${id}`, {interview})
    .then(() => setState({...state, appointments}));
    
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

    const updateState = () => setState({...state, appointments});
    
    return axios.delete(`/api/appointments/${id}`, {id})
    .then(updateState);
  }


const schedule = dailyAppointments.map((appointment) => {
  const interview = getInterview(state, appointment.interview);
  const interviewers = getInterviewersForDay(state, state.day)

  return (
  <Appointment 
  key={appointment.id}
  id={appointment.id}
  time={appointment.time}
  interview={interview}
  interviewers={interviewers}
  bookInterview={bookInterview}
  cancelInterview={cancelInterview}/>
  )
});


  return (
    <main className="layout">
      <section className="sidebar">
        <img
  className="sidebar--centered"
  src="images/logo.png"
  alt="Interview Scheduler"
/>
<hr className="sidebar__separator sidebar--centered" />
<nav className="sidebar__menu"><DayList
  days={state.days}
  value={state.day}
  onChange={setDay}
/></nav>
<img
  className="sidebar__lhl sidebar--centered"
  src="images/lhl.png"
  alt="Lighthouse Labs"
/>
      </section>
      <section className="schedule">
        <ul>{schedule}<Appointment key="last" time="5pm" /></ul>
      </section>
    </main>
  );
}
