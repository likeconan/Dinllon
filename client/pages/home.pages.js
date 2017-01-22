import React, { Component } from 'react';
import axios from 'axios';
import FullBackImage from '../components/FullBackImage/FullBackImage';
import SearchBar from '../components/SearchBar/SearchBar';
class Home extends Component {
    render() {
        return (
            <div>
                <FullBackImage backSrc='./client/assets/images/home-back-big.jpg' className='search-mid'>
                    <h2 className='white-text mont-font'>Enjoy，Meet the ones you like</h2>
                    <SearchBar></SearchBar>
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