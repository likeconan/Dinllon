import React, { Component } from 'react';
import Classnames from 'classnames';
import UserHeadName from 'components-dumb/UserHeadName/UserHeadName';

require('./profile-activity-user-list.less');

class ProfileActivityUserList extends Component {
    render() {
        return (
            <profile-activity-user-list class={Classnames(this.props.className)}>
                <h6 className={Classnames('mont-font', this.props.titleClass)}>{this.props.title}</h6>
                <div>
                    {
                        this.props.joinedUsers.map((val, key) => {
                            return (
                                <UserHeadName user={val.User} key={key} />
                            )
                        })
                    }
                </div>
            </profile-activity-user-list>
        );
    }
}

export default ProfileActivityUserList;