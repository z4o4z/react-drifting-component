## Demo
 https://z4o4z.github.io/react-interactive/dist/demo/

## Installation
`npm i react-interactive -S`

## How to use?
```
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

```

## Api
 - maxRange - maximum range for desktop between center and one of the edges
 - maxMobileRange - maximum range for mobile between center and one of the edges
 - reverse - move in the opposite direction
 - className
 - style
 - scale

## Support events
 - mousemove - for desktop
 - deviceorientation - for mobile
