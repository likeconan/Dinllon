import React, {Component} from 'react';

import RaisedButton from 'material-ui/RaisedButton';
import {connect} from 'react-redux';
import {
    editActivityContent,
    addActivityImage,
    deleteActivityImage,
    editActivityTime,
    editActivityDate,
    editCost,
    editActivityType
} from 'actions/activity.action';

import TextAreaCount from 'components-dumb/TextAreaCount/TextAreaCount';
import NumberTextField from 'components-dumb/NumberTextField/NumberTextField';
import IconInputImage from 'components-dumb/IconInputImage/IconInputImage';
import DroppedImage from 'components-dumb/DroppedImage/DroppedImage';
import DateTimePicker from 'components-dumb/DateTimePicker/DateTimePicker';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import {Translate} from 'utilities';

require('./create-activity-form.less');

@connect((store) => {
    var obj = {
        textEdited: store.activity.textEdited,
        activityObj: store.activity.activityObj,
        countdown: store.activity.countdown,
        disableCost: store.activity.disableCost
    };
    return obj
})
class CreateActivityForm extends Component {

    _textChange = (e) => {
        this
            .props
            .dispatch(editActivityContent({
                val: e.target.value,
                countdown: 150 - e.currentTarget.innerText.length
            }));
    }
    _onDrop = (files) => {
        this
            .props
            .dispatch(addActivityImage(files));
    }
    _onDelete = (key) => {
        this
            .props
            .dispatch(deleteActivityImage(key));
    }
    _costChange = (val) => {
        this
            .props
            .dispatch(editCost(val));
    }
    _timeChange = (val) => {
        this
            .props
            .dispatch(editActivityTime(val));
    }
    _dateChange = (tmp, date) => {
        this
            .props
            .dispatch(editActivityDate(date));
    }

    _typeChange = (event, index, value) => {
        this
            .props
            .dispatch(editActivityType(value));
    }

    render() {
        return (
            <div className='create-activity-form'>
                <div className='aac-fee-con center-flex'>
                    <div className='center-flex margin-right'>
                        <label className='margin-right'>{Translate.lang.activity_type}</label>
                        <SelectField
                            value={this.props.activityObj.type}
                            onChange={this._typeChange}
                            style={{
                            width: '100px'
                        }}
                            labelStyle={{
                            paddingRight: 0,
                            textAlign: 'center'
                        }}
                            iconStyle={{
                            right: '-20px'
                        }}>
                            <MenuItem value={1} primaryText='AA'/>
                            <MenuItem value={2} primaryText={Translate.lang.my_treat}/>
                            <MenuItem value={3} primaryText={Translate.lang.free}/>
                        </SelectField>
                    </div>
                    <div>
                        <label className='margin-right'>{Translate.lang.cost}</label>
                        <NumberTextField
                            disabled={this.props.disableCost}
                            className='cost-num'
                            value={this.props.activityObj.cost}
                            onChange={this._costChange}/>
                    </div>
                </div>
                <DateTimePicker
                    className='margin-bottom'
                    time={this.props.activityObj.startTime}
                    timeChange={this._timeChange}
                    value={this.props.activityObj.startDate}
                    dateChange={this._dateChange}/>

                <div className='edit-text-image-con'>
                    <TextAreaCount
                        placeholder={Translate.lang.what_want_to_do}
                        text={this.props.activityObj.textContent}
                        onChange={this._textChange}
                        isEdited={this.props.textEdited}/>
                    <IconInputImage className='add-photo' onDrop={this._onDrop}/>
                </div>
                <DroppedImage
                    images={this.props.activityObj.images}
                    className='photo-activity-con'
                    onClick={this._onDelete}/>
            </div>
        );
    }
}

export default CreateActivityForm;