import React, { Component } from 'react';
import { Tabs, Tab } from 'material-ui/Tabs';
import CreateActivityForm from 'components-smart/CreateActivityForm/CreateActivityForm';
import SelectActivitiesList from 'components-smart/SelectActivitiesList/SelectActivitiesList';
import { Translate } from 'utilities';
import { toggleSelectCreate } from 'actions/join-activity.action';
import store from 'store';

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
                <Tabs className='tabs'
                    inkBarStyle={tabcolor}
                    tabItemContainerStyle={itemcolor}
                    onChange={(val) => store.dispatch(toggleSelectCreate(val))}>
                    <Tab
                        label={Translate.lang.select_activity}
                        buttonStyle={color}
                        value={true}>
                        <SelectActivitiesList />
                    </Tab>
                    <Tab
                        label={Translate.lang.create_activity}
                        buttonStyle={color}
                        style={color}
                        value={false}>
                        <CreateActivityForm />
                    </Tab>
                </Tabs>
            </invite-tabs>
        );
    }
}

export default InviteActivityTabs;