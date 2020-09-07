import React from "react"
import ReactDOM from "react-dom"
import App from "./components/App"


function MyInfo() {
  const date = new Date();
  const hours = date.getHours%12;
  let timeofDay

  if(hours<12) {
    timeofDay = "morning"
  } else if(hours >=12 && hours < 17) {
    timeofDay = "afternoon"
  } else {
    timeofDay = "night"
  }

  return (
  <h1> Good {timeofDay} !</h1>
  )
}



ReactDOM.render(<MyInfo />, document.getElementById("root") )