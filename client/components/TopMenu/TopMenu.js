import React, { Component } from 'react';
import { Link } from 'react-router'
require('./top-menu.less');

class TopMenu extends Component {
    render() {
        return (
            <top-menu class='center-flex white-text'>
                <strong className='margin-2vh2vw mont-font cursor-pointer'>
                    <Link to='/'>Dinllon</Link>
                </strong>
                <div>
                    <span className='margin-2vh2vw cursor-pointer'>
                        <Link to='/login'>Log In</Link>
                    </span>
                    <span className='margin-2vh2vw cursor-pointer'>
                        <Link to='/register'>Sign Up</Link>
                    </span>
                </div>
            </top-menu>
        );
    }
}

export default TopMenu;