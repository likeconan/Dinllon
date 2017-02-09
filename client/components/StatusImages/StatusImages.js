import React, { Component } from 'react';
import { showImageDialog } from '../../actions/images-dialog.action';
import { connect } from 'react-redux';
import { ImagesModel } from '../../models';
import DivBackImage from '../DivBackImage/DivBackImage';
require('./status-images.less');

@connect()

class StatusImages extends Component {

    showImages = (imgs) => {
        this.props.dispatch(showImageDialog(imgs));
    }

    render() {
        var imgModel = new ImagesModel(this.props.imgContent);
        var statusImgs = imgModel.getStatusImgs();
        var imgArray = imgModel.getImgsArray();
        var imgsEle = statusImgs.restImgs.map((val, key) => {
            return (<DivBackImage imgSrc={val} key={key}></DivBackImage>)
        });
        return (
            <status-images>
                <div style={{ backgroundImage: 'url(' + statusImgs.firstImg + ')' }} onClick={() => this.showImages(imgArray)} className="primary-img img-content-container"></div>
                <div className="thumbnail-img-container">
                    {imgsEle}
                </div>
            </status-images>


        );
    }
}

export default StatusImages;