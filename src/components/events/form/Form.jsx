import React, {Component} from 'react';

import GiftForm from './giftForm/GiftForm'
import './Form.css';

export default class Form extends Component {

	state = {
		eventName: "",
		gifts: [],
		eventDate: ""
	}

	inputHandler = (e) => {
		const {value, name} = e.target
		this.setState({[name]: value})
	}

	createEvent = () => {
		this.props.createEvent(this.state)
	}

	render(){
		return (
			<div className="backForm">
				<div className="frontForm">
					<h2>What will your event be called?</h2>

					<input name="eventName" onChange={this.inputHandler} type="text" placeholder="name"/>

					<h2>When will it be?</h2>

					<input name="eventDate" onChange={this.inputHandler} type="date"/>

					<GiftForm />

					<button onClick={this.createEvent} className="formButton">Create Event</button>
				</div>
			</div>
		)
	}
}