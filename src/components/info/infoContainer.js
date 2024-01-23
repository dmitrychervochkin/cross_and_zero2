import { Component } from 'react';
import { Info } from './infoLayout';
import PropTypes from 'prop-types';

export class InfoContainer extends Component {
	render() {
		return <Info />;
	}
}

InfoContainer.propTypes = {
	isDraw: PropTypes.bool,
	isGameEnded: PropTypes.bool,
	currentPlayer: PropTypes.string,
};
