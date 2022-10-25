import React from "react"
import "./Loader.css"

const Loader = ({ text }) => {
  return (
    <>
      <div className="loader">Loading...</div>
      <h1 style={{ textAlign: "center", color: "white", fontSize: "2em" }}>{text}</h1>
    </>
  )
}

export default Loader