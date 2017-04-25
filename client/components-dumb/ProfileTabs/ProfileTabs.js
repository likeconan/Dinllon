import React, {Component} from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import ProfileMoments from '../ProfileMoments/ProfileMoments';
import ProfileActivity from '../ProfileActivity/ProfileActivity';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import {red500, yellow500, blue500} from 'material-ui/styles/colors';

require('./profile-tabs.less')

class ProfileTabs extends Component {
    render() {
        const color = {
            color: '#616161'
        };
        const itemcolor = {
            backgroundColor: '#fff'
        }
        const tabcolor = {
            backgroundColor: 'rgb(0, 188, 212)'
        }
        return (
            <profile-tabs>
                <Tabs className='tabs' inkBarStyle={tabcolor} tabItemContainerStyle={itemcolor}>
                    <Tab label="Dinllons" buttonStyle={color}>
                        <ProfileMoments statusList={this.props.data.moments} isOwn={this.props.isOwn}/>
                    </Tab>
                    <Tab label="Activities" buttonStyle={color} style={color}>
                        <ProfileActivity
                            activities={this.props.data.activities}
                            isOwn={this.props.isOwn}/>
                    </Tab>
                </Tabs>
            </profile-tabs>
        );
    }
}

export default ProfileTabs;