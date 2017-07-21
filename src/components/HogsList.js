import React from 'react'
import Hog from './Hog'
import 'semantic-ui-css/semantic.min.css'

const HogsList = ({hogs}) => {
  return (
    <div className='ui fluid centered cards'>
      {hogs.map((hog, index) => <Hog key={index} hog={hog}/>)}
    </div>
  )
}

export default HogsList
