if (process.env.NODE_ENV === 'production') {
  module.exports = require('./react-drifting-component');
} else {
  module.exports = require('./react-drifting-component.prod');
}
