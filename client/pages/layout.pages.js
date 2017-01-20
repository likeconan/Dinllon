import React, { Component } from 'react';

class Layout extends Component {
    render() {
        return (
            <div>
                this is layout
                {this.props.children}
            </div>
        );
    }
}

export default Layout;