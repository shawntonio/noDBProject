import React from 'react';

export default function Gift(props) {
	const {giftName, giftPic, price, giftId, fund} = props.gift
	return (
		<div className="gift">
			<h4>{giftName}</h4>
			<div className="giftInfo">
				<img src={giftPic} alt={giftName}/>
				<p>{`Price: ${price} Fund: ${fund}`}</p>
			</div>
		</div>
	)
}