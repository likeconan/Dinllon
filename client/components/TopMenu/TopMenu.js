import React, { Component } from 'react';
import { Link } from 'react-router';
import Classnames from 'classnames';
import SearchBar from '../SearchBar/SearchBar';
import { IfMobile } from '../../utilities';

require('./top-menu.less');

class TopMenu extends Component {
    render() {
        console.log(IfMobile)
        const active = this.props.active;
        return (
            <top-menu class={Classnames('center-flex white-text', { 'active-back z-depth-1': active })}>
                <strong className='margin-2vh2vw mont-font cursor-pointer'>
                    <Link to='/'>Dinllon</Link>
                </strong>
                {active && <SearchBar active={active} />}
                <span className='margin-2vh2vw cursor-pointer roboto-font'>
                    <Link to='/login'>LOGIN</Link>
                </span>
            </top-menu>
        );
    }
}

export default TopMenu;