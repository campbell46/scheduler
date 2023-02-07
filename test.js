[
  { type: "add", value: 3 },
  { type: "subtract", value: 5},
  { type: "add", value: 7}
].reduce((state, action) => {
  if(action.type === "add") {
    return state + action.value;
  }
  if(action.type === "subtract") {
    return state - action.value;
  }
}, 0);