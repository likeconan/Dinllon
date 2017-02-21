import React, { Component } from 'react';
import UserBrief from '../UserBrief/UserBrief';
import DivBackImage from '../DivBackImage/DivBackImage';
import UserDataCon from '../UserDataCon/UserDataCon';
import { UserModel } from '../../models';

require('./mobile-top-menu.less');

class MobileTopMenu extends Component {
    render() {
        var user = new UserModel(this.props.user);
        return (
            <mobile-top-menu class='z-depth-1'>
                <DivBackImage imgSrc='https://testfor.blob.core.chinacloudapi.cn/images/c54f9c75-7bee-4d50-a174-9abda5ddbf6d.jpeg' className='blue darken-1'>
                    <div className='mb-login-user-con center-flex'>
                        <div className='center-flex'>
                            <div className='circle profile-img-con all-center-flex'>
                                <img src={user.headPic} className='circle' />
                            </div>
                            <div className='column-center'>
                                <div className='margin-bottom'>
                                    <p className='white-text profile-nickname cursor-pointer'>{user.nickName}</p>
                                </div>
                                <UserDataCon className='mb-lu-con'/>
                            </div>

                        </div>
                    </div>
                </DivBackImage>

            </mobile-top-menu>
        );
    }
}

export default MobileTopMenu;