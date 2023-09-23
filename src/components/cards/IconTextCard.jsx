import React from 'react'
import './cards.css'

const IconTextCard = ({price,heading,text}) => {
  return (
    <>
    <div className="icon-text-card">
              <h2>{price}</h2>
              <h3 className="heading">{heading}</h3>
              <p>
                {text}
              </p>
            </div>
    </>
  )
}

export default IconTextCard