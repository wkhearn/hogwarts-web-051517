import React from 'react'
import Hog from './Hog'


const HogsList = ({hogs}) => {
  return (
    <div className='ui grid container'>
      <Hog name={hogs.map(hog => <li>{hog.name}</li>)}/>
    </div>
  )
}


export default HogsList
