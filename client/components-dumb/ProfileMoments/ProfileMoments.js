import React, { Component } from 'react';
import Status from '../Status/Status';
import { Translate } from 'utilities';

class ProfileMoments extends Component {

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