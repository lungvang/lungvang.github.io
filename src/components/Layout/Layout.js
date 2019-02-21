import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

class Layout extends React.Component {
  render() {
    const { children } = this.props
    return (
      <div>
        <Header />
        {children}
        <Footer />
      </div>
    )
  }
}

export default Layout
