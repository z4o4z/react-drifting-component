import React from 'react';
import ReactDOM from 'react-dom';

import Interactive from '../index';

const root = document.getElementById('root');

ReactDOM.render(
	<div className="wrapper">
		<Interactive maxRange={10} maxMobileRange={20} scale={1.1} className="bg"/>
		<Interactive maxRange={20} maxMobileRange={30} reverse={true} className="meteor-1">
			<img src="http://pre14.deviantart.net/014b/th/pre/i/2012/235/6/1/meteorit_by_morsprinstock-d5c5tix.png"/>
		</Interactive>
		<Interactive maxRange={5} maxMobileRange={10} scale={0.5} reverse={true} className="meteor-2">
			<img src="http://pre14.deviantart.net/014b/th/pre/i/2012/235/6/1/meteorit_by_morsprinstock-d5c5tix.png"/>
		</Interactive>
		<Interactive maxRange={30} maxMobileRange={40} scale={0.5} reverse={true} className="meteor-3">
			<img src="http://pre14.deviantart.net/014b/th/pre/i/2012/235/6/1/meteorit_by_morsprinstock-d5c5tix.png"/>
		</Interactive>
		<Interactive maxRange={20} maxMobileRange={20} className="msg">
			<p>React Interactive</p>
		</Interactive>
	</div>,
	root
);
