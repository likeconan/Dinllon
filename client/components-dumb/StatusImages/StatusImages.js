import React, { Component } from 'react';
import { showImageDialog } from 'actions/images-dialog.action';
import { ImagesModel } from 'models';
import store from 'store';
import DivBackImage from '../DivBackImage/DivBackImage';
require('./status-images.less');



class StatusImages extends Component {

    showImages = (imgs) => {
        store.dispatch(showImageDialog(imgs));
    }

    render() {
        var imgModel = new ImagesModel(this.props.imgContent);
        var statusImgUrl = imgModel.getStatusImgUrl();
        var imgsEle = statusImgUrl.restImgUrls.map((val, key) => {
            return (<DivBackImage imgSrc={val} key={key}></DivBackImage>)
        });
        return (
            <status-images>
                <div
                    style={{ backgroundImage: 'url(' + statusImgUrl.firstImgUrl + ')' }}
                    onClick={() => this.showImages(statusImgUrl.imgUrlArray)}
                    className="primary-img img-content-container"></div>
                <div className="thumbnail-img-container">
                    {imgsEle}
                </div>
            </status-images>


        );
    }
}

export default StatusImages;