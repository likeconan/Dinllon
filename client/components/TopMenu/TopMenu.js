import React, { Component } from 'react';
import { Link } from 'react-router';
import Classnames from 'classnames';
import SearchBar from '../SearchBar/SearchBar';
import { IfMobile } from '../../utilities';
import DivBackImage from '../DivBackImage/DivBackImage';
import UserDataCon from '../UserDataCon/UserDataCon';
import { UserModel } from '../../models';
import LinkProfileName from '../LinkProfileName/LinkProfileName';
import UserIconMenu from '../UserIconMenu/UserIconMenu';
import { connect } from 'react-redux';

require('./top-menu.less');

@connect((store) => {
    return {
        isAuthorize: store.user.isAuthorize
    }
})

class TopMenu extends Component {
    render() {
        console.log(IfMobile)
        const active = this.props.active;
        var user = new UserModel(this.props.user);
        return (
            <top-menu>
                <div className={Classnames('center-flex tm-con white-text',
                    { 'active-back z-depth-1': active },
                    { 'logged': this.props.isAuthorize })}>
                    <strong className='margin-2vh2vw mont-font cursor-pointer'>
                        <Link to='/'>Dinllon</Link>
                    </strong>
                    {active && <SearchBar active={active} />}
                    {
                        this.props.isAuthorize ?
                            (
                                <UserIconMenu />
                            ) :
                            (
                                <span className='margin-2vh2vw cursor-pointer roboto-font'>
                                    <Link to='/login'>LOGIN</Link>
                                </span>
                            )
                    }

                </div>
                <DivBackImage imgSrc={user.backPic} className={Classnames('blue darken-1 mb-login-user-con z-depth-1',
                    { 'logged': this.props.isAuthorize })}>
                    <div className='height-100p center-flex'>
                        <div className='center-flex'>
                            <div className='circle profile-img-con all-center-flex'>
                                <img src={user.headPic} className='circle' />
                            </div>
                            <div className='column-center'>
                                <div className='margin-bottom'>
                                    <LinkProfileName>
                                        <p className='white-text profile-nickname cursor-pointer'>{user.nickName}</p>
                                    </LinkProfileName>
                                </div>
                                <UserDataCon className='mb-lu-con' />
                            </div>
                        </div>
                    </div>
                    <UserIconMenu className='mb-icon-menu'/>
                </DivBackImage>
            </top-menu>
        );
    }
}

export default TopMenu;