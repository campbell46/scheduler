import React from "react";
import classNames from "classnames";
import "components/DayListItem.scss"

export default function DayListItem(props) {
  const dayClass = classNames("day-list__item", {
    "day-list__item--selected" : props.selected,
    "day-list__item--full" : props.spots === 0
  });

  //format spots to spot if only 1 and no spots if 0
  const formatSpots = (spots) => {
    let spotNum = '';
    if (spots === 0) {
      spotNum = "no spots remaining";
    } else if (spots === 1) {
      spotNum = "1 spot remaining";
    } else {
      spotNum = `${spots} spots remaining`
    }

    return spotNum;
  }

  return (
    <li data-testid="day" onClick={() => props.setDay(props.name)} className={dayClass}>
      <h2 className="text--regular">{props.name}</h2>
      <h3 className="text--light">{formatSpots(props.spots)}</h3>
    </li>
  );
}