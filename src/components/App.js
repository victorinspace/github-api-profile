import React, { Component } from 'react'
import '../styles/App.css'
import RepoCo from './RepoCo'

class App extends Component {
  render() {
    return (
      <div>
      	{/* Header */}
				<div className="header">
					<div className="header__content">
						{/* Logo */}
						<div className="logo">
							<i class="fa fa-github">Logo</i>
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
					<div className="name">My Name</div>
					<div className="Bio">This is my convoluted bio.</div>
					<button>Follow</button>
				</div>

				<RepoCo />
      </div>
    )
  }
}

export default App
