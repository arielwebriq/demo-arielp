import React, { useState } from 'react'
import Navbar from './Navbar'
import Hamburger from './Hamburger'
import Sidebar from './Sidebar'
import { Wrapper, Overlay } from './styles'

export const Header = (props) => {
    const [sidebar, toggle] = useState(false)
    return (
        <Wrapper page={props.page}>
			<Overlay sidebar={sidebar} onClick={() => toggle(!sidebar)} />
			<Navbar page={props.page} />
			<Hamburger sidebar={sidebar} toggle={toggle} />
			<Sidebar sidebar={sidebar} toggle={toggle} />
		</Wrapper>
    )
}