import React from 'react'
import picture from './constantes'
import "./Passions.css"

const Passions = () => {
  return (
    <div>
    <h2 className='passion' > Hobbies/Passions</h2>
  <div className='pictures'>
        {picture.map((item)=>{
            return(
                <img className='image' key={item.key} src={item.img} />
            )
        })}
    </div>
    </div>
    
  )
}

export default Passions