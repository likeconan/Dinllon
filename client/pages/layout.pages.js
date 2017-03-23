import React, {Component} from 'react';
import TopMenu from '../components/TopMenu/TopMenu';
import TopLoading from '../components/TopLoading/TopLoading';
import {Navigate} from '../utilities';
import Toast from '../components/Toast/Toast'
import ImageDialog from '../components/ImageDialog/ImageDialog';
import CreateActivityDialog from '../components/CreateActivityDialog/CreateActivityDialog';
import JoinActivityDialog from '../components/JoinActivityDialog/JoinActivityDialog';

class Layout extends Component {
    render() {
        const obj = Navigate.toggleTopBack(this.props.location.pathname);
        return (
            <div>
                <TopMenu activeObj={obj}/>
                <TopLoading/>
                <Toast/>
                <ImageDialog/>
                <JoinActivityDialog/>
                <CreateActivityDialog/> {this.props.children}
            </div>
        );
    }
}

export default Layout;