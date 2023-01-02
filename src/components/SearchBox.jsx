import React, {useContext} from 'react'
import RobotContext from '../context/RobotContext'

function SearchBox() {
  const {onSearchChange} = useContext(RobotContext)
  return (
    <>
        <input className='pa2 bg-lightest-blue b--light-blue br2' 
          type="text"  
           placeholder='search robot'
          onChange={onSearchChange}
         />
    </>
  )
}

export default SearchBox
