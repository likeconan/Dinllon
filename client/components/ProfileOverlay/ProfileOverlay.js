import React, { Component } from 'react';
import { connect } from 'react-redux';

require('./profile-overlay.less');

@connect((store) => {
    return {
        show: store.profile.enableEdit
    }
})

class ProfileOverlay extends Component {
    render() {
        return (
            <profile-overlay class={this.props.show ? 'show' : ''}>
            </profile-overlay>
        );
    }
}

export default ProfileOverlay;