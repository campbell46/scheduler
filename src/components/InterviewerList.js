import React from 'react'
import InterviewerListItem from './InterviewerListItem';
import 'components/InterviewerList.scss'

export default function InterviewerList(props) {
  const interviewerArray = props.interviewers;


  const intListArray = interviewerArray.map((person) => 
    <InterviewerListItem name={person.name} avatar={person.avatar} key={person.id} setInterviewer={() => props.onChange(person.id)} selected={props.value === person.id}/>
  );


  return (
    <section className="interviewers">
  <h4 className="interviewers__header text--light">Interviewer</h4>
  <ul className="interviewers__list">{intListArray}</ul>
</section>
  );
}