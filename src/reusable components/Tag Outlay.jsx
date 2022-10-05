import React from 'react'

const TagOutlay = ({icon, detail, name}) => {
  return (
    <section className='outlay-all flex'>
      <div className='outlay-icon'>
         <img src={icon} alt="icon" />
      </div>
      <div>
         <h3 className='outlay-name'>{name}</h3>
         <p className='outlay-detail'>{detail}</p>
      </div>
      <div>
      <img src="../images/next_arrow.svg" alt="arrow" />
      </div>
    </section>
  )
}

export default TagOutlay
