import React, { Component } from 'react';
import { Navigate } from '../../utilities';

require('./link-profile-name.less');

class LinkProfileName extends Component {

    constructor(props) {
        super(props);
    }

    _navigateProfile = () => {
        Navigate.goToProfile('abc');
    }
    render() {
        return (
            <link-profile-name onClick={this._navigateProfile}>
                {this.props.children}
            </link-profile-name>
        );
    }
}

export default LinkProfileName;