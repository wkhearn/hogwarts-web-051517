import React from 'react'
import 'semantic-ui-css/semantic.min.css'

const Filters = (props) => {
  return (
    <div className="ui container">
      <label name="label">Greasy Pig? </label>
      <input type="checkbox" onClick={props.handleCheckbox} value="Is Greasy" />
      <br/>
      <label>Sort By </label>
      <select value={props.sortBy} onChange={props.handleSort}>
        <option value=""></option>
        <option value="name">Name</option>
        <option value="weight">Weight</option>
      </select>
    </div>
  )
}

export default Filters
