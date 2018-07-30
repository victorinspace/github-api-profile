import React, { Component } from 'react'

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
				<div>These are my repos</div>
			</div>

		</div>
   )
 }
}

export default RepoCo