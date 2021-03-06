var React = require('react');

var WeatherForm = React.createClass({
  onFormSubmit: function(e) {
    e.preventDefault();
    var location = this.refs.location.value;

    if (location.length > 0) {
      this.props.onSearch(location);
      this.refs.location.value = '';
    }
  },
  render: function() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <input ref="location" type="text" placeholder="Enter city name or zip code"></input>
        <div>
          <button>Get Weather</button>
        </div>
      </form>
    );
  }
});

module.exports = WeatherForm;
