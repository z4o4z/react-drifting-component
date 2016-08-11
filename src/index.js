import React, {Component, PropTypes} from 'react';
import shallowCompare from 'react-addons-shallow-compare';
import cns from 'classnames';
import 'raf';

export default class Interactive extends Component {
	static propTypes = {
		maxMobileRange: PropTypes.number.isRequired,
		maxRange: PropTypes.number.isRequired,
		className: PropTypes.string,
		children: PropTypes.any,
		reverse: PropTypes.bool,
		scale: PropTypes.number,
		style: PropTypes.object
	};

	render() {
		return (
			<div
				className={cns('c-interactive', this.props.className)}
				style={this.props.style}
				ref="interactive"
			>
				{this.props.children || null}
			</div>
		);
	}

	shouldComponentUpdate(nextProps, nextState) {
		return shallowCompare(this, nextProps, nextState);
	}

	componentDidMount() {
		this.onResize();

		window.addEventListener('deviceorientation', this.onDeviceOrientation);
		window.addEventListener('mousemove', this.onMouseMove);
		window.addEventListener('resize', this.onResize);
	}

	componentWillUnmount() {
		if (this.frame) {
			cancelAnimationFrame(this.frame);
		}

		window.removeEventListener('resize', this.onResize);
		window.removeEventListener('mousemove', this.onMouseMove);
		window.removeEventListener('deviceorientation', this.onDeviceOrientation);
	}

	addInteractiveToElement(x, y, z) {
		if (!this.refs.interactive) {
			return;
		}

		if (this.props.reverse) {
			x = -x;
			y = -y;
			z = -z;
		}

		let transform = `translateX(${x}px) translateY(${y}px) translateZ(${z}px)`;

		if (this.props.scale) {
			transform += ` scale(${this.props.scale})`;
		}

		this.refs.interactive.style.WebkitTransform = transform;
		this.refs.interactive.style.transform = transform;
	}

	// beta = x [-180; 180];
	// gamma = y [-90; 90];
	// alpha = z [0; 360];
	onDeviceOrientation = ({beta, gamma}) => {
		this.frame = requestAnimationFrame(() => {
			let maxMobileRange = this.props.maxMobileRange;
			let translateX;
			let translateY;

			if (window.orientation) {
				translateX = Interactive.getDegreeSin(beta) * maxMobileRange;
				translateY = Interactive.getDegreeSin(gamma * 2) * maxMobileRange;
			} else {
				translateX = Interactive.getDegreeSin(gamma * 2) * maxMobileRange;
				translateY = Interactive.getDegreeSin(beta) * maxMobileRange;
			}

			this.addInteractiveToElement(translateX, translateY, 0);
		});
	};

	onMouseMove = ({clientX, clientY}) => {
		this.frame = requestAnimationFrame(() => {
			let translateX = this.state.percentTranslateX * (clientX - this.state.elementLeft - this.state.halfElementWidth);
			let translateY = this.state.percentTranslateY * (clientY - this.state.elementTop - this.state.halfElementHeight);

			this.addInteractiveToElement(translateX, translateY, 0);
		});
	};

	onResize = () => {
		let node = this.refs.interactive;
		let {top, left} = Interactive.getElementOffset(node);

		this.setState({
			percentTranslateX: this.props.maxRange / (window.innerWidth / 2),
			percentTranslateY: this.props.maxRange / (window.innerHeight / 2),
			elementTop: top,
			elementLeft: left,
			halfElementWidth: node.offsetWidth / 2,
			halfElementHeight: node.offsetHeight / 2
		});
	};

	static getDegreeSin(degree) {
		return Number(Math.sin(Math.PI * degree / 180).toFixed(3));
	}

	static getElementOffset(elem) {
		let top = 0;
		let left = 0;

		while (elem) {
			top += parseFloat(elem.offsetTop);
			left += parseFloat(elem.offsetLeft);
			elem = elem.offsetParent;
		}

		return {
			top: Math.round(top),
			left: Math.round(left)
		};
	}
}
