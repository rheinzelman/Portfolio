import React from 'react'

import Header from './Header/Header'
import Home from './Home/Home'
import Work from './Work/Work'
import Footer from './Footer/Footer'
import StickyMenu from './StickyMenu/StickyMenu'



const App = () => {

	return(

		<div>
			<Header />
			<StickyMenu />
			<Home />
			<Work />
			<Footer />
		</div>

	)

}

export default App