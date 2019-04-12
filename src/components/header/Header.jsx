import React from 'react';
import {FaGift} from 'react-icons/fa';

import './Header.css'


export default function Header(props) {
	
	return (
		<header>
			<div className="logo">
				<FaGift className="present" />
				<h1>Gifty</h1>
			</div>
    </header>
	)
}