import React, { Component } from 'react';
import { connect } from 'react-redux';
require('./top-loading.less')

@connect((store) => {
    return {
        classes: store.load.className
    }
})
class TopLoading extends Component {
    render() {
        const {classes} = this.props;
        return (
            <top-loading class={classes}>
            </top-loading>
        );
    }
}

export default TopLoading;