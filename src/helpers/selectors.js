//returns an array of appointments for selected day
export function getAppointmentsForDay(state, currentDay) {
  const appointments = [];

  for (let day of state.days) {
    if (day.name === currentDay) {
      for (let appointment of day.appointments) {
        appointments.push(state.appointments[appointment])
      }
    }

  }
  return appointments;
}

//Returns interview object
export function getInterview(state, interview) {
  if (!interview) return null;
  const interviewObj = {
    "student" : interview.student,
    "interviewer" : {...state.interviewers[interview.interviewer]}
  }
  
  return interviewObj;
}

//Returns array of interviewers for selected day
export function getInterviewersForDay(state, currentDay) {
  const interviewers = [];

  for (let day of state.days) {
    if (day.name === currentDay) {
      for (let interviewer of day.interviewers) {
        interviewers.push(state.interviewers[interviewer]);
      }
    }

  }
  
  return interviewers;
}