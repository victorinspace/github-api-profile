import React, { Component } from 'react'
import '../styles/App.css'
import store from '../store'
import { Provider } from 'react-redux'

import Profile from './Profile'

class App extends Component {
  render() {
    return (
    	<Provider store={store}>
				<div>
					<Profile />
				</div>
      </Provider>
    )
  }
}

export default App
