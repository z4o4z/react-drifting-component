import { Component } from 'react';
import PropTypes from 'prop-types';

const getDegreeSin = degree => Math.sin(Math.PI * degree / 180);

export default class DriftingComponent extends Component {
  static propTypes = {
    reverse: PropTypes.bool,
    children: PropTypes.func.isRequired,
    maxRange: PropTypes.number.isRequired,
    maxMobileRange: PropTypes.number.isRequired,
  };

  static defaultProps = {
    reverse: false,
  };

  state = {
    pos: { x: 0, y: 0 },
    top: null,
    left: null,
    factorX: null,
    factorY: null,
    halfWidth: null,
    halfHeight: null,
  };

  node = null;

  frame = null;

  componentDidMount() {
    this.onResize();

    window.addEventListener('resize', this.onResize);
    window.addEventListener('mousemove', this.onMouseMove);
    window.addEventListener('deviceorientation', this.onDeviceOrientation);
  }

  componentWillUnmount() {
    if (this.frame) {
      cancelAnimationFrame(this.frame);
    }

    window.removeEventListener('resize', this.onResize);
    window.removeEventListener('mousemove', this.onMouseMove);
    window.removeEventListener('deviceorientation', this.onDeviceOrientation);
  }

  onRef = (node) => {
    this.node = node;
  };

  onResize = () => {
    const { top, left } = this.node.getBoundingClientRect();

    this.setState({
      top,
      left,
      factorX: this.props.maxRange / (window.innerWidth / 2) * (this.props.reverse ? -1 : 1),
      factorY: this.props.maxRange / (window.innerHeight / 2) * (this.props.reverse ? -1 : 1),
      halfWidth: this.node.offsetWidth / 2,
      halfHeight: this.node.offsetHeight / 2,
    });
  };

  // beta = x [-180; 180];
  // gamma = y [-90; 90];
  // alpha = z [0; 360];
  onDeviceOrientation = ({ beta, gamma }) => {
    this.frame = requestAnimationFrame(() => {
      const maxMobileRange = this.props.maxMobileRange * (this.props.reverse ? -1 : 1);
      const pos = { x: 0, y: 0 };

      if (window.orientation) {
        pos.x = getDegreeSin(beta) * maxMobileRange;
        pos.y = getDegreeSin(gamma * 2) * maxMobileRange;
      } else {
        pos.x = getDegreeSin(gamma * 2) * maxMobileRange;
        pos.y = getDegreeSin(beta) * maxMobileRange;
      }

      this.setState({ pos });
    });
  };

  onMouseMove = ({ clientX, clientY }) => {
    this.frame = requestAnimationFrame(() => {
      const pos = {
        x: this.state.factorX * (clientX - this.state.left - this.state.halfWidth),
        y: this.state.factorY * (clientY - this.state.top - this.state.halfHeight),
      };

      this.setState({ pos });
    });
  };

  render() {
    return this.props.children({
      pos: this.state.pos,
      onRef: this.onRef,
    });
  }
}
