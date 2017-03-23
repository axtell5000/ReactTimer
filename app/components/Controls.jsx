var React = require('react');


var Controls = React.createClass({

  propTypes: {
    countdownStatus: React.PropTypes.string.isRequired
  },
  render: function () {

    var {countdownStatus} = this.props;

    var renderStartStopButton = () => {
      if(countdownStatus === 'started'){
        return <button className="bottom secondary">Pause</button>
      } else if (countdownStatus === 'paused'){
        return <button className="bottom primary">Start</button>
      }
    };

    return (
      <div className="controls">
        {renderStartStopButton()}
        <button className="bottom alert hollow">Clear</button>
      </div>
    );

  }

});

module.exports = Controls;
