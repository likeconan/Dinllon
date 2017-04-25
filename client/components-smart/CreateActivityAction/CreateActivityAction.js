import React, {Component} from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import {connect} from 'react-redux';
import {addActivity} from 'actions/activity.action';
import store from 'store';
import {Translate, Authorize, TimeFormat} from 'utilities';

@connect((store) => {
    return {validatedCreate: store.activity.validatedCreate}
})

class CreateActivityAction extends Component {

    _createActivity = () => {
        var obj = store
            .getState()
            .activity
            .activityObj;

        var data = new FormData();
        data.append('userId', Authorize.getLoggedUserId());
        data.append('textContent', obj.textContent);
        data.append('cost', obj.cost);
        data.append('type', obj.type);
        data.append('startedAt', TimeFormat.formatDate_Time(obj.startDate, obj.startTime));

        obj
            .images
            .forEach(function (file, key) {
                data.append('file' + key, file)
            }, this);
        this
            .props
            .dispatch(addActivity(data));
    }

    render() {
        return (<RaisedButton
            label={Translate.lang.create}
            primary={true}
            onTouchTap={this._createActivity}
            disabled={!this.props.validatedCreate}/>);
    }
}

export default CreateActivityAction;