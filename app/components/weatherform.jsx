var React = require('react');

var WeatherForm = React.createClass({
  render: function() {
    return (
      <form>
        <input ref="name" placeholder="Enter city name"></input>
        <div>
          <button>Get Weather</button>
        </div>
      </form>
    );
  }
});

module.exports = WeatherForm;
