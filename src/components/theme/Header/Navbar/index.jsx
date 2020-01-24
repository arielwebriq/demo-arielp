import React from 'react'
import { Link } from 'gatsby'
import { Container } from 'components/common'
import NavbarLinks from '../NavbarLinks'
import { Wrapper } from './styles'

const Navbar = (props) => (
    <Wrapper as={Container} page={props.page}>
		<Link to="/">Ariel Pasilang</Link>
		<NavbarLinks desktop />
	</Wrapper>
)

export default Navbar