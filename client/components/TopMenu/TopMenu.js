import React, { Component } from 'react';
import { Link } from 'react-router';
import Classnames from 'classnames';
import SearchBar from '../SearchBar/SearchBar';
import { IfMobile } from '../../utilities';
import DivBackImage from '../DivBackImage/DivBackImage';
import UserDataCon from '../UserDataCon/UserDataCon';
import { UserModel } from '../../models';

require('./top-menu.less');

class TopMenu extends Component {
    render() {
        console.log(IfMobile)
        const active = this.props.active;
        const iflogin = true;
        var user = new UserModel(this.props.user);
        return (
            <top-menu>
                <div className={Classnames('center-flex tm-con white-text', { 'active-back z-depth-1': active }, { 'logged': iflogin })}>
                    <strong className='margin-2vh2vw mont-font cursor-pointer'>
                        <Link to='/'>Dinllon</Link>
                    </strong>
                    {active && <SearchBar active={active} />}
                    <span className='margin-2vh2vw cursor-pointer roboto-font'>
                        <Link to='/login'>LOGIN</Link>
                    </span>
                </div>
                <DivBackImage imgSrc={user.backPic} className={Classnames('blue darken-1 mb-login-user-con', { 'logged': iflogin })}>
                    <div className='height-100p center-flex'>
                        <div className='center-flex'>
                            <div className='circle profile-img-con all-center-flex'>
                                <img src={user.headPic} className='circle' />
                            </div>
                            <div className='column-center'>
                                <div className='margin-bottom'>
                                    <p className='white-text profile-nickname cursor-pointer'>{user.nickName}</p>
                                </div>
                                <UserDataCon className='mb-lu-con' />
                            </div>

                        </div>
                    </div>
                </DivBackImage>
            </top-menu>
        );
    }
}

export default TopMenu;