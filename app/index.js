var React = require('react');
var reactDOM = require('react-dom');
require('index.css');

class App extends React.Component {
  render() {
    return <div className="hello world" />;
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
