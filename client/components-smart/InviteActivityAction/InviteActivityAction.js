import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import { connect } from 'react-redux';
import { addActivity } from 'actions/activity.action';
import store from 'store';
import { Translate } from 'utilities';

@connect((store) => {
    return {
        validatedCreate: store.activity.validatedCreate,
        selectTab: store.joinactivity.selectTab,
    }
})

class InviteActivityAction extends Component {
    render() {
        return (
            <RaisedButton
                label={Translate.lang.submit}
                primary={true}
                onTouchTap={this._createActivity}
                disabled={!this.props.validatedCreate && !this.props.selectTab} />
        );
    }
}

export default InviteActivityAction;