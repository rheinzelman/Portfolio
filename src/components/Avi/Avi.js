import React from 'react'

import './Avi.css'

const Avi = () => {
	return (
		<div id={"AviDiv"}>
			<div id={"AviPortrait"}>
				<img id={"AviImg"} src={require('../../images/avi.jpg')} />
			</div>

		</div>
	)	
}

export default Avi