var React = require('react'),
    mui = require('material-ui'),
    Paper = mui.Paper,
    Toolbar = mui.Toolbar,
    ToolbarGroup = mui.ToolbarGroup,
    DropDownMenu = mui.DropDownMenu,
    TextField = mui.TextField,
    FlatButton = mui.FlatButton,
    Snackbar = mui.Snackbar;

var menuItemsIwant = [
  { payload: '1', text: '[Select a finacial purpose]' },
  { payload: '2', text: 'Every Night' },
  { payload: '3', text: 'Weeknights' },
  { payload: '4', text: 'Weekends' },
  { payload: '5', text: 'Weekly' }
];

var Content = React.createClass({

  getInitialState: function() {
    return {
      errorTextName: '',
      errorTextAge: '',
      errorTextCity: '',
      errorTextState: '',
      textFieldValue: ''
    };
  },

  render: function() {

    return (
      <div className="container-fluid">
        <div>
                <TextField value={this.state.textFieldValue} onChange={this._handleTextFieldChange} />
        </div>
        <div className="row color-bg"></div>
        <div className="row main-bg">
          <div className="container">
            <div className="mui-app-content-canvas page-with-nav">
              <div className="page-with-nav-content">

                <Paper zDepth={1}>

                  <h2 className="title-h2">Now, what would you like to do?</h2>

                  <Toolbar>
                    <ToolbarGroup key={1} float="right">
                      <span>I want to</span>
                      <DropDownMenu
                        className="dropdown-long"
                        menuItems={menuItemsIwant}
                        //autoWidth={false}
                      />
                    </ToolbarGroup>
                  </Toolbar>

                  <div className="clearfix"></div>

                  <div className="button-place">
                    <FlatButton
                      onTouchTap={this._handleClick}
                      label="I'm done lets go!"
                    />

                    <Snackbar
                      ref="snackbar"
                      message="Invalid input, please check and try again"
                    />
                  </div>

                </Paper>

              </div>
            </div>
          </div>
        </div>
      </div>
    );
  },

  _handleErrorInputChange: function(e) {
    if (e.target.id === 'name') {
      var name = e.target.value;
      this.setState({
        //name: name,
        errorTextName: e.target.value ? '' : 'Please, type your Name'
      });
    } else if (e.target.id === 'age') {
      var age = e.target.value;
      this.setState({
        //age: age,
        errorTextAge: e.target.value ? '' : 'Check Age'
      });
    } else if (e.target.id === 'city') {
      var city = e.target.value;
      this.setState({
        //city: city,
        errorTextCity: e.target.value ? '' : 'Type City'
      });
    } else if (e.target.id === 'state') {
      var state = e.target.value;
      this.setState({
        //state: state,
        errorTextState: e.target.value ? '' : 'Type State'
      });
    }
  },

  _handleClick: function(e) {
    this.refs.snackbar.show();
    //TODO: find a way to change errorText for all empty TextField
    if (this.refs.textfield && this.refs.textfield.getValue().length === 0) {
      this.setState({
        errorTextState: 'Type State',
        errorTextCity: 'Type City',
        errorTextAge: 'Check Age',
        errorTextName: 'Please, type your Name'
      });
    }
  },

  _handleTextFieldChange: function(e) {
    this.setState({
        textFieldValue: e.target.value
    });
},

});

module.exports = Content;