import React, { Component } from 'react';
class FullBackImage extends Component {
    render() {
        return (
            <div>
                123
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