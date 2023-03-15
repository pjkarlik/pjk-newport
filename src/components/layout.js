import React from "react"

import Seo from "../components/Seo"
import Footer from "./Footer"

import "../styles/styles.css"

const layout = ({ children }) => {
  return (
    <>
      <Seo />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default layout
