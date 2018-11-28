import React from "react"
import Header from "./Header/Header"
import Footer from "./Footer/Footer"

export default ({ children }) => (
  <div>
    <Header />
    {children}
    <Footer />
  </div>
)