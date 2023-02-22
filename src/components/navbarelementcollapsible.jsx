import React from 'react'

const navbarelementcollapsible = ({title, showCollapsible}) => {
  
  return (

    

    <a className='collapsible navbar-element'>
        <div onClick={showCollapsible}>{title}</div>
    </a>
  )

}

export default navbarelementcollapsible