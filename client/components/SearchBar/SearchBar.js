import React, { Component } from 'react';
import classnames from 'classnames';
import AlphaTextField from '../AlphaTextField/AlphaTextField';
import RaisedButton from 'material-ui/RaisedButton';

require('./search-bar.less');

class SearchBar extends Component {
    render() {
        return (
            <search-bar class={classnames('center-flex', this.props.className)} >
                <AlphaTextField />
                <RaisedButton label="Search" primary={true} />
            </search-bar>
        );
    }
}

export default SearchBar;      