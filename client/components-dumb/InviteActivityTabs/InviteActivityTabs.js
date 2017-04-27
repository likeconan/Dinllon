import React, { Component } from 'react';
import { Tabs, Tab } from 'material-ui/Tabs';
import CreateActivityForm from 'components-smart/CreateActivityForm/CreateActivityForm';

require('./invite-activity-tabs.less');

class InviteActivityTabs extends Component {
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
            <invite-tabs>
                <Tabs className='tabs' inkBarStyle={tabcolor} tabItemContainerStyle={itemcolor}>
                    <Tab label="Dinllons" buttonStyle={color}>
                        123
                    </Tab>
                    <Tab label="Activities" buttonStyle={color} style={color}>
                        <CreateActivityForm />
                    </Tab>
                </Tabs>
            </invite-tabs>
        );
    }
}

export default InviteActivityTabs;