import React, { Component } from 'react';
import Status from '../components/Status/Status';
import BriefProfile from '../components/BriefProfile/BriefProfile';
import QuickActivity from '../components/QuickActivity/QuickActivity';
import AddStatus from '../components/AddStatus/AddStatus';
import Classnames from 'classnames';
import { searchLife } from '../actions/social-status.action';
import { connect } from 'react-redux';

@connect((store) => {
    return {
        isAuthorize: store.user.isAuthorize
    }
})

class SocialLife extends Component {
    render() {
        return (
            <social-life class={Classnames({ 'logged-page': this.props.isAuthorize })}>
                <div className='all-center-flex life-container'>
                    <div className='life-left-con'>
                        <BriefProfile />
                    </div>
                    <div className='life-center-con'>
                        <AddStatus />
                        <Status action={searchLife} />
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