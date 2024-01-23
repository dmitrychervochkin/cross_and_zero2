import { connect } from 'react-redux';
// import styles from './info.module.css';
import PropTypes from 'prop-types';
import { Component } from 'react';

export class InfoLayout extends Component{
	render(){
		const { isDraw, isGameEnded, currentPlayer } = this.props
		if(isDraw){
			return(
				<div className="status">Ничья!</div>
			);
		} else if(!isDraw && isGameEnded){
			return(
				<div className="status">Победил - {currentPlayer}!</div>
			);
		} else if(!isDraw && !isGameEnded){
			return(
				<div className="status">Ходит - {currentPlayer}</div>
			);
		};
	}
}

function mapStateToProps(state){
	return {
		isDraw: state.isDraw,
		isGameEnded: state.isGameEnded,
		currentPlayer: state.currentPlayer,
	};
};
export const Info = connect(mapStateToProps)(InfoLayout);

InfoLayout.propTypes = {
	isDraw: PropTypes.bool,
	isGameEnded: PropTypes.bool,
	currentPlayer: PropTypes.string
}
