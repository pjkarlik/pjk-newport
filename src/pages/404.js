import React from "react"
import Navigation from "../components/Navigation"
import "../styles/styles.css"
const Error = () => {
  return (
    <>
      <section>
        <Navigation loc="/" />
        <div className="wrapper-section">
          <h4 className="title-section">404 Page</h4>
          <br />
          <p className="text-body-section">
            what you seek is not here, sorry...
            <br />
            <span className="text-sub">ここにページが見つかりません</span>
          </p>
          <div className="card"></div>
        </div>
      </section>
    </>
  )
}

export default Error
