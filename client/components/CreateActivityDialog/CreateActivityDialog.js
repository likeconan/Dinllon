import React, { Component } from 'react';

import RaisedButton from 'material-ui/RaisedButton';
import { connect } from 'react-redux';
import {
    closeDialog, editActivityContent,
    addActivityImage, deleteActivityImage,
    editActivityTime, editActivityDate,
    editCost
} from '../../actions/activity.action';

import ResponsiveDialog from '../ResponsiveDialog/ResponsiveDialog';
import TextAreaCount from '../TextAreaCount/TextAreaCount';
import NumberTextField from '../NumberTextField/NumberTextField';
import IconInputImage from '../IconInputImage/IconInputImage';
import DroppedImage from '../DroppedImage/DroppedImage';
import DateTimePicker from '../DateTimePicker/DateTimePicker';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

require('./create-activity-dialog.less');

@connect((store) => {
    return {
        open: store.activity.openCreate,
        textEdited: store.activity.textEdited,
        validatedCreate: store.activity.validatedCreate,
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
    _costChange = (val) => {
        this.props.dispatch(editCost(val));
    }
    _timeChange = (val) => {
        this.props.dispatch(editActivityTime(val));
    }
    _dateChange = (tmp, date) => {
        this.props.dispatch(editActivityDate(date));
    }
    render() {
        const actions = [
            <RaisedButton label="Create" primary={true} onTouchTap={this.handleClose} disabled={!this.props.validatedCreate} />,
        ];
        return (
            <ResponsiveDialog modal={false} className='add-activity-con' actions={actions} title="Create Activity" contentClassName='acc-content'
                open={this.props.open} onRequestClose={this.handleClose}>
                <div>
                    <div className='aac-fee-con center-flex'>
                        <div className='center-flex margin-right'>
                            <label className='margin-right'>Activity Type</label>
                            <SelectField value={this.props.activityObj.type} onChange={this.handleChange} style={{ width: '100px' }}>
                                <MenuItem value={1} primaryText='AA' />
                                <MenuItem value={2} primaryText='My treat' />
                                <MenuItem value={3} primaryText='Free' />
                            </SelectField>
                        </div>
                        <div>
                            <label className='margin-right'>Cost</label>
                            <NumberTextField className='cost-num' value={this.props.activityObj.cost} onChange={this._costChange} />
                        </div>

                    </div>
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

            </ResponsiveDialog>
        );
    }
}

export default CreateActivityDialog;