import React, { Component } from 'react';
import store from 'store2';
import Classnames from 'classnames';
import { connect } from 'react-redux';
import { getProfile } from '../actions/profile.action';

@connect((store) => {
    return {
        isAuthorize: store.user.isAuthorize
    }
})
class Profile extends Component {
    componentWillMount() {
        const userid = store.session('ss.profile.user.id');
        this.props.dispatch(getProfile(userid));
    }

    render() {
        return (
            <profile-page class={Classnames({ 'logged-page': this.props.isAuthorize })}>
                <div className='123'>
                    this is profile ok?
                </div>
            </profile-page>
        );
    }
}

export default Profile;