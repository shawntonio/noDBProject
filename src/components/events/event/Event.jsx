import React, {Component} from 'react';
import './Event.css'
import Gift from './gift/Gift'

export default class Event extends Component {

	state = {
		showGifts: false
	}

	toggleGifts = () => {
		this.setState({showGifts: !this.state.showGifts})
	}

	render() {
		const {eventName, gifts, eventDate} = this.props.event

		return (
			<div className="event" onClick={this.toggleGifts} >
				<h3>{eventName}</h3>
				{this.state.showGifts ? gifts.map(gift => {
					return <Gift key={gift.giftId} gift={gift} />
				}): null}
				<p className="eventDate">{eventDate}</p>
			</div>
		)
	}
}