import React, { Component } from 'react';
import Classnames from 'classnames';
import { ImagesModel } from '../../models';
import { showImageDialog } from '../../actions/images-dialog.action';
import { connect } from 'react-redux';

require('./flex-images.less');

@connect()

class FlexImages extends Component {
    constructor(props) {
        super(props);
        this.imgArray = new ImagesModel(this.props.imgContent).getImgsArray();
        this.imgEles = this.imgArray.map((val, key) => {
            return (
                <div style={{ backgroundImage: 'url(' + val + ')' }} key={key} className='img-content-container'></div>
            )
        })
    }

    _showImgDialog = () => {
        this.props.dispatch(showImageDialog(this.imgArray));
    }
    render() {
        return (
            <flex-images class={Classnames('cursor-pointer', { [`flex-images-${this.imgArray.length}`]: true })} onClick={this._showImgDialog}>
                {this.imgEles}
            </flex-images>
        );
    }
}

export default FlexImages;