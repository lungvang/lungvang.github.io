import React from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider } from 'styled-components'

import theme from '../../utils/theme'
import GlobalStyles from '../../utils/global-styles'
import Header from '../Header'
import Footer from '../Footer'

const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <React.Fragment>
      <GlobalStyles />
      <Header />
      {children}
      <Footer />
    </React.Fragment>
  </ThemeProvider>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
