import React, { Component } from 'react';
import { connect } from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';
import { Translate } from '../../utilities';

class InviteButton extends Component {
    render() {
        return (
            <div className={this.props.className}>
                <RaisedButton label={Translate.lang.invite_to} primary={true} />
            </div>
        );
    }
}

export default InviteButton;