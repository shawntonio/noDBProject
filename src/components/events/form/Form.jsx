import React, {Component} from 'react';

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
			<div className="form">
				<h2>Tell me about your event</h2>

				<input name="eventName" onChange={this.inputHandler} type="text" placeholder="What will you call your event?"/>

				<input name="eventDate" onChange={this.inputHandler} type="date"/>

				{/* giftform */}

				<button onClick={this.createEvent} className="submit">Create Event</button>
			</div>
		)
	}
}