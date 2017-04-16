import React, { Component } from 'react';
import Classnames from 'classnames';
import { ImagesModel } from 'models';
import { showImageDialog } from 'actions/images-dialog.action';
import store from 'store';
import DivBackImage from '../DivBackImage/DivBackImage';

require('./flex-images.less');

class FlexImages extends Component {
    constructor(props) {
        super(props);

    }

    _showImgDialog = (imgs) => {
        store.dispatch(showImageDialog(imgs));
    }
    render() {

        const imgArray = new ImagesModel(this.props.imgContent).getImgUrlsArray();
        const imgEles = imgArray
            .map((val, key) => {
                return (
                    <DivBackImage imgSrc={val} key={key}></DivBackImage>
                )
            });

        return (imgArray.length > 0 && <flex-images
            class={Classnames('cursor-pointer', {
                [`flex-images-${imgArray.length}`]: true
            }, this.props.className)}
            onClick={() => this._showImgDialog(imgArray)}>
            {imgEles}
        </flex-images>);
    }
}

export default FlexImages;