import React from 'react'
import 'semantic-ui-css/semantic.min.css'

const Hog = (props) => {
  return (
    <div className="ui eight wide column card">
      <img src={"./hog-imgs/"+`${props.hog.name.toLowerCase().split(" ").join("_")}` + ".jpg"} />
      <h1>Name: {props.hog.name}</h1>
      <p>Weight: {props.hog.weight}</p>
      <p>Specialty: {props.hog.specialty}</p>
      <p>Greased: {props.hog.greased.toString()}</p>
      <p>Highest medal achieved: {props.hog.medal}</p>
    </div>
  )
}

export default Hog
