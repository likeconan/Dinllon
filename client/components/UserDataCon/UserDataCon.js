import React, { Component } from 'react';
import Classnames from 'classnames';

require('./user-data-con.less');

class UserDataCon extends Component {
    render() {
        return (
            <user-data-con class={Classnames(this.props.className)}>
                <div className='profile-data-con center-flex'>
                    <div className='pdc-con cursor-pointer'>
                        <p className='grey-text text-darken-2 roboto-font'>Dinllons</p>
                        <strong className='blue-text text-accent-2'>123</strong>
                    </div>
                    <div className='pdc-con cursor-pointer'>
                        <p className='grey-text text-darken-2 roboto-font'>Friends</p>
                        <strong className='blue-text text-accent-2'>23</strong>
                    </div>
                    <div className='pdc-con cursor-pointer'>
                        <p className='grey-text text-darken-2 roboto-font'>Activities</p>
                        <strong className='blue-text text-accent-2'>10</strong>
                    </div>
                    <div className={Classnames('pdc-con cursor-pointer', { 'invisible': this.props.invisible })}>
                        <p className='grey-text text-darken-2 roboto-font'>Appraises</p>
                        <strong className='blue-text text-accent-2'>10</strong>
                    </div>
                    <div className={Classnames('pdc-con cursor-pointer', { 'invisible': this.props.invisible })}>
                        <p className='grey-text text-darken-2 roboto-font'>Dislikes</p>
                        <strong className='blue-text text-accent-2'>10</strong>
                    </div>
                    <div className={Classnames('pdc-con cursor-pointer', { 'invisible': this.props.invisible })}>
                        <p className='grey-text text-darken-2 roboto-font'>Late</p>
                        <strong className='blue-text text-accent-2'>10</strong>
                    </div>
                </div>
            </user-data-con>
        );
    }
}

export default UserDataCon;