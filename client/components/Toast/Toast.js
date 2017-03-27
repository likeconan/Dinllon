import React, { Component } from 'react';
import Snackbar from 'material-ui/Snackbar';
import { connect } from 'react-redux';

require('./toast.less')

@connect((store) => {
    return {
        open: store.toast.open,
        msgObj: store.toast.msgObj,
    }

})

class Toast extends Component {
    render() {
        return (
            <Snackbar open={this.props.open} className={this.props.msgObj.className}
                message={this.props.msgObj.message} autoHideDuration={3000} />

        );
    }
}

export default Toast;