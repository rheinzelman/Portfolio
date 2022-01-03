import React, {useState} from 'react'
import {Nav, Navbar, Container} from 'react-bootstrap'

import './StickyMenu.css'

const StickyMenu = () => {

	const [expanded, setExpanded] = useState(false);

	return (
		<Navbar bg="light" expand="lg" sticky={"top"} className={"sticky-menu"} expanded={expanded}>
			<Container>
				<Navbar.Brand href="#home" className={"mt-2"}><h1>RGH</h1></Navbar.Brand>
				<Navbar.Toggle onClick={() => setExpanded(expanded ? false : 'expanded')} aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="me-auto">
						<Nav.Link onClick={() => setExpanded(false)} className={"nav-item"} href="#home">Home</Nav.Link>
						<Nav.Link onClick={() => setExpanded(false)} className={"nav-item"} href="#work">Work</Nav.Link>
						<Nav.Link onClick={() => setExpanded(false)} className={"nav-item"} href="#contact">Contact</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	)
}


export default StickyMenu