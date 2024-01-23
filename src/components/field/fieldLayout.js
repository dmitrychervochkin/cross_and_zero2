import styles from './field.module.css';
import React, { Component } from 'react';
import { FieldCont } from './fieldContainer';
import { connect } from 'react-redux';

export class FieldLayout extends Component{
	render(){
		const { onFieldClick, fields } = this.props

		return (
			<div className="container">
				{fields.map((field, index) => (
					<FieldCont
						key={index}
						index={index}
						field={field}
						onFieldClick={onFieldClick}
					/>
				))}
			</div>
		);
	};
};

function mapStateToProps(state){
	return {
		fields: state.fields,
	};
};
export const Field = connect(mapStateToProps)(FieldLayout);

