import React, { Component } from 'react';
import TextareaAutosize from 'react-autosize-textarea';
import { UserModel } from '../../models';
import IconButton from 'material-ui/IconButton';
import { blueA400 } from 'material-ui/styles/colors';
import Dropzone from 'react-dropzone';



require('./add-status.less');
class AddStatus extends Component {
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
        var user = new UserModel();
        return (
            <add-status class='space-between cyan lighten-5'>
                <img src={user.headPic} className='head-pic' />
                <div className='add-status-con'>
                    <TextareaAutosize className='add-text grey-text text-darken-2 sans-font' style={{ minHeight: 24 }} />
                    <Dropzone onDrop={this.onDrop} multiple={true}>
                        <IconButton iconClassName="material-icons" className='add-photo' iconStyle={{ color: blueA400 }}>
                            add_a_photo
                        </IconButton>
                    </Dropzone>
                </div>
                {this.state.files ?
                    (
                        <div>{this.state.files.map((file, key) => <img style={{ width: '50px' }} src={file.preview} key={key} />)}</div>
                    )
                    : null
                }
            </add-status>
        );
    }
}

export default AddStatus;