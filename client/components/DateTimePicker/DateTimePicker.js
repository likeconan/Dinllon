import React, { Component } from 'react';
import DatePicker from 'material-ui/DatePicker';
import TimeInput from 'time-input';

class DateTimePicker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            time: '12:00'
        }
    }
    _change = (val) => {
        this.setState({
            time: val
        })
    }
    render() {

        return (
            <div>
                <DatePicker hintText="Activity Start Date" />
                <TimeInput value='12:00' onChange={this._change} />
            </div>
        );
    }
}

export default DateTimePicker;