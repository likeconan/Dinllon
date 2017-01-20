import React, { Component } from 'react';
import axios from 'axios';
import FullBackImage from '../components/FullBackImage/FullBackImage';
class Home extends Component {
    render() {
        return (
            <div>
                <FullBackImage></FullBackImage>
                <button type="button" onClick={() => this._test()}>123</button>
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