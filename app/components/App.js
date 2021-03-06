const React = require('react');
const Popular = require('../components/Popular');
const ReactRouter = require('react-router-dom');
const Router = ReactRouter.BrowserRouter;
const Route = ReactRouter.Route;
const Nav = require('./nav');
const Home = require('./Home');
const Battle = require('./Battle');
const Results = require('./Results');
const Switch = ReactRouter.Switch;

class App extends React.Component {
  render() {
    return (
      <Router className="container">
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/battle" component={Battle} />
          <Route path="/battle/results" component={Results} />
          <Route path="/popular" component={Popular} />
          <Route render={() => <p>Not Found</p>} />
        </Switch>
      </Router>
    );
  }
}

module.exports = App;
