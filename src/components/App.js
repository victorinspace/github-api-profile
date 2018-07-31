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
	      	<Header />
	      	
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
