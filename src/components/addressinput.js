import React, { useRef } from 'react';
import { conn } from '../store/connect';

const AddressInput = (props) => {
	return (
		<div className={`utility-input-container`}>
			<div className="address-container">
				<div className="head-text-4">{``}</div>
				<input type="address" name='buildingaddress'/>
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

export default conn(mapStateToProps)(AddressInput);
