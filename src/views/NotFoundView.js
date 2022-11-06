import React from 'react'
import NotFoundImage from '../assets/images/error-404.png'


function NotFoundView() {
  return (
    <>
    <div className="container">
      <div className="d-flex justify-content-center align-items-center vh-100">
        <img src={NotFoundImage} alt="404 Page Not Found" style={{ height: "768px" }} />
        <h1 className="ms-4" style={{ fontSize: "3rem" }}>The page you were looking for couldn't be found or is under maintenance.</h1>
      </div>
    </div>
    </>
  )
}

export default NotFoundView