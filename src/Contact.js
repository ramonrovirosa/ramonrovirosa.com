import React, { Component } from 'react';
import { connect } from 'react-redux';

//Import store
// import store from './js/Redux/store';

//Import actions
import * as contactActions from './js/Redux/actions/contact'

class Contact extends Component {

  componentDidMount() {
      contactActions.setContactEmail('ramon.rovirosa@gmail.com')
  }

  render() {
    return (
      <div className="contact">
        <div>Questions? You can email me @{this.props.contact.email}</div>
      </div>
    );
  }
}

const mapStateToProps = (store) => {
    return {
        contact: store.contact
    };
};

export default connect(mapStateToProps)(Contact);
