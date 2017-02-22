import React, { Component } from 'react';
import axios from 'axios';
import FullBackImage from '../components/FullBackImage/FullBackImage';
import SearchBar from '../components/SearchBar/SearchBar';
import DataDisplay from '../components/DataDisplay/DataDisplay';

class Home extends Component {
    render() {
        return (
            <div>
                <FullBackImage backSrc='./client/assets/images/home-back-big.jpg' className='column-center center-flex'>
                    <div style={{ marginTop: '-20vh' }}>
                        <h2 className='white-text mont-font home-title'>
                            <span>Enjoy,</span>
                            <span>Meet the ones you like</span>
                        </h2>
                        <SearchBar></SearchBar>
                    </div>
                </FullBackImage>
                <DataDisplay></DataDisplay>
            </div>
        );
    }
}

export default Home;