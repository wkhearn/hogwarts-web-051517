import React from 'react'

const Hog = ({ name, picture, weight, greased }) => {
  return (
    <div className='ui eight wide column'>
      <h1>Name: {name}</h1>
      <p>Weight: {weight}</p>
      <p>Greased: {greased}</p>
    </div>
  )}


export default Hog
