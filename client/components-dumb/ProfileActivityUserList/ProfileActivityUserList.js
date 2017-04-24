import React, { Component } from 'react';
import Classnames from 'classnames';
import UserHeadName from 'components-dumb/UserHeadName/UserHeadName';
import RaisedButton from 'material-ui/RaisedButton';
import { Translate } from 'utilities';
import store from 'store';
import { toggleApproveJoinDialog } from 'actions/activity.action';

require('./profile-activity-user-list.less');

class ProfileActivityUserList extends Component {
    render() {
        const userEles = this.props.users.map((val, key) => {
            return (
                <UserHeadName user={val.User} key={key}>
                    {
                        this.props.isApprove &&
                        <RaisedButton label={Translate.lang.approve}
                            primary={true}
                            className='margin-top'
                            onTouchTap={() => store.dispatch(
                                toggleApproveJoinDialog({
                                    open: true,
                                    joinActivityId: val.uuid
                                })
                            )} />
                    }
                </UserHeadName>
            )
        })
        return (
            <profile-activity-user-list class={Classnames(this.props.className)}>
                <h6 className={Classnames('mont-font', this.props.titleClass)}>
                    {this.props.title}
                </h6>
                <div>
                    {
                        this.props.users.length
                            ? userEles :
                            <small className='margin-2vh2vw grey-text text-darken-2'>{this.props.noresult}</small>
                    }
                </div>
            </profile-activity-user-list>
        );
    }
}

export default ProfileActivityUserList;