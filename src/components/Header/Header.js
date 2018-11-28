import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const Brand = styled(Link)`
    text-shadow: none;
    text-decoration: none;
    background-image: none;
`

const Menu = styled.ul`
    list-style: none;
    float: right;
`

const MenuItem = styled.li`
    display: inline-block;
    margin-right: 1rem;
`

class Header extends React.Component {
    render() {
        return(
            <header style={{ marginBottom: `1.5rem` }}>
                <Brand to="/">
                    <h3 style={{ display: `inline` }}>LUNG VANG</h3>
                </Brand>
                <Menu>
                    <MenuItem>
                        <Link to="/">Home</Link>
                    </MenuItem>
                    <MenuItem>
                        <Link to="/about/">About</Link>
                    </MenuItem>
                    <MenuItem>
                        <Link to="/contact/">Contact</Link>
                    </MenuItem>
                </Menu>
            </header>
        )
    }
}

export default Header;