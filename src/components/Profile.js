import React, { Component } from 'react'
import { getInfo } from '../actions/pageFunctions'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { Provider } from 'react-redux'
import store from '../store'

import Repo from './Repo'

class Profile extends Component {
	componentDidMount() {
		getInfo()	
	}

	render() {
		return (
			<Provider store={store}>
				<Router>
					<div>
						<div className="top-nav">
							<div className="top-nav--left">
								<i id="github-icon" className="fa fa-github"></i>
								<input className="profile-search" type="text" 
												placeholder="Search or jump to..." />
								<div className="top-nav__text">Pull requests</div>
								<div className="top-nav__text">Issues</div>
								<div className="top-nav__text">Marketplace</div>
								<div className="top-nav__text">Example</div>
							</div>

							<div className="top-nav--right">
								<i id="bell-icon" className="fa fa-bell"></i>
								<i id="plus-icon" className="fa fa-plus"></i>
								<img className="top-avatar" src={this.props.avatar} alt="" />
							</div>
						</div>

						<div className="profile-container">
							<div className="profile">
								<img className="main-avatar" src={this.props.avatar} alt="" />
								<div className="name">{this.props.name}</div>
								<div className="profile-name">{this.props.login}</div>
								<button className="bio">Add a bio</button>
							</div>

							<div className="data">
								<div className="tab-container">
									<div className="tab-container-space">
										<Link className="tabs" to="">
											<div>Overview</div>
										</Link>
										<Link className="tabs" to="">
											<div>Repositories {this.props.publicrepo}</div>
										</Link>
										<Link className="tabs" to="">
											<div>Stars</div>
										</Link>
										<Link className="tabs" to="">
											<div>Followers {this.props.followers}</div>
										</Link>
										<Link className="tabs" to="">
											<div>Following {this.props.following}</div>
										</Link>
									</div>
								</div>
							</div>

							<Route exact path="/" component={Repo} />
						</div>
					</div>
				</Router>
			</Provider>
		)
	}
}

function mapStateToProps(appState) {
	return {
		login: appState.profile.login,
		avatar: appState.profile.avatar_url,
		name: appState.profile.name,
		publicrepo: appState.profile.public_repos,
		followers: appState.profile.followers,
		following: appState.profile.following
	}
}
export default connect(mapStateToProps)(Profile)