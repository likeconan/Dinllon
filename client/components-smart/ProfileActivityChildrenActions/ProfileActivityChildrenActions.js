import React, { Component } from 'react';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import IconButton from 'material-ui/IconButton';
import EditIcon from 'material-ui/svg-icons/image/edit';
import DeleteIcon from 'material-ui/svg-icons/action/delete';
import { Translate } from 'utilities';

class ProfileActivityChildrenActions extends Component {
    render() {
        const ifactive = this.props.ifactive;
        const margin = {
            margin: 10
        }
        return (
            <div>
                {
                    this.props.isOwn ?
                        <div className='aitc-icon-con center-flex'>
                            <IconButton><EditIcon color={ifactive ? '#fafafa' : '#9e9e9e'} /></IconButton>
                            <IconButton><DeleteIcon color={ifactive ? '#fafafa' : '#9e9e9e'} /></IconButton>
                        </div>
                        :
                        <div className='aitc-icon-con center-flex'>
                            {
                                ifactive ?
                                    <FlatButton label={Translate.lang.join_in}
                                        style={margin}
                                        labelStyle={{ color: 'white' }} />
                                    :
                                    <RaisedButton label={Translate.lang.join_in}
                                        primary={true}
                                        style={margin} />
                            }

                        </div>
                }
            </div>
        );
    }
}

export default ProfileActivityChildrenActions;