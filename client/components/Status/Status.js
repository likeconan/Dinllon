import React, { Component } from 'react';
import StatusChild from '../StatusChild/StatusChild';
require('./status.less');
class Status extends Component {
    render() {
        var data = [{
            textContent: 'first lala I created this',
            imgContent: 'https://testfor.blob.core.chinacloudapi.cn/images/c54f9c75-7bee-4d50-a174-9abda5ddbf6d.jpeg;https://testfor.blob.core.chinacloudapi.cn/images/5959fc21-f68c-4dd2-8a77-074678033799.jpeg;https://testfor.blob.core.chinacloudapi.cn/images/bcae52c5-904c-4e25-8763-bb56342a8329.jpeg;',
            user: {
                nickName: 'FirstTry',
                goingOn: 'I wanna play dota'
            }
        }]
        var child = data.map((val, key) => {
            return (
                <StatusChild data={val} key={key} />
            )
        })
        return (
            <status>
                {child}
            </status>
        );
    }
}

export default Status;