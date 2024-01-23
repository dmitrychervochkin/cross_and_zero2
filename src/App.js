import styles from './App.module.css';
import { LogoContainer } from './logo/logo';
import { Field } from './components/field/fieldLayout';
import { InfoContainer } from './components/info/infoContainer';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { RESET_GAME } from './actions';

export class App extends Component {
	render() {
		const { handleRestart } = this.props;

		return (
			<div className="App">
				<LogoContainer />
				<InfoContainer />
				<Field />
				<button onClick={handleRestart} className="restart_btn">
					Начать заново
				</button>
			</div>
		);
	}
}

function mapDispatchToProps(dispatch) {
	return {
		handleRestart: () => dispatch(RESET_GAME),
	};
}

export const Game = connect(null, mapDispatchToProps)(App);
