import React, { Component } from 'react';
require('./top-menu.less');

class TopMenu extends Component {
    render() {
        return (
            <top-menu class='center-flex white-text'>
                <strong className='margin-2vh2vw mont-font cursor-pointer'>Dinllon</strong>
                <div>
                    <span className='margin-2vh2vw cursor-pointer'>Log In</span>
                    <span className='margin-2vh2vw cursor-pointer'>Sign Up</span>
                </div>
            </top-menu>
        );
    }
}

export default TopMenu;