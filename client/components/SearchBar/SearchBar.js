import React, { Component } from 'react';
import Classnames from 'classnames';
import AlphaTextField from '../AlphaTextField/AlphaTextField';
import RaisedButton from 'material-ui/RaisedButton';
import IconButton from 'material-ui/IconButton';
import { grey50 } from 'material-ui/styles/colors';
import { Navigate, Translate } from '../../utilities'
import { connect } from 'react-redux';
require('./search-bar.less');

@connect((store) => {
    return {

    }
})

class SearchBar extends Component {
    render() {
        const { active } = this.props;
        return (
            <search-bar class={Classnames('center-flex', this.props.className, { 'top-search-bar': active })} >
                <AlphaTextField className='top-search-input' placeholder={Translate.lang.interested_in} />
                {active ?
                    (<IconButton iconClassName='material-icons'>search</IconButton>) :
                    (< RaisedButton label={Translate.lang.search} primary={true} onClick={() => this._search()} />)
                }
            </search-bar>
        );
    }
    _search() {
        Navigate.goToSocialLife();
    }
}

export default SearchBar;