import React from 'react'

import './Header.css'

import HeaderBackground from '../HeaderBackground/HeaderBackground'
import Avi from '../Avi/Avi'

const Header = () => {
	return(
		<div id={"header"}>
			<HeaderBackground />
			<Avi />
		</div>
	)
}

export default Header