import React, { Component } from 'react';
import { ListItem } from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import Subheader from 'material-ui/Subheader';
import SelectableList from 'components-dumb/SelectableList/SelectableList';
import ActivityTypeTag from 'components-dumb/ActivityTypeTag/ActivityTypeTag';
import ActivityStartTime from 'components-dumb/ActivityStartTime/ActivityStartTime';
import { connect } from 'react-redux';
import { Translate } from 'utilities';
import Divider from 'material-ui/Divider';
import ImageModel from 'models/images.model';
import TimeIcon from 'material-ui/svg-icons/device/access-time';

require('./select-activities-list.less')

@connect((store) => {
    return {
        list: store.joinactivity.selectActivities
    }
})

class SelectActivitiesList extends Component {
    render() {

        const ActivityItem = (props) => (
            <div>
                <ListItem
                    value={props.data.uuid}
                    primaryText={
                        <div className='space-between center-flex'>
                            <ActivityTypeTag type={props.data.type} cost={props.data.cost} />
                            <ActivityStartTime className='small' time={props.data.startedAt} />
                        </div>
                    }
                    secondaryText={
                        <div>
                            <span>{props.data.textContent}</span>
                        </div>
                    }
                    secondaryTextLines={2}
                    leftAvatar={<Avatar src={new ImageModel(props.data.Images).getOneImgUrl()} />}
                />
                <Divider />
            </div>

        )

        const createdEles = this.props.list.created.map((data, key) => <ActivityItem key={key} data={data} />);
        const joinedEles = this.props.list.joined.map((data, key) => <ActivityItem key={key} data={data} />);
        return (
            <select-activities-list>
                <SelectableList defaultValue={1}>
                    <Subheader>Created</Subheader>
                    {createdEles}
                    <Subheader>Joined</Subheader>
                    {joinedEles}
                </SelectableList>
            </select-activities-list>
        )

    }

}

export default SelectActivitiesList;