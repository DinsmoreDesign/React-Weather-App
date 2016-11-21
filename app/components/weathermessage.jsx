var React = require('react');

var WeatherMessage = ({location, temp}) => {
  return (
    <h3>It's currently {temp}°F in {location}.</h3>
  );
}

module.exports = WeatherMessage;
