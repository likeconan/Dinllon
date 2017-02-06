import React, { Component } from 'react';
import UserBrief from '../UserBrief/UserBrief';

require('./status-content.less');
class StatusContent extends Component {
    render() {
        return (
            <status-content>
                <UserBrief className='big circle-con-img' user={this.props.user} />
                <div className='text-content-con grey-text text-darken-2'>
                    {this.props.textContent ? this.props.textContent : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis porta lectus. Maecenas ut blandit velit. Donec eu magna at lorem ultricies bibendum at non erat. Vestibulum augue odio, suscipit nec blandit ac, efficitur vitae enim. Aliquam condimentum auctor sollicitudin. Sed quam nisl, faucibus vitae velit venenatis, sagittis viverra ligula. Sed ut tristique ligula. Mauris fringilla neque non tortor rhoncus interdum. Duis venenatis pharetra tellus, eget accumsan ex tempus at. Ut tempus nunc nec erat mollis fermentum. Maecenas non tortor vitae erat eleifend consectetur nec id orci.'}
                </div>
            </status-content>
        );
    }
}

export default StatusContent;