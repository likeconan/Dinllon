import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import { Translate, Authorize } from 'utilities';

class QuickActivityAction extends Component {
    render() {
        const ifOwn = this.props.userId === Authorize.getLoggedUserId();
        const status = this.props.joined ? this.props.joined.status : null;
        const ifDisable = ifOwn || status === 2;
        var label = Translate.lang.join_in;
        if (ifOwn) {
            label = Translate.lang.join_in_own
        } else if (status === 2) {
            label = Translate.lang.applied
        } else if (status === 1) {
            label = Translate.lang.apply_cancel
        }
        return (
            <RaisedButton
                className='width-100p'
                disabled={ifDisable}
                label={label}
                primary={status !== 1}
                secondary={status === 1} />
        );
    }
}

export default QuickActivityAction;