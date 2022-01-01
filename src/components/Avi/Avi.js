import React from 'react'

import './Avi.css'

const Avi = () => {
	return (
		<div id={"AviContainer"}>
			<a className={"anchor"} id={"home"}></a>
			<div id={"BlurContainer"}>
				<img id={"AviImg"} src={require('./avi.png')}></img>
			</div>
		</div>
	)
}

export default Avi