import React from 'react'

const Navbarelement = ({ title, link }) => {
  return (
      <div className='navbar-element' >
        <a href={link}>{title}</a>
      </div>
  )
}

Navbarelement.defaultProps = {
  title: 'No Title Given',
  collapsible: ''
}

export default Navbarelement