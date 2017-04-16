import React, { Component } from 'react';
import Classnames from 'classnames';

class DivBackImage extends Component {
    render() {
        return (
            <div className={Classnames('img-content-container', this.props.className)}
                style={{ backgroundImage: 'url(' + this.props.imgSrc + ')' }}>
                {this.props.children}
            </div>
        );
    }
}

export default DivBackImage;