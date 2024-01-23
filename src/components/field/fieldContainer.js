import React, { Component } from 'react';
// import styles from './field.module.css';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { RESET_GAME, setCurrentPlayer, setFields, setIsDraw, setIsGameEnded } from '../../actions';
import { whoIsWinner } from '../../functions/who-is-winner';

export class FieldContainer extends Component{
	onFieldClick(index) {
		const { fields, isGameEnded, currentPlayer,  fieldsChange, currentPlayerChange, isGameEndedChange, isDrawChange } = this.props;
		const fieldsCopy = [...fields];

		if(!isGameEnded && fieldsCopy[index] === ''){
			fieldsCopy[index] = currentPlayer;
			fieldsChange(fieldsCopy);
			if (whoIsWinner(fieldsCopy) === null && fieldsCopy.indexOf('') !== -1){
				currentPlayerChange(currentPlayer === 'X' ? 'O' : 'X');
			};
		};
		if(whoIsWinner(fieldsCopy)){
			isGameEndedChange(true);
			return null
		} else if (whoIsWinner(fieldsCopy) === null && fieldsCopy.indexOf('') === -1){
			isDrawChange(true);
		};
	};

	render(){
		const {field, index} = this.props;

		return(
			<button
				className="cell"
				onClick={() => this.onFieldClick(index)}
			>
				{field}
			</button>
		)
	}
}

function mapStateToProps(state){
	return {
		fields: state.fields,
		isGameEnded: state.isGameEnded,
		currentPlayer: state.currentPlayer,
	};
};
function mapDispatchToProps(dispatch){
	return {
		handleRestart: () => dispatch(RESET_GAME),
		fieldsChange: (array) => dispatch(setFields(array)),
		currentPlayerChange: (condition) => dispatch(setCurrentPlayer(condition)),
		isGameEndedChange: (bool) => dispatch(setIsGameEnded(bool)),
		isDrawChange: (bool) => dispatch(setIsDraw(bool)),
	};
};

export const FieldCont = connect(mapStateToProps, mapDispatchToProps)(FieldContainer);

FieldContainer.propTypes = {
	field: PropTypes.string,
	index: PropTypes.number,
	handleClick: PropTypes.func
};
