import React, { Component } from 'react';
import ProfileActivityChildren from '../ProfileActivityChildren/ProfileActivityChildren';
import { connect } from 'react-redux';
import { getUserActivities } from '../../actions/profile.action';
import storage from 'store2';

@connect((store) => {
    return {
        activities: store.profile.activities
    }
})

class ProfileActivity extends Component {

    componentWillMount() {
        const userid = storage.session('ss.profile.user.id');
        this.props.dispatch(getUserActivities(userid));
    }

    render() {
        var child = this.props.activities.map((val, key) => {
            return <ProfileActivityChildren data={val} key={key} />
        })
        return (
            <div>
                {child}
            </div>
        );
    }
}

export default ProfileActivity;