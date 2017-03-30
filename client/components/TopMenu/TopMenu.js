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
import { getLoggedUser } from '../../actions/user.action';

require('./top-menu.less');

@connect((store) => {
    return { isAuthorize: store.user.isAuthorize, user: store.user.loggedUser }
})

class TopMenu extends Component {

    componentWillMount() {
        this
            .props
            .dispatch(getLoggedUser());
    }

    render() {
        const activeObj = this.props.activeObj;
        var user = new UserModel(this.props.user).user;
        return (
            <top-menu class={Classnames({ 'logged': this.props.isAuthorize })}>
                <div
                    className={Classnames('center-flex tm-con', {
                        'active-back z-depth-1': activeObj.active
                    }, {
                            'logged': this.props.isAuthorize && activeObj.mbActive
                        })}>
                    <strong className='margin-2vh2vw mont-font cursor-pointer'>
                        <Link to='/life'>Dinllon</Link>
                    </strong>
                    {activeObj.active && <SearchBar active={activeObj.active} />}
                    {this.props.isAuthorize
                        ? (<UserIconMenu />)
                        : (
                            <span className='margin-2vh2vw cursor-pointer roboto-font'>
                                <Link to='/login'>LOGIN</Link>
                            </span>
                        )
                    }

                </div>
                <DivBackImage
                    imgSrc={user.backPic}
                    className={Classnames('mb-login-user-con z-depth-1', {
                        'logged': this.props.isAuthorize && activeObj.mbActive
                    })}>
                    <div className='height-100p center-flex top-profile-con'>
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
                                <UserDataCon className='mb-lu-con' invisible={true} />
                            </div>
                        </div>
                    </div>
                    <UserIconMenu className='mb-icon-menu' />
                </DivBackImage>
            </top-menu>
        );
    }
}

export default TopMenu;