import React, { useEffect } from 'react'

const Alert = ({ type, msg, removeAlert, list }) => {
  // this useEffect will trigger a timer with 3000 ms
  // at the page loaded (render first triggered)
  useEffect(() => {
    const timeout = setTimeout(() => {
      removeAlert()
    }, 3000)
    return () => clearTimeout(timeout)
  }, [list])
  return <p className={`alert alert-${type}`}>{msg}</p>
}

export default Alert
