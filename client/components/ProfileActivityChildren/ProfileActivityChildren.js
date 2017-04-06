import React, { Component } from 'react';
import FlexImages from '../FlexImages/FlexImages';
import Classnames from 'classnames';
import IconButton from 'material-ui/IconButton';
import EditIcon from 'material-ui/svg-icons/image/edit';
import DeleteIcon from 'material-ui/svg-icons/action/delete';
import { Translate } from '../../utilities';
import ProfileActivityUserList from '../ProfileActivityUserList/ProfileActivityUserList';


require('./profile-activity-children.less');

class ProfileActivityChildren extends Component {
    render() {
        const ifactive = this.props.data.Images.length > 0;
        return (
            <profile-activity-children >
                <div className={Classnames('activity-img-text-con', { 'with-image': ifactive })}>
                    <div className='aitc-text'>
                        <div className='aitc-icon-con center-flex'>
                            <IconButton><EditIcon color={ifactive ? '#fafafa' : '#9e9e9e'} /></IconButton>
                            <IconButton><DeleteIcon color={ifactive ? '#fafafa' : '#9e9e9e'} /></IconButton>
                        </div>
                        <div className='aitct'>
                            {this.props.data.textContent}
                        </div>
                    </div>
                    <FlexImages imgContent={this.props.data.Images} />
                </div>
                <ProfileActivityUserList className={Classnames('apply-user-con', { 'no-image': !ifactive })}
                    title={Translate.lang.applied_user} titleClass='applied-text' />
            </profile-activity-children >
        );
    }
}

export default ProfileActivityChildren;