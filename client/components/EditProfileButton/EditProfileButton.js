import React, { Component } from 'react';
import { connect } from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';
import { toggleEditProfile, saveProfile } from '../../actions/profile.action';

@connect((store) => {
    return {
        enableEdit: store.profile.enableEdit,
        editingUser: store.profile.editingUser
    }
})

class EditProfileButton extends Component {

    _toggleEdit = () => {
        this.props.dispatch(toggleEditProfile());
    }

    _cancel = () => {
        this.props.dispatch(toggleEditProfile());
    }

    _saveChange = () => {
        this.props.dispatch(saveProfile(this.props.editingUser));
    }

    render() {
        return (
            <edit-profile-button class={this.props.className}>
                {
                    this.props.enableEdit ?
                        (
                            <div className='center-flex'>
                                <RaisedButton className='margin-right' label="Cancel" onClick={this._cancel} />
                                <RaisedButton label="Save" primary={true} onClick={this._saveChange} />
                            </div>
                        ) :
                        (

                            <RaisedButton label="Edit profile" primary={true} onClick={this._toggleEdit} />
                        )
                }
            </edit-profile-button>
        );
    }
}

export default EditProfileButton;