import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton';
import { connect } from 'react-redux';
import {
    closeDialog, editActivityContent,
    addActivityImage, deleteActivityImage,
    editActivityTime, editActivityDate
} from '../../actions/activity.action';

import TextAreaCount from '../TextAreaCount/TextAreaCount';
import IconInputImage from '../IconInputImage/IconInputImage';
import DroppedImage from '../DroppedImage/DroppedImage';
import DateTimePicker from '../DateTimePicker/DateTimePicker';

require('./create-activity-dialog.less');

@connect((store) => {
    return {
        open: store.activity.openCreate,
        textEdited: store.activity.textEdited,
        validated: store.activity.validated,
        activityObj: store.activity.activityObj,
        countdown: store.activity.countdown,
    }
})
class CreateActivityDialog extends Component {

    handleClose = () => {
        this.props.dispatch(closeDialog({ openCreate: false }));
    }
    _textChange = (e) => {
        this.props.dispatch(editActivityContent({ val: e.target.value, countdown: 150 - e.currentTarget.innerText.length }))
    }
    _onDrop = (files) => {
        this.props.dispatch(addActivityImage(files));
    }
    _onDelete = (key) => {
        this.props.dispatch(deleteActivityImage(key));
    }

    _timeChange = (val) => {
        this.props.dispatch(editActivityTime(val));
    }
    _dateChange = (tmp, date) => {
        this.props.dispatch(editActivityDate(date));
    }
    render() {
        const actions = [
            <RaisedButton label="Cancel" className='margin-right' onTouchTap={this.handleClose} />,
            <RaisedButton label="Create" primary={true} onTouchTap={this.handleClose} disabled={!this.props.validated} />,
        ];
        return (
            <Dialog modal={false} className='add-activity-con' actions={actions} title="Create Activity" contentStyle={{ width: '450px' }}
                open={this.props.open} onRequestClose={this.handleClose}>
                <div>
                    <DateTimePicker className='margin-bottom'
                        time={this.props.activityObj.startTime} timeChange={this._timeChange}
                        value={this.props.activityObj.startDate} dateChange={this._dateChange} />
                    <div className='edit-text-image-con'>
                        <TextAreaCount
                            placeholder="What do you want to do?" text={this.props.activityObj.textContent}
                            onChange={this._textChange} isEdited={this.props.textEdited} />
                        <IconInputImage className='add-photo' onDrop={this._onDrop} />
                    </div>
                    <DroppedImage images={this.props.activityObj.images} className='photo-activity-con' onClick={this._onDelete} />
                </div>

            </Dialog>
        );
    }
}

export default CreateActivityDialog;