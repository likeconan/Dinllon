import React, { Component } from 'react';
import Status from '../components/Status/Status';
import BriefProfile from '../components/BriefProfile/BriefProfile';
import QuickActivity from '../components/QuickActivity/QuickActivity';
import ImageDialog from '../components/ImageDialog/ImageDialog';
import CreateActivityDialog from '../components/CreateActivityDialog/CreateActivityDialog';
import JoinActivityDialog from '../components/JoinActivityDialog/JoinActivityDialog';
import AddStatus from '../components/AddStatus/AddStatus';

class SocialLife extends Component {
    render() {
        return (
            <div className='all-center-flex life-container'>
                <div className='life-left-con'>
                    <BriefProfile />
                </div>
                <div className='life-center-con'>
                    <AddStatus />
                    <Status />
                </div>
                <div className='life-right-con'>
                    <QuickActivity />
                </div>
                <ImageDialog />
                <JoinActivityDialog />
                <CreateActivityDialog />
            </div>
        );
    }
}

export default SocialLife;