import React, { Component } from 'react';
import FullBackImage from 'components-dumb/FullBackImage/FullBackImage';

class AccountLayout extends Component {
    render() {
        return (
            <FullBackImage backSrc='./client/assets/images/account-back-big.jpg' className='column-center center-flex'>
                {this.props.children}
            </FullBackImage>
        );
    }
}

export default AccountLayout;