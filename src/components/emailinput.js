import React, { useRef } from 'react';
import { conn } from '../store/connect';

const EmailInput = (props) => {
	return (
		<div className={`utility-input-container`}>
			<div className="address-container">
				<div className="head-text-4">{``}</div>
				<input type="email" name='emailaddress'/>
			</div>
		</div>
	);
};

const mapStateToProps = (state, ownProps) => {
	const { utiltag } = ownProps;
	return {
		vals: state.building.inputs.utilities[utiltag],
		inputs: state.building.inputs,
	};
};

export default conn(mapStateToProps)(EmailInput);
