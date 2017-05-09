import React, { Component } from 'react';
import SearchedMoments from 'components-smart/SearchedMoments/SearchedMoments';
import BriefProfile from 'components-smart/BriefProfile/BriefProfile';
import QuickActivity from 'components-smart/QuickActivity/QuickActivity';
import AddStatus from 'components-smart/AddStatus/AddStatus';
import Classnames from 'classnames';
import { searchLife } from 'actions/social-status.action';
import { connect } from 'react-redux';

class SocialLife extends Component {

    componentWillMount() {
        document.body.scrollTop = 0
    }


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