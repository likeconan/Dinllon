import React, { Component } from 'react';
require("./full-back-image.less")
class FullBackImage extends Component {
    render() {
        return (
            <full-back-image style={this.props.backImage}>
                {this.props.children}
            </full-back-image>
        );
    }
    constructor(props) {
        super(props);
        this.backImage = {
            backgroundImage: 'url(' + this.props.backSrc + ')'
        }
    }
}


export default FullBackImage;