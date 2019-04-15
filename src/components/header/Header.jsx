import React from 'react';
import {FaGift} from 'react-icons/fa';

import './Header.css'


export default function Header(props) {
	
	return (
		<header className={!props.showHeader ? "hide": null}>
			<div className="logo">
				<FaGift className="present" />
				<h1>giftme</h1>
			</div>
    </header>
	)
}