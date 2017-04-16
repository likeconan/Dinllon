import React, { Component } from 'react';
import StatusChild from '../StatusChild/StatusChild';

require('./status.less');

class Status extends Component {
    render() {
        var child = this
            .props
            .statusList
            .map((val, key) => {
                return (<StatusChild data={val} key={key} />)
            })
        return (
            <status>
                {child}
            </status>
        );
    }
}

export default Status;