import React, { Component } from 'react';
import TopMenu from '../components/TopMenu/TopMenu';
class Layout extends Component {
    render() {
        return (
            <div>
                <TopMenu />
                {this.props.children}
            </div>
        );
    }
}

export default Layout;