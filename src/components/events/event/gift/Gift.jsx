import React from 'react';

import './Gift.css'

export default function Gift(props) {

	const {giftName, giftPic, price, fund, giftId} = props.gift
	
	return (
		<div className="gift">
			

			<section className="presentGift">
				<img src={giftPic} alt={giftName}/>
				<h4>{giftName}</h4>
			</section>

			<section className="money" >
				<p>Price: ${price}</p><br/>
				 <p>Fund: ${fund}</p>
			</section>

			<div className="giftButtons">
				<button onClick={() => this.props.removeGift(giftId)} >Order</button>
			</div>
		</div>
	)
}