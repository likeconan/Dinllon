import React, { Component } from 'react';
import DivBackImage from '../DivBackImage/DivBackImage';
import Classnames from 'classnames';
import AvatarImageCropper from 'react-avatar-image-cropper';

require('./back-pic-change.less');

class BackPicChange extends Component {


    render() {
        const textStyle = {
            fontSize: '20px',
            lineHeight: '1.2'
        }
        const iconStyle = {
            width: '48px',
            height: '48px'
        }
        return (
            <DivBackImage className={Classnames(this.props.className)} imgSrc={this.props.imgSrc}>
                {
                    this.props.active &&
                    (
                        <AvatarImageCropper
                            className='change-con mont-font'
                            apply={this.props.apply}
                            avatarStyle={{ height: 'calc(100% - 20px)' }}
                            isBack={true}
                            textStyle={textStyle}
                            iconStyle={iconStyle}
                            text={this.props.text} />
                    )
                }

            </DivBackImage>
        );
    }
}

export default BackPicChange;