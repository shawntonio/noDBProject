import React, {Component} from 'react';
import axios from 'axios'

import Event from './event/Event'

export default class Events extends Component {

	state = {
    events: []
  }

  componentDidMount() {
    axios.get('/api/events').then(res => {
      this.setState({events: res.data})
    }).catch(err => console.log('err ', err))
  }

	render() {
		const {events} = this.state
		return (
			<div className="events">
				{events.map(event => {
					return <Event key={event.id} event={event} />
				})}			
			</div>
		)
	}
}