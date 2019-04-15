import React, {Component} from 'react';
import axios from 'axios';
import './GiftForm.css';

// let config = {
// 	headers: {"Content-Type": "application/x-www-form-urlencoded", "dataType": "jsonp", "Authorization": `Basic ${btoa("ShawnTur-giftme-SBX-beaa5c961-9d2e2adc:SBX-eaa5c9611386-a62d-4d1b-9b07-fe49")}`, "Access-Control-Allow-Origin": "*", "Access-Control-Allow-Headers": "X-Requested-With, Origin, Content-Type, X-Auth-Token", "Access-Control-Allow-Methods": "GET, PUT, POST, DELETE"},
// 	payload: {"grant_type": "client_credentials", "scope": "https://api.ebay.com/oauth/api_scope"}
// }
// https%3A%2F%2Fapi.ebay.com%2oauth%2Fapi_scope  https://api.ebay.com/oauth/api_scope

export default class GiftForm extends Component {

	state = {
		products: {},
		keyword: ""
	}

	// componentDidMount() {
	// 	console.log(config.payload, config.headers)
	// 	axios.post("https://api.sandbox.ebay.com/identity/v1/oauth2/token", config.payload, config.headers)
	// 	.then(res => console.log(res.data))
	// 	.catch(err => console.log('err ', err))
	// }


	searchProducts = () => {
		axios.get(``)
		.then(res => this.setState({products: res.data}))
		.catch(err => console.log('err ', err))
	}

	inputHandler = (e) => {
		this.setState({keyword: e.target.value})
	}

	render() {
		return (
			<div className="giftForm">

				<div className="products">
				
				</div>

				<input onChange={this.inputHandler} type="text" name="" id=""/>
				<button onClick={this.searchProducts} >Search Products</button>
			</div>
		)
	}
}