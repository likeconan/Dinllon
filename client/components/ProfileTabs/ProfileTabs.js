import React, { Component } from 'react';
import { Tabs, Tab } from 'material-ui/Tabs';
import Status from '../Status/Status';

require('./profile-tabs.less')

class ProfileTabs extends Component {
    render() {
        return (
            <profile-tabs>
                <Tabs className='tabs'>
                    <Tab label="Dinllons" >
                       <Status />
                    </Tab>
                    <Tab label="Activities" >
                       223
                    </Tab>
                </Tabs>
            </profile-tabs>
        );
    }
}

export default ProfileTabs;