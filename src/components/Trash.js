import React, { Component } from 'react';
import '../App.css';
import TrashIcon from '../trash.svg';
import PropTypes from 'prop-types';

class Trash extends Component {

	static propTypes = {
		isTrashVisible: PropTypes.bool.isRequired,
		onTrashClicked: PropTypes.func.isRequired,
		binIndex: PropTypes.number.isRequired
	}

	clickBin = () => {
		if (this.props.isTrashVisible) {
			this.props.onTrashClicked(this.props.binIndex)
		}
	}

	render() {
		let display = '';
		if (this.props.isTrashVisible) {
			display = 'trash'
		} else {
			display = 'no-trash'
		}

		return (
			<div className="bin">
				<img onClick={ this.clickBin }
					src={ this.props.isTrashVisible ? TrashIcon : null } alt="Trash" className={ display }></img>
			</div>
		);
	}
}

export default Trash;
