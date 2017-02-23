import React, { Component } from 'react';
import DivBackImage from '../DivBackImage/DivBackImage';
import Classnames from 'classnames';

class BackPicChange extends Component {
    render() {
        return (
            <DivBackImage className={Classnames(this.props.className)} imgSrc={this.props.imgSrc}>

            </DivBackImage>
        );
    }
}

export default BackPicChange;