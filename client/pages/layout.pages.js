import React, { Component } from 'react';
import TopMenu from '../components/TopMenu/TopMenu';
import MobileTopMenu from '../components/MobileTopMenu/MobileTopMenu';
import TopLoading from '../components/TopLoading/TopLoading';
import Utilities from '../utilities';
import Toast from '../components/Toast/Toast'



class Layout extends Component {
    render() {
        const ifactive = Utilities.Navigate.toggleTopBack(this.props.location.pathname);
        const iflogin = true;
        var paddingTop = '';
        if (Utilities.IfMobile && iflogin && ifactive) {
            paddingTop = '20vh';
        } else if (ifactive) {
            paddingTop = '64px';
        }
        return (
            <div style={{ paddingTop: paddingTop, backgroundColor: ifactive ? '#f5f2ed' : '' }}>
                <TopMenu active={ifactive} />
                <TopLoading />
                <Toast />
                {this.props.children}
            </div>
        );
    }
}

export default Layout;