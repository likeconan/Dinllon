import React, { Component } from 'react';
import Snackbar from 'material-ui/Snackbar';


class Toast extends Component {
    render() {
        return (
            <Snackbar open={true} message="Event added to your calendar" autoHideDuration={3000} />

        );
    }
}

export default Toast;