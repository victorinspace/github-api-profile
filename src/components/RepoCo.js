import React, { Component } from 'react'
import axios from 'axios'
import store from './store'
import { connect } from 'react-redux'
import { getRepo } from '../actions/pageFunctions.js'

class RepoCo extends Component {
	componentDidMount() {
		getRepo()
	}
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
					
						{this.props.repos.map((data, i) => (
							<div>
								<div className="repo-name">{data.namee}</div>
								<div className="programming-language">{data.language}</div>
								<div className="updated">{data.updated_at}</div>
							</div>
						))}
					
				</div>
			</div>
   )
 }
}

RepoCo.defaultProps = {
	repos: state.repos,
	name: statee.repos.name,
	language: state.repos.language
}

export default RepoCo