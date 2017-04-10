import React, { Component } from 'react';
import { getUserMoments } from '../../actions/profile.action';
import { connect } from 'react-redux';
import Status from '../Status/Status';
import { Translate } from '../../utilities';


@connect((store) => {
    return { statusList: store.profile.moments }
})

class ProfileMoments extends Component {
    componentWillMount() {
        this
            .props
            .dispatch(getUserMoments(this.props.userId));
    }
    render() {
        return (
            <div>
                {
                    this.props.statusList.length ?
                        <Status statusList={this.props.statusList} />
                        :
                        <div className='margin-2vh2vw grey-text text-darken-2'>
                            {Translate.lang.no_user_moments}
                        </div>
                }
            </div>

        );
    }
}

export default ProfileMoments;