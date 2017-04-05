import React, { Component } from 'react';
import { Tabs, Tab } from 'material-ui/Tabs';
import ProfileMoments from '../ProfileMoments/ProfileMoments';
import ProfileActivity from '../ProfileActivity/ProfileActivity';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import { red500, yellow500, blue500 } from 'material-ui/styles/colors';


require('./profile-tabs.less')

class ProfileTabs extends Component {
    render() {
        const color = { color: '#616161' };
        return (
            <profile-tabs>
                <Tabs className='tabs' inkBarStyle={{ backgroundColor: 'rgb(0, 188, 212)' }} tabItemContainerStyle={{ backgroundColor: '#fff' }}>
                    <Tab label="Dinllons"
                        buttonStyle={color}>
                        <ProfileMoments />
                    </Tab>
                    <Tab label="Activities"
                        buttonStyle={color} style={color}>
                        <ProfileActivity />
                    </Tab>
                </Tabs>
            </profile-tabs>
        );
    }
}

export default ProfileTabs;