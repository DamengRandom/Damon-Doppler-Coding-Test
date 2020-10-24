import React from 'react'

export default function Message({ classname, message }) {
  return (
    <p className={classname}>{message}</p>
  )
};

