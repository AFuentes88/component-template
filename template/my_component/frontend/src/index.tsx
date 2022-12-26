import React from "react"
import ReactDOM from "react-dom"
import DropdownWidget from './MyComponent'

const options = ['Option 1', 'Option 2', 'Option 3'];

ReactDOM.render(
  <React.StrictMode>
    <DropdownWidget options={options} onChange={(selectedOptions) => console.log(selectedOptions)} />
  </React.StrictMode>,
  document.getElementById("root")
)
