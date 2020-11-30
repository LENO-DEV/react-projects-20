import React, { useEffect } from 'react'

const Alert = ({ type, msg, removeAlert, list }) => {

  useEffect(() => {
    const timeout = setTimeout(() => {
      removeAlert({ show: false });
    }, 3000);
    return () => clearTimeout(timeout);
  }, [list, removeAlert]);

  return <p className={`p-3 alert alert-${type}`}>
    {msg}
  </p>
}

export default Alert;
