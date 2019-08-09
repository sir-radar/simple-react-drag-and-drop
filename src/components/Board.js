import React from 'react'

function Board(props) {
  const drop = e =>{
    e.preventDefault();
    const card_id = e.dataTransfer.getData('card_id')
  }

  return (
    <div>
      {props.children}
    </div>
  )
}

export default Board
