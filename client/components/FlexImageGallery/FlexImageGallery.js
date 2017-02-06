import React, { Component } from 'react';
import ImageGallery from 'react-image-gallery';

require('./flex-image-gallery.less');
class FlexImageGallery extends Component {
    _renderItem = (item) => {
        return (
            <div className='image-gallery-con' style={{ backgroundImage: 'url(' + item.original + ')' }}></div>
        )
    }
    render() {
        var images = this.props.images;
        images = images ? images.map((val) => { return { original: val } }) : [];
        return (
            <ImageGallery items={images} showThumbnails={false} showFullscreenButton={false} showPlayButton={false}
                renderItem={this._renderItem} />
        );
    }
}

export default FlexImageGallery;