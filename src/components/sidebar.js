import React from 'react';

import UtilityInputContainer from './utilityinputcontainer.js';
import BuildingTypeContainer from './buildingtypecontainer.js';
import AddressInputContainer from './addressinputcontainer';
import EmailInputContainer from './emailinputcontainer';

const Sidebar = props => {
	return (
		<div className="sidebar">
			<div className="sidebar-main-container">
				<div className="head-text-2">Building Inputs</div>
				<BuildingTypeContainer />
				<div className="head-text-2">Utility Inputs</div>
				<UtilityInputContainer />
				<div className="head-text-2">Building Address</div>
				<AddressInputContainer />
				<div className="head-text-2">Email Address</div>
				<EmailInputContainer />
			</div>
		</div>
	);
};

export default Sidebar;
