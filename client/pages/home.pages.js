import React, { Component } from 'react';
import axios from 'axios';
import FullBackImage from '../components/FullBackImage/FullBackImage';
import SearchBar from '../components/SearchBar/SearchBar';
class Home extends Component {
    render() {
        return (
            <div>
                <FullBackImage backSrc='./client/assets/images/home-back-big.jpg' className='search-mid center-flex'>
                    <div style={{ marginTop: '-10vh' }}>
                        <h2 className='white-text mont-font home-title'>
                            <span>Enjoy,</span>
                            <span>Meet the ones you like</span>
                        </h2>
                        <SearchBar></SearchBar>
                    </div>
                </FullBackImage>
            </div>
        );
    }

    _test() {
        axios.get('/api/test').then((res) => {
            console.log(res);
        }).catch((err) => {
            console.log("some error happened")
        })
    }

}

export default Home;