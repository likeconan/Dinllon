import React, { Component } from 'react';
import Classnames from 'classnames';
import AlphaTextField from '../AlphaTextField/AlphaTextField';
import RaisedButton from 'material-ui/RaisedButton';
import IconButton from 'material-ui/IconButton';
import { grey50 } from 'material-ui/styles/colors';
import { Navigate } from '../../utilities'

require('./search-bar.less');

class SearchBar extends Component {
    render() {
        const active = this.props.active;
        return (
            <search-bar class={Classnames('center-flex', this.props.className, { 'top-search-bar': active })} >
                <AlphaTextField />
                {active ?
                    (<IconButton iconClassName='material-icons' iconStyle={{ color: grey50 }} > search </IconButton>) :
                    (< RaisedButton label="Search" primary={true} onClick={() => this._search()} />)
                }
            </search-bar>
        );
    }
    _search() {
        Navigate.goToSocialLife();
    }
}

export default SearchBar;