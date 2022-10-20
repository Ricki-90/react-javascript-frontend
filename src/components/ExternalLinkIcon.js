import React from 'react'

export const ExternalLinkIcon = ({link, icon}) => {
  return (
    <a href={link} target="_blank">
        <i className={icon}></i>
    </a>
  )
}
