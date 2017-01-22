import React, { Component } from 'react';
require("./full-back-image.less")
class FullBackImage extends Component {
    render() {
        return (
            <full-back-image style={this.backImage} class={this.props.className}>
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