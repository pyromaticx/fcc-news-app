var React = require('react');
var Modal = require('react-modal');

var PhotoElem = React.createClass({
   getInitialState: function() {
    return { modalIsOpen: false };
  },
  loadWebm: function() {
    window.open(this.props.data.webm);
  },

  openModal: function() {
    this.setState({modalIsOpen: true});
  },

  closeModal: function() {
    this.setState({modalIsOpen: false});
  },

  render: function() {
    var modalStyles = {
       content : {
         top                   : '50%',
         left                  : '50%',
         right                 : 'auto',
         bottom                : 'auto',
         marginRight           : '-50%',
         transform             : 'translate(-50%, -50%)',
         overflow              : 'auto',
         WebkitOverflowScrolling    : 'touch',
         maxHeight : '80vh'
       },
       overlay : {
         position          : 'fixed',
         top               : 0,
         left              : 0,
         right             : 0,
         bottom            : 0,
         backgroundColor   : 'rgba(033, 033, 033, 0.5)'
       }
     };
    var imgStyle = {
      backgroundImage: 'url(' + this.props.link + ')',
      backgroundSize: 'contain',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      height: '30vw',
      marginBottom: '40',
    };
    var biggerImage = {
      backgroundImage: 'url(' + this.props.link + ')',
      backgroundSize: 'contain',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      height: '50vh',
      minWidth: '70vw'


    };
    return (
    <div key={this.props.counter}>
      <div className="col-xs-12 col-sm-6 col-md-4">
        <div onClick={this.openModal} value={this.props.link} style={imgStyle} className='container-fluid'>
          <Modal
            isOpen={this.state.modalIsOpen}
            onRequestClose={this.closeModal}
            style={modalStyles} >
            {console.log(this.props.data)}
            <div className='row'>
              <div className="text-center">
                <h2>{this.props.data.title}</h2>
              </div>
              <div style={biggerImage}></div>
              <div className='col-xs-10 col-xs-offset-1'>
                {this.props.data.description}
              </div>
            </div>
            <div className='col-xs-offset-4 col-xs-4'>
              <button style={{marginTop: '30'}} className='btn btn-primary col-xs-12' onClick={this.closeModal}>
                Close
              </button>
              {this.props.data.webm ? (<button onClick={this.loadWebm}
                                               style={{marginTop: '30'}}
                                               className='col-xs-12 btn btn-info'>Webm</button>) : ''}
            </div>
          </Modal>
        </div>
      </div>
    </div>
  );
  }
});
module.exports = PhotoElem;
