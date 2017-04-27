import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import { connect } from 'react-redux';
import { addActivity } from 'actions/activity.action';
import store from 'store';
import { Translate, Authorize, TimeFormat } from 'utilities';

@connect((store) => {
    return {
        validatedCreate: store.activity.validatedCreate,
        validatedSelect: store.activity.validatedSelect
    }
})

class InviteActivityAction extends Component {
    render() {
        return (
            <div>

            </div>
        );
    }
}

export default InviteActivityAction;