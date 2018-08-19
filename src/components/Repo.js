import React, { Component } from 'react'
import { getRepo } from '../actions/pageFunctions'
import { connect } from 'react-redux'

class Repo extends Component {
	componentDidMount() {
		getRepo()	
	}

	render() {
		return (
			<div>
				<div className="repo-container">
		 			<div className="repo-bar">
		 				<input className="repo-search" type="text" placeholder="Search repositories..."/>
		 				<div className="repo-classes">
		 					<button className="repo-class">Type: All</button>
		 					<button className="repo-class">Language: All</button>
		 				</div>
		 				<button className="repo-new"><i className="fa fa-book" />New</button>
		 			</div>

		 			{this.props.repos.map( (data, i) => (
		 				<div className="repos" key={data.id}>
		 					<div className="repo-name">{data.name}</div>
		 					<div className="repo-language">{data.language}</div>
						</div>
		 			))}
		 		</div>
	 		</div>
		)
	}
}

function mapStateToProps(appState) {
	return {
		repos: appState.repos,
		name: appState.repos.name,
		language: appState.repos.language
	}
}

export default connect(mapStateToProps)(Repo)