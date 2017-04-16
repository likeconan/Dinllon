import React, { Component } from 'react';
import { searchLife } from 'actions/social-status.action';
import { connect } from 'react-redux';
import Status from 'components-dumb/Status/Status';

@connect((store) => {
    return { statusList: store.socialStatus.statusList }
})

class SearchedMoments extends Component {

    componentWillMount() {
        this
            .props
            .dispatch(searchLife());
    }
    render() {
        return (
            <Status statusList={this.props.statusList} />
        );
    }
}

export default SearchedMoments;