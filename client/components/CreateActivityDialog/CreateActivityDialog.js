import React, { Component } from 'react';

import RaisedButton from 'material-ui/RaisedButton';
import { connect } from 'react-redux';
import {
    closeDialog, editActivityContent,
    addActivityImage, deleteActivityImage,
    editActivityTime, editActivityDate,
    editCost, editActivityType, addActivity
} from '../../actions/activity.action';

import ResponsiveDialog from '../ResponsiveDialog/ResponsiveDialog';
import TextAreaCount from '../TextAreaCount/TextAreaCount';
import NumberTextField from '../NumberTextField/NumberTextField';
import IconInputImage from '../IconInputImage/IconInputImage';
import DroppedImage from '../DroppedImage/DroppedImage';
import DateTimePicker from '../DateTimePicker/DateTimePicker';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import { Translate, TimeFormat } from '../../utilities';

require('./create-activity-dialog.less');

@connect((store) => {
    return {
        open: store.activity.openCreate,
        textEdited: store.activity.textEdited,
        validatedCreate: store.activity.validatedCreate,
        activityObj: store.activity.activityObj,
        countdown: store.activity.countdown,
        loggedUser: store.user.loggedUser,
        disableCost: store.activity.disableCost
    }
})
class CreateActivityDialog extends Component {

    _createActivity = () => {

        var data = new FormData();
        data.append('userId', this.props.loggedUser.uuid);
        data.append('textContent', this.props.activityObj.textContent);
        data.append('cost', this.props.activityObj.cost);
        data.append('type', this.props.activityObj.type);
        data.append('startedAt', TimeFormat.formatDate_Time(this.props.activityObj.startDate, this.props.activityObj.startTime));

        this.props.activityObj.images.forEach(function (file, key) {
            data.append('file' + key, file)
        }, this);
        this
            .props
            .dispatch(addActivity(data));
    }

    handleClose = () => {
        this.props.dispatch(closeDialog());
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

    _typeChange = (event, index, value) => {
        this.props.dispatch(editActivityType(value));
    }

    render() {
        const actions = [
            <RaisedButton label={Translate.lang.create} primary={true} onTouchTap={this.createActivity} disabled={!this.props.validatedCreate} />,
        ];
        return (
            <ResponsiveDialog modal={false} className='add-activity-con' actions={actions} title={Translate.lang.create_activity} contentClassName='acc-content'
                open={this.props.open} onRequestClose={this.handleClose}>
                <div>
                    <div className='aac-fee-con center-flex'>
                        <div className='center-flex margin-right'>
                            <label className='margin-right'>{Translate.lang.activity_type}</label>
                            <SelectField value={this.props.activityObj.type} onChange={this._typeChange} style={{ width: '100px' }}
                                labelStyle={{ paddingRight: 0, textAlign: 'center' }} iconStyle={{ right: '-20px' }}>
                                <MenuItem value={1} primaryText='AA' />
                                <MenuItem value={2} primaryText={Translate.lang.my_treat} />
                                <MenuItem value={3} primaryText={Translate.lang.free} />
                            </SelectField>
                        </div>
                        <div>
                            <label className='margin-right'>{Translate.lang.cost}</label>
                            <NumberTextField
                                disabled={this.props.disableCost}
                                className='cost-num'
                                value={this.props.activityObj.cost}
                                onChange={this._costChange} />
                        </div>
                    </div>
                    <DateTimePicker className='margin-bottom'
                        time={this.props.activityObj.startTime} timeChange={this._timeChange}
                        value={this.props.activityObj.startDate} dateChange={this._dateChange} />
                    <div className='edit-text-image-con'>
                        <TextAreaCount
                            placeholder={Translate.lang.what_want_to_do} text={this.props.activityObj.textContent}
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