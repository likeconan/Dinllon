import React, { Component } from 'react';
import store from 'store2'

class Profile extends Component {
    componentWillMount() {
        const userid = store.session('profile.user.id');
        console.log(userid);
    }

    render() {
        return (
            <profile>
                this is a profile
            </profile>
        );
    }
}

export default Profile;