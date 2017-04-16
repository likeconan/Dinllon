import React, { Component } from 'react';
import Classnames from 'classnames';
import DivBackImage from '../DivBackImage/DivBackImage';
import IconButton from 'material-ui/IconButton';
import { grey800 } from 'material-ui/styles/colors';

require('./dropped-image.less')
class DroppedImage extends Component {
    render() {
        return (
            <dropped-image class={Classnames(this.props.className)}>
                {this.props.images && this.props.images.length ?
                    (
                        <div className='dp-thumnail-con center-flex'>
                            {this.props.images.map(
                                (file) =>
                                    <DivBackImage className='dptc' imgSrc={file.preview} key={file.id}>
                                        <IconButton iconClassName='material-icons' className='delete-img-btn'
                                            style={{ margin: '-12px' }} iconStyle={{ color: grey800 }} onClick={() => this.props.onClick(file.id)}>
                                            cancel
                                        </IconButton>
                                    </DivBackImage>)
                            }
                        </div>
                    ) : null
                }
            </dropped-image>
        );
    }
}

export default DroppedImage;