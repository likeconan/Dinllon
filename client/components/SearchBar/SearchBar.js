import React, { Component } from 'react';
import AlphaTextField from '../AlphaTextField/AlphaTextField';
require('./search-bar.less');

class SearchBar extends Component {
    render() {
        return (
            <search-bar class={this.props.className}>
                <AlphaTextField />
            </search-bar>
        );
    }
}

export default SearchBar;      