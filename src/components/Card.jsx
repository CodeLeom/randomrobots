import React from 'react'

function Card({item}) {
  return (
    <div className='tc bg-light-blue dib br3 pa3 ma3 grow bw2 shadow-2 '>
        <img src={`https://robohash.org/${item.username}?200x200`} alt="random robot character" />
        <h2>{item.name}</h2>
        <p>{item.email}</p>
    </div>
  )
}

export default Card