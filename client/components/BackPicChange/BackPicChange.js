import React, { Component } from 'react';
import DivBackImage from '../DivBackImage/DivBackImage';
import Classnames from 'classnames';
import Camera from 'material-ui/svg-icons/image/camera-alt';
import { grey50 } from 'material-ui/styles/colors';

require('./back-pic-change.less');

class BackPicChange extends Component {

    onDrop = (evt) => {
        debugger
        var fileList = evt.target.files
        var acceptedFiles = [];
        for (let file of fileList) {
            if ((file.type.indexOf('png') >= 0 || file.type.indexOf('jpg') >= 0 || file.type.indexOf('jpeg') >= 0) && file.size < 1024 * 1024 * 2) {
                acceptedFiles.push(file);
                file.preview = window.URL.createObjectURL(file);
            }
        }
        if (this.props.onDrop) {
            this.props.onDrop(acceptedFiles[0]);
        }
    }

    render() {
        return (
            <DivBackImage className={Classnames(this.props.className)} imgSrc={this.props.imgSrc}>
                {
                    this.props.active &&
                    (
                        <div className='text-center change-con'>
                            <div className='cc-con'>
                                <Camera color={grey50} />
                                <p className='white-text mont-font'>{this.props.label}</p>
                            </div>
                            <input type="file" className='input-file cursor-pointer' accept='.png, .jpg, .jpeg'
                                multiple={false} onChange={(e) => this.onDrop(e)} />
                        </div>
                    )
                }

            </DivBackImage>
        );
    }
}

export default BackPicChange;