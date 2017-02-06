import React, { Component } from 'react';
import { showImageDialog } from '../../actions/images-dialog.action';
import { connect } from 'react-redux';
import { ImagesModel } from '../../models';
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
            return (<div style={{ backgroundImage: 'url(' + val + ')' }} key={key} className='img-content-container'></div>)
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