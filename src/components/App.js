import React from 'react'
import ReactDOM from 'react-dom'

import Header from './Header/Header'
import Home from './Home/Home'
import Work from './Work/Work'
import Contact from './Contact/Contact'
import StickyMenu from './StickyMenu/StickyMenu'



const App = () => {

	return(

		<div>
			<Header />
			<StickyMenu />
			<Home />
			<Work/>
			<Contact />
		</div>

	)

}

export default App