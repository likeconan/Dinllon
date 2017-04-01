import React, { Component } from 'react';
import SearchedMoments from '../components/SearchedMoments/SearchedMoments';
import BriefProfile from '../components/BriefProfile/BriefProfile';
import QuickActivity from '../components/QuickActivity/QuickActivity';
import AddStatus from '../components/AddStatus/AddStatus';
import Classnames from 'classnames';
import { searchLife } from '../actions/social-status.action';
import { connect } from 'react-redux';

class SocialLife extends Component {
    render() {
        return (
            <social-life>
                <div className='all-center-flex life-container'>
                    <div className='life-left-con'>
                        <BriefProfile />
                    </div>
                    <div className='life-center-con'>
                        <AddStatus />
                        <SearchedMoments />
                    </div>
                    <div className='life-right-con'>
                        <QuickActivity />
                    </div>
                </div>
            </social-life>

        );
    }
}

export default SocialLife;