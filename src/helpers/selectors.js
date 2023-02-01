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

export function getInterview(state, interview) {
  if (!interview) return null;
  const interviewObj = {
    "student" : interview.student,
    "interviewer" : {...state.interviewers[interview.interviewer]}
  }
  
  return interviewObj;
}

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