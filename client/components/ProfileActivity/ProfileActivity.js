import React, { Component } from 'react';
import ProfileActivityChildren from '../ProfileActivityChildren/ProfileActivityChildren';
import { connect } from 'react-redux';
import { getUserActivities } from '../../actions/profile.action';
import { Translate } from '../../utilities';

@connect((store) => {
    return {
        activities: store.profile.activities,
        isOwn: store.profile.isOwn
    }
})

class ProfileActivity extends Component {

    componentWillMount() {
        this.props.dispatch(getUserActivities(this.props.userId));
    }

    render() {
        var child = this.props.activities.map((val, key) => {
            return <ProfileActivityChildren data={val} key={key} isOwn={this.props.isOwn} />
        })
        return (

            <div>
                {
                    this.props.activities.length ?
                        child
                        :
                        <div className='margin-2vh2vw grey-text text-darken-2'>
                            {Translate.lang.no_user_activities}
                        </div>
                }
            </div>
        );
    }
}

export default ProfileActivity;