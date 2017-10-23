import React from 'react';
import PropTypes from 'prop-types';

export default function Background({ pos, onRef }) {
  return (
    <div
      ref={onRef}
      style={{ transform: `translateX(${pos.x}px) translateY(${pos.y}px)` }}
      className="background"
    />
  );
}

Background.propTypes = {
  pos: PropTypes.shape({
    x: PropTypes.number,
    y: PropTypes.number,
  }).isRequired,
  onRef: PropTypes.func.isRequired,
};
