import React, { Component } from 'react'
import '../styles/App.css'
import RepoCo from './RepoCo'

class App extends Component {
  render() {
    return (
      <div>
      	
				<div className="header">
					<div className="header__content">
						
						<div className="logo"></div>
						
						<div className="search-bar">
							<input type="text"/>Search or jump to...
						</div>
						
						<ul className="menu">
							<li className="">Pull requests</li>
							<li className="">Issues</li>
							<li className="">Marketplace</li>
							<li className="">Explore</li>
						</ul>

						<ul>
							<li>Bell</li>
							<li>Add Dropdown</li>
							<li>Profile Dropdown</li>
						</ul>

					</div>
				</div>
				
				<div></div>

				<RepoCo />
      </div>
    )
  }
}

export default App
