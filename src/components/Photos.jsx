var React = require('react');
var PhotoElem = require('./PhotoElem.jsx');

var Photos = React.createClass({
  getInitialState: function() {
    // Set up loading message, start page, and hide the more button
    return {shownArticles: (<h3>Loading Images...</h3>),
            page: 1,
            buttonHidden: 'hidden'};
  },
  componentWillMount: function() {
    // when loading component for the first time, GET images from imgur with tag
    var counter = 0;

      var settings = (function() {
      return {
        "async": true,
        "crossDomain": true,
        "url": "https://api.imgur.com/3/gallery/t/javascript",
        "method": "GET",
        "headers": {
          "authorization": "Client-ID 15413480fdae22d"
        },
        success: function(json) {
          // for each item in the response, create a PhotoElem
          var articles = json.data.items.map(function(data) {

            if (data.layout == "blog") {
              return false;
            }
            return (
              <PhotoElem key={counter++}
                         link={data.link}
                         data={data}/>

            );
          }.bind(this));
          // put all articles into the state
          this.setState({imgurData: articles,
                         buttonHidden: ''});
          // calls once to load the first set of articles
          this.loadArticles();
        }.bind(this),
        error: function(err) {
          console.log(err)
        }
      };

    }.bind(this)());
    // actual AJAX request
    $.ajax(settings);

  },
  loadArticles: function() {
    // loads articles based on current page
    var current = this.state.page;
    console.log(this.state.imgurData.length);
    // if page has gone below 0, set page to the last page
    if(current <= 0) {
      current = Math.floor((this.state.imgurData.length - 1) / 6);
    }
    // if page has gone above total pages of articles, goto the beginning
    if(current > Math.floor((this.state.imgurData.length - 1) / 6)) {
      current = 1;
    }
    // filter articles based on the page and their respective keys
    var shownArticles = this.state.imgurData.filter(function(photo){
      if(photo.key >= ((current * 6) - 6) && photo.key < (current * 6)) {
        return photo;
      }
    });
    // place only the articles we want to show into the state
    this.setState({shownArticles: shownArticles,
                   page: current});
    // force scroll to top of page on new articles being loaded
    $(document).scrollTop(0);
  },
  loadLess: function() {
    // decrement page
    this.setState({page: this.state.page -= 1});
    setTimeout(this.loadArticles,0);
  },
  loadMore: function() {
    // increment page
    this.setState({page: ++this.state.page});
    setTimeout(this.loadArticles,0);
  },
  render: function() {
    var wrapperStyle = {
      backgroundImage: 'linear-gradient(180deg, rgba(255,255,255,0.3),rgba(255,255,255,0.2) 50%,rgba(255,255,255,0) 100% )',
      boxShadow: 'inset 0 10px 20px rgba(255,255,255,0.2)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      borderRadius: '20',
      padding: '75',
    };

    return (
      <div style={wrapperStyle} className={'container ' + this.state.buttonHidden}>

        {this.state.shownArticles}

        <div className='row col-xs-offset-1'>
          <button onClick={this.loadLess}
                  className={"btn btn-primary col-xs-5 " + this.state.buttonHidden}>
                  Less
          </button>
          <button onClick={this.loadMore}
                  className={"btn btn-primary col-xs-5 col-xs-offset-1 " + this.state.buttonHidden}>
                  More
          </button>
        </div>
      </div>
    );
  }
});

module.exports = Photos;
