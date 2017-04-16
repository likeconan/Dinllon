import React, { Component } from 'react';
import Classnames from 'classnames';
import IconButton from 'material-ui/IconButton';
import AddPhotoIcon from 'material-ui/svg-icons/image/add-a-photo';
import { blueA400 } from 'material-ui/styles/colors';

require('./icon-input-image.less')
class IconInputImage extends Component {
    onDrop = (evt) => {
        var fileList = evt.target.files
        var acceptedFiles = [];
        for (let file of fileList) {
            if (file.type.indexOf('image') >= 0 && file.size < 1024 * 1024 * 2) {
                acceptedFiles.push(file);
                file.preview = window.URL.createObjectURL(file);
            }
        }
        if (this.props.onDrop) {
            this.props.onDrop(acceptedFiles);
        }
        evt.target.value = '';
    }

    render() {
        return (
            <IconButton className={Classnames(this.props.className)} iconStyle={{ color: blueA400 }}>
                <AddPhotoIcon />
                <input type="file" className='input-file cursor-pointer' accept='image/*'
                    multiple={true} onChange={this.onDrop} title=' ' />
            </IconButton>
        );
    }
}

export default IconInputImage;