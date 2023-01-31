import React from 'react';
import DayListItem from 'components/DayListItem';

export default function DayList(props) {

  const dayListItemArray = props.days.map((day) =>
      <DayListItem name={day.name}  spots={day.spots} setDay={props.onChange} key={day.id} selected={day.name === props.value}/>
  );

  return (
    <ul>{dayListItemArray}</ul>
  )
}