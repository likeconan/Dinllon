import React, { Component } from 'react';
import { Link } from 'react-router';
import Classnames from 'classnames';
import SearchBar from '../SearchBar/SearchBar';
require('./top-menu.less');

class TopMenu extends Component {
    render() {
        const active = this.props.active;
        return (
            <top-menu class={Classnames('center-flex white-text', { 'active-back': active })}>
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