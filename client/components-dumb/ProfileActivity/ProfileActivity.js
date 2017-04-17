import React, { Component } from 'react';
import ProfileActivityChildren from '../ProfileActivityChildren/ProfileActivityChildren';
import { Translate } from 'utilities';

class ProfileActivity extends Component {
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