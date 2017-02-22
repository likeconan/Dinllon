import React, { Component } from 'react';

require('./link-profile-name.less');

class LinkProfileName extends Component {

    constructor(props) {
        super(props);
    }

    _navigateProfile = () => {
        console.log('goto')
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