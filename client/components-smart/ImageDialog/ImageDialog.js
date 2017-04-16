import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import FlexImageGallery from 'components-dumb/FlexImageGallery/FlexImageGallery';
import { connect } from 'react-redux';
import { closeDialog } from 'actions/images-dialog.action';

require('./image-dialog.less');

@connect((store) => {
    return {
        open: store.imagesDialog.open,
        images: store.imagesDialog.images
    }

})

class ImageDialog extends Component {

    handleClose = () => {
        this.props.dispatch(closeDialog());
    }

    render() {
        return (
            <Dialog modal={false}
                open={this.props.open}
                onRequestClose={this.handleClose}
                contentClassName='image-dialog'
                bodyStyle={{ padding: 0, backgroundColor: '#e0e0e0' }}>
                <FlexImageGallery images={this.props.images} />
            </Dialog>
        );
    }
}

export default ImageDialog;