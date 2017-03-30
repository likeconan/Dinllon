import React, { Component } from 'react';
import Classnames from 'classnames';
import Translate from '../../utilities/translate';
import { connect } from 'react-redux';

require('./user-data-con.less');

class UserDataCon extends Component {
    render() {
        const data = {...this.props.data} ;
        return (
            <user-data-con class={Classnames(this.props.className)}>
                <div className='profile-data-con center-flex'>
                    <div className='first-showed-pdc center-flex'>
                        <div className='pdc-con cursor-pointer'>
                            <p className='grey-text text-darken-2 roboto-font'>{Translate.lang.moments}</p>
                            <strong className='blue-text text-accent-2'>{data.momentCount}</strong>
                        </div>
                        <div className='pdc-con cursor-pointer'>
                            <p className='grey-text text-darken-2 roboto-font'>{Translate.lang.friends}</p>
                            <strong className='blue-text text-accent-2'>{data.friendCount}</strong>
                        </div>
                        <div className='pdc-con cursor-pointer'>
                            <p className='grey-text text-darken-2 roboto-font'>{Translate.lang.activities}</p>
                            <strong className='blue-text text-accent-2'>{data.activityCount}</strong>
                        </div>
                    </div>
                    <div className={Classnames('second-showed-pdc center-flex', { 'invisible': this.props.invisible })}>
                        <div className='pdc-con cursor-pointer'>
                            <p className='grey-text text-darken-2 roboto-font'>{Translate.lang.appraises}</p>
                            <strong className='blue-text text-accent-2'>{data.appraiseCount}</strong>
                        </div>
                        <div className='pdc-con cursor-pointer'>
                            <p className='grey-text text-darken-2 roboto-font'>{Translate.lang.dislikes}</p>
                            <strong className='blue-text text-accent-2'>{data.dislikeCount}</strong>
                        </div>
                        <div className='pdc-con cursor-pointer'>
                            <p className='grey-text text-darken-2 roboto-font'>{Translate.lang.lates}</p>
                            <strong className='blue-text text-accent-2'>{data.lateCount}</strong>
                        </div>
                    </div>
                </div>
            </user-data-con>
        );
    }
}

export default UserDataCon;