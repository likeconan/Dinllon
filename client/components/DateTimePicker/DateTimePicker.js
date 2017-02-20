import React, { Component } from 'react';
import DatePicker from 'material-ui/DatePicker';
import TimeInput from 'time-input';
import Classnames from 'classnames';


require('./date-time-picker.less');

class DateTimePicker extends Component {

    render() {
        return (
            <date-time-picker class={Classnames('center-flex', this.props.className)}>
                <div className='center-flex margin-right'>
                    <label className='margin-right'>Start Date</label>
                    <DatePicker hintText='pick a date' value={this.props.value} minDate={new Date()} onChange={this.props.dateChange}
                        textFieldStyle={{ width: '120px' }} />
                </div>
                <div className='center-flex'>
                    <label className='margin-right'>Start Time</label>
                    <TimeInput className='time-input-con' value={this.props.time} onChange={this.props.timeChange} />
                </div>
            </date-time-picker>
        );
    }
}

export default DateTimePicker;