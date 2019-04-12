import React, {Component} from 'react';
import {FaEdit} from 'react-icons/fa';

import './Event.css'
import Gift from './gift/Gift'

export default class Event extends Component {

	constructor(props) {
		super(props)

		this.state = {
			showGifts: false
		}
	}

	toggleGifts = () => {
		this.setState({showGifts: !this.state.showGifts})
	}

	increaseFund = (amount, giftId) => {
		const updatedEvent = this.props.event
		const index = updatedEvent.gifts.findIndex(gift => +gift.giftId === +giftId)
		updatedEvent.gifts[index].fund += amount
		this.props.addToFund(updatedEvent)
	}

	render() {
		const {eventName, gifts, eventDate, id} = this.props.event
		
		return (
			<div className="event" onDoubleClick={this.toggleGifts} >
				<h3>{eventName}</h3>

				{this.state.showGifts ? gifts.map(gift => {
					return(
						<div className="fullEvent">
							<Gift key={gift.giftId} gift={gift} removeGift={this.props.removeGift} />

							<div className="contributeButtons">

								<p>Contribute</p>

								<button onClick={() => this.increaseFund(5, gift.giftId)}>$5</button>

								<button onClick={() => this.increaseFund(10, gift.giftId)}>$10</button>

								<button onClick={() => this.increaseFund(15, gift.giftId)}>$15</button>

							</div>
							
						</div>
					)
				}): null}
				<p className="eventDate">{eventDate}</p>
				<button onClick={() => this.props.deleteEvent(id)} >Remove</button>
			</div>
		)
	}
}