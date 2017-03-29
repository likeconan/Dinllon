import React, { Component } from 'react';
import ImageGallery from 'react-image-gallery';
import IconButton from 'material-ui/IconButton';
import ArrowLeft from 'material-ui/svg-icons/hardware/keyboard-arrow-left';
import ArrowRight from 'material-ui/svg-icons/hardware/keyboard-arrow-right';

require('./flex-image-gallery.less');
class FlexImageGallery extends Component {
    _renderItem = (item) => {
        return (
            <div className='image-gallery-con' style={{ backgroundImage: 'url(' + item.original + ')' }}></div>
        )
    }
    styles = {
        mediumIcon: {
            width: 72,
            height: 72,
            color: 'rgba(69, 102, 228, 0.870588)'
        },
        medium: {
            width: 84,
            height: 84,
            padding: 0,
            zIndex: 4,
            position: 'absolute',
            top: '40%',
        }
    }

    _renderLeftNav = (onClick, disabled) => {
        return (
            <IconButton
                style={Object.assign({ left: 0 }, this.styles.medium)}
                iconStyle={this.styles.mediumIcon}
                onClick={onClick}
                disabled={disabled}>
                <ArrowLeft />
            </IconButton>
        )
    }

    _renderRightNav = (onClick, disabled) => {
        return (
            <IconButton
                style={Object.assign({ right: 0 }, this.styles.medium)}
                iconStyle={this.styles.mediumIcon}
                onClick={onClick}
                disabled={disabled}>
                <ArrowRight />
            </IconButton>
        )
    }

    render() {
        var images = this.props.images;
        images = images ? images.map((val) => { return { original: val.url } }) : [];
        return (
            <ImageGallery items={images}
                showThumbnails={false}
                showFullscreenButton={false}
                showPlayButton={false}
                renderLeftNav={this._renderLeftNav}
                renderRightNav={this._renderRightNav}
                renderItem={this._renderItem} />
        );
    }
}

export default FlexImageGallery;