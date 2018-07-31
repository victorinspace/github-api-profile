import React, { Component } from 'react'
import '../styles/App.css'
import store from './store'
import { Provider } from 'react-redux'
import { getInfo } from '../actions/pageFunctions.js'

import RepoCo from './RepoCo'

class App extends Component {
	componentDidMount() {
		getInfo()
	}

  render() {
    return (
    	<Provider store={store}>
	      <div>
	      	{/* Header */}
					<div className="header">
						<div className="header__content">
							{/* Logo */}
							<div className="logo">
								<i className="fa fa-github"></i>
							</div>
							{/* Search bar */}
							<div className="search-bar">
								<input type="text"/>Search or jump to...
							</div>
							{/* Middle of nav */}
							<ul className="menu-left">
								<li className="">Pull requests</li>
								<li className="">Issues</li>
								<li className="">Marketplace</li>
								<li className="">Explore</li>
							</ul>
							{/* Right side of nav */}
							<ul className="menu-right">
								<li>Bell</li>
								<li>Add Dropdown</li>
								<li>Profile Dropdown</li>
							</ul>
						</div>
					</div>
					{/* Profile section */}
					<div className="profile-section">
						<div className="profile-photo">
							<img src="" alt=""/>My Photo
						</div>
						<div className="name">{this.state.name}</div>
						<div className="login">{this.state.login}</div>
						<div className="Bio">This is my convoluted bio.</div>
						<button>Follow</button>
					</div>

					<RepoCo />
	      </div>
      </Provider>
    )
  }
}

export default App
