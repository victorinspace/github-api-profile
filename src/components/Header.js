import React, { Component } from 'react'

class Header extends Component {
	render() {
		return (
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
		)
	}
}

export default Header