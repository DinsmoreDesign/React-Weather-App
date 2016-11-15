var React = require('react');

var WeatherMessage = React.createClass({
  render: function() {
    return (
      <h3>It's ___°F outside.</h3>
    );
  }
});

module.exports = WeatherMessage;
