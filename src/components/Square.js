import React from 'react'

const Square = (props) => {
  console.log(props);

  return (
    <button type="button" className="square">{props.value}</button>
  )
}

export default Square
