var React = require('react');
var ReactRouter = require('react-router');
var CreateHistory = require('history/lib/createHashHistory')
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;

var Base = require('./Base.jsx');
var NewsGetter = require('./NewsGetter.jsx');
var Photos = require('./Photos.jsx');
var History = new CreateHistory({
  queryKey: false
});

var Routes = (
  <Router history={History}>
    <Route path="/" component={Base} >
      <IndexRoute component={NewsGetter}/>
      <Route path="/photos" component={Photos} />
    </Route>
  </Router>
);

module.exports = Routes;
