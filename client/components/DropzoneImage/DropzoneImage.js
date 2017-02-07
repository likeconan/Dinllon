import React, { Component } from 'react';
import Dropzone from 'react-dropzone';
import DivBackImage from '../DivBackImage/DivBackImage';
import Classnames from 'classnames';
require('./dropzone-image.less')
class DropzoneImage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            files: []
        };
    }
    onDrop = (files) => {
        this.setState({
            files: this.state.files.concat(files)
        })
    }

    render() {
        return (
            <drozone-image class={Classnames(this.props.className)}>
                <Dropzone ref={(node) => { this.dropzone = node; }} accept="image/*"
                    onDrop={this.onDrop} multiple={true} className='dropzone-absolute'>
                </Dropzone>
                {this.state.files.length ?
                    (
                        <div className='dp-thumnail-con center-flex'>
                            {this.state.files.map((file, key) => <DivBackImage className='dptc' imgSrc={file.preview} key={key} />)}
                        </div>
                    )
                    : null
                }
            </drozone-image>
        );
    }
}

export default DropzoneImage;