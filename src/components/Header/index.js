import React from 'react'
import styled from 'styled-components'
import { themeGet, space, height } from 'styled-system'
import { Bars } from 'styled-icons/fa-solid/Bars'
import { MessageCircle } from 'styled-icons/feather/MessageCircle'
import { Heading } from 'rebass'

const HeaderWrapper = styled.header`
  overflow: hidden;
  position: relative;
`

const Navbar = styled.nav`
  width: 100%;
  margin: 0;
  top: 0;
  position: fixed;
  background-color: ${props => (props.changeNavbar ? 'green' : 'transparent')};
`

const ToggleWrapper = styled.div`
  ${space}
  ${height}
  display: block;
  position: absolute;
  left: 0;
  top: 0;
  color: ${props => (props.changeNavbar ? 'white' : 'black')};

  @media (min-width: ${themeGet('breakpoints.0')}) {
    display: none;
  }
`

const BrandWrapper = styled.div`
  ${space}
  ${height}
  display: block;
  text-align: center;
  color: ${props => (props.changeNavbar ? 'white' : 'black')};

  @media (min-width: ${themeGet('breakpoints.0')}) {
    text-align: left;
  }
`

const ButtonWrapper = styled.div`
  ${space}
  display: block;
  position: absolute;
  right: 0;
  top: 0;
  color: ${props => (props.changeNavbar ? 'white' : 'black')};
`

const Sidebar = styled.div`
  display: ${props => (props.showSidebar ? 'inline' : 'none')};
  height: 100%;
  width: 250px;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: #111;
  overflow-x: hidden;
  padding-top: 15px;
  transition: 0.5s;

  > button {
    padding: 8px 8px 8px 32px;
    font-size: 18px;
    color: #818181;
    display: block;
    transition: 0.3s;
    position: absolute;
    top: 0;
    right: 25px;
    font-size: 36px;
    margin-left: 50px;
  }

  > a {
    padding: 8px 8px 8px 32px;
    text-decoration: none;
    font-size: 18px;
    color: #818181;
    display: block;
    transition: 0.3s;

    &:hover {
      color: #f1f1f1;
    }
  }
`

class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showSidebar: false,
      changeNavbar: false,
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.changeNavbar)
  }

  changeNavbar = () => {
    if (window.pageYOffset > 10) {
      this.setState({ changeNavbar: true })
    } else {
      this.setState({ changeNavbar: false })
    }
  }

  toggleSidebar = () => {
    this.setState(prevState => ({ showSidebar: !prevState.showSidebar }))
  }

  render() {
    return (
      <HeaderWrapper>
        <Navbar changeNavbar={this.state.changeNavbar}>
          <ToggleWrapper
            p={3}
            as="button"
            onClick={this.toggleSidebar}
            changeNavbar={this.state.changeNavbar}
          >
            <Bars size="24" />
          </ToggleWrapper>
          <BrandWrapper p={3} changeNavbar={this.state.changeNavbar}>
            <Heading>Lung Vang</Heading>
          </BrandWrapper>
          <ButtonWrapper
            p={3}
            as="button"
            changeNavbar={this.state.changeNavbar}
          >
            <MessageCircle size="24" />
          </ButtonWrapper>
        </Navbar>
        <Sidebar showSidebar={this.state.showSidebar}>
          <button onClick={this.toggleSidebar}>&times;</button>
          <a href="/">Home</a>
          <a href="/consulting">Consulting</a>
          <a href="/">Studio</a>
          <a href="/">Craftsman</a>
          <a href="/">Products</a>
          <a href="/">OSS</a>
          <a href="/">Blog</a>
          <a href="/">About</a>
        </Sidebar>
      </HeaderWrapper>
    )
  }
}

export default Header
