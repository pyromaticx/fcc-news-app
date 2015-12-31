var React = require('react');

var NewsGetter = React.createClass({

  //sets up an inital loading articles message
  getInitialState: function() {
    var loadingStyle = {
      height:'450',
      background: '#fff',
      textAlign: 'center',
      paddingTop: '70',
      paddingBottom: '70',
      boxShadow: '0 10px 20px rgba(100,100,100,0.5)'
    };

    return ({shownArticles: (<div style={loadingStyle}><h3>Loading articles...</h3></div>),
             hideMoreButton: 'hidden',
             page: 1});
  },

  componentDidMount: function() {

    // get request to news api hotend. Should return array of news stories
    $.get('http://www.freecodecamp.com/news/hot', function(result) {
      // used to order articles for pagination, sorted by upvotes most to least
        var articleKey = 0;
      // sort the array by upvotes, least to most
      var sorted = result.sort(function(a, b) {
        return a.upVotes.length - b.upVotes.length;
      });
      // flip the order so that most upvotes comes first
      var ordered = sorted.reverse();
      // format each news article with styles and JSX
      var formatted = ordered.map(function(article) {

      var articlePhoto = {
        backgroundImage: 'url(' + article.author.picture + ')',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: '200',
        marginTop: '30',
        marginBottom: '20'
      };
      var wrapperStyle = {
        marginBottom: '100',
        boxShadow: '0 10px 20px rgba(100,100,100,0.2)',
        padding: '80',
        background: '#fff'
      };
      var usernameStyle = {
        fontSize: '2vw',
        marginTop: '220',
        textAlign: 'center'
      };
      var rowStyle = {
        marginTop: '-50'
      };

        return (
          <div id='article' style={wrapperStyle} key={articleKey++}>
            <div style={rowStyle} className='row'>
              <div className='col-xs-4'>
                <div style={articlePhoto} className='col-xs-12'>
                  <h3 style={usernameStyle}>{article.author.username}</h3>
                </div>
              </div>
              <div className='col-xs-7 col-xs-offset-1'>
                <a target="_blank" href={article.link}>
                  <h2>{article.headline}</h2>
                </a>
                <hr />
                <h4>{article.metaDescription}</h4>
                <h5 className="fa fa-thumbs-o-up"> Up-Votes{": "+ article.upVotes.length}</h5>
              </div>
            </div>
          </div>
        );
      });
      this.setState({articles: formatted,
                     hideMoreButton: ''});
      //calls the pagination function to load initial articles
    this.loadMore();
    }.bind(this));
  },
  loadMore: function() {
    var current = this.state.page;
    var shownArticles = [];

    shownArticles = this.state.articles.filter(function(el) {
      if(el.key < (current * 5)) {
        return el;
      }
    });

    current++;
    this.setState({shownArticles: shownArticles,
                   page: current});
  },
  render: function() {
    return (
      <div className='container'>
        {this.state.shownArticles}
        <button className={'col-xs-4 col-xs-offset-4 btn btn-primary ' + this.state.hideMoreButton}
                onClick={this.loadMore}>More
        </button>
      </div>
    );
  }
});
module.exports = NewsGetter;
