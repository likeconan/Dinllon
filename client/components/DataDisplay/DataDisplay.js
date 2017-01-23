import React, { Component } from 'react';
require('./data-display.less')
class DataDisplay extends Component {
    render() {
        return (
            <data-display class='center-flex'>
                <div className='center-flex  data-con'>
                    <h5 className='data-num'>2,017</h5>
                    <span className='sans-font'>People</span>
                </div>
                <div className='center-flex  data-con'>
                    <h5 className='data-num'>32</h5>
                    <span className='sans-font'>Dates</span>
                </div>
                <div className='center-flex  data-con'>
                    <h5 className='data-num'>201,323</h5>
                    <span className='sans-font'>Views</span>
                </div>
                <div className='center-flex  data-con'>
                    <h5 className='data-num'>4,332</h5>
                    <span className='sans-font'>News</span>
                </div>
            </data-display>
        );
    }
}

export default DataDisplay;