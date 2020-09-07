import React from "react"
import ReactDOM from "react-dom"

function MyInfo() {
  return (
    <div>
      <h1> Yash Nigam</h1>
      <p>This is a paragraph..</p>
      <ul>
        <li>Yes</li>
        <li>No</li>
        <li>Maybe</li>
      </ul>
    </div>
  )
}

ReactDOM.render(<MyInfo />, document.getElementById("root") )