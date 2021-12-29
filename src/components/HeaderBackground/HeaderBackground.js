import React from 'react'

import './HeaderBackground.css'

const HeaderBackground = () => {
	return(
		<div id={"header-background"}>
			<p><img src={require("./headerbackground.png")} /></p>
		</div>
	)
}

export default HeaderBackground