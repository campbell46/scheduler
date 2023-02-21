import { useState } from "react";

//Keep track of transition history to display correct component
export default function useVisualMode(initial) {
  const [history, setHistory] = useState([initial]);

  function transition(newMode, replace = false) {
    //remove mode from history if replace is true
    if (replace) {
      setHistory(prev => [...prev.slice(0,prev.length-1), newMode])
    }
    if (!replace) {
      setHistory(prev => [...prev, newMode])
    }
  }

  //transition to previous mode in history
  function back() {
    if (history.length < 2) {
      return;
    }
    setHistory(prev => [...prev.slice(0,history.length-1)])
  }
  
  return {mode:history[history.length-1], transition, back}
}