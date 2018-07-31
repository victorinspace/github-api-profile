import React, { Component } from 'react'
import axios from 'axios'
import store from './store'
import { connect } from 'react-redux'

class RepoCo extends Component {
	render() {
		return (
			<div>
				{/* Tabs menu */}
				<div>
					<ul className="tabs">
						<li className="tab-links">Overview</li>
						<li className="tab-links">Repositories</li>
						<li className="tab-links">Stars</li>
						<li className="tab-links">Followers</li>
						<li className="tab-links">Following</li>
					</ul>
				</div>
				
				{/* Search and Repo list */}
				<div>
					{/* Search and filter */}
					<div>
					<input type="text"/>
					</div>
					<button>Type: All</button>
					<button>Language: All</button>
					<button>New</button>
					{/* Repo List */}
					<div>
						<div className="repo-name">{}</div>
						<div className="progrmming-language">{}</div>
						<div className="updated">{}</div>
					</div>
				</div>
			</div>
   )
 }
}

RepoCo.defaultProps = {
	name: []
}

export default RepoCo