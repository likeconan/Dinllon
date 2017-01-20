import React, { Component } from 'react';
class FullBackImage extends Component {
    render() {
        return (
            <div style={Object.assign(ImageStyle.backCover, General.fullBack, this.backImage,this.props.style)}>
                {this.props.children}
            </div>
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