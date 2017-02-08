import React, { Component } from 'react';
import StatusChild from '../StatusChild/StatusChild';
import { searchLife } from '../../actions/social-status.action';
import { connect } from 'react-redux';


require('./status.less');

@connect((store) => {
    return {
        statusList: store.socialStatus.statusList
    }
})

class Status extends Component {

    componentWillMount() {
        this.props.dispatch(searchLife());
        console.log(12);
    }

    render() {
        var child = this.props.statusList.map((val, key) => {
            return (
                <StatusChild data={val} key={key} />
            )
        })
        return (
            <status>
                {child}
            </status>
        );
    }
}

export default Status;