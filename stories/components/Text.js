import React from 'react';
import PropTypes from 'prop-types';

export default function Text({
  pos, text, onRef, className,
}) {
  return (
    <div
      ref={onRef}
      style={{ transform: `translateX(${pos.x}px) translateY(${pos.y}px)` }}
      className="text-wrapper"
    >
      <h1 className={className}>{text}</h1>
    </div>
  );
}

Text.propTypes = {
  pos: PropTypes.shape({
    x: PropTypes.number,
    y: PropTypes.number,
  }).isRequired,
  text: PropTypes.string.isRequired,
  onRef: PropTypes.func.isRequired,
  className: PropTypes.string.isRequired,
};
