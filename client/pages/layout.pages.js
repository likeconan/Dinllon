import React, { Component } from 'react';
import TopMenu from '../components/TopMenu/TopMenu';
import Utilities from '../utilities';

class Layout extends Component {
    render() {
        const ifactive = Utilities.Navigate.toggleTopBack(this.props.location.pathname);
        return (
            <div style={{ paddingTop: ifactive ? '64px' : '' }}>
                <TopMenu active={ifactive} />
                {this.props.children}
            </div>
        );
    }
}

export default Layout;