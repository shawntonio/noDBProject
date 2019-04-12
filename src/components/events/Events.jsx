import React, {Component} from 'react';
import axios from 'axios';
import {FaPlus} from 'react-icons/fa';
import {FaSearch} from 'react-icons/fa';

import './Events.css';

import Event from './event/Event';
import Form from './form/Form';

export default class Events extends Component {

	state = {
		events: [],
		showForm: false,
		searchInput: ""
  }

  componentDidMount() {
    axios.get('/api/events').then(res => {
      this.setState({events: res.data})
    }).catch(err => console.log('err ', err))
	}
	
	toggleForm = () => {
    this.setState({showForm: !this.state.showForm})
	}

	addToFund = updatedEvent => {
		axios.put(`/api/events/${updatedEvent.id}`, updatedEvent).then(res => {
			this.setState({events: res.data})
		}).catch(err => console.log('err ', err))
	}
	
	createEvent = event => {
		axios.post('/api/events', event).then(res => {
			this.setState({events: res.data, showForm: false})
		}).catch(err => console.log('err ', err))

	}

	deleteEvent = id => {
		axios.delete(`/api/events/${id}`).then(res => {
			this.setState({events: res.data})
		}).catch(err => console.log('err ', err))
	}

	searchHandler = e => {
    this.setState({searchInput: e})
	}
	
	getSearch = () => {
		axios.get(`/api/events?event=${this.state.searchInput}`).then(res => {
      this.setState({events: res.data})
    }).catch(err => console.log('err ', err))
	}

	render() {
		const {events, showForm} = this.state

		return(
			showForm ? <Form createEvent={this.createEvent} />
			:(
				<div className="events">
					{events.map(event => {
						return <Event showHeader={this.props.showHeader} key={event.id} event={event} addToFund={this.addToFund} removeGift={this.removeGift} deleteEvent={this.deleteEvent} />
					})}	
	
					<FaPlus onClick={this.toggleForm} className="createEventButton"/>	

					<div className="search">
						<input onChange={(e) => this.searchHandler(e.target.value)} type="text" className="searchInput" />
						<FaSearch onClick={this.getSearch} />
					</div>	
				</div>
			)
		)
	}
}