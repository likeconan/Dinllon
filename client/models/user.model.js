class UserModel {
    constructor(user) {
        this.headPic = user ? (user.headPic ? user.headPic : './client/assets/images/default-head-pic.jpg') : './client/assets/images/default-head-pic.jpg';
        this.nickName = user ? (user.nickName ? user.nickName : 'Dinlloner') : 'Dinlloner';
        this.goingOn = user ? (user.goingOn ? user.goingOn : 'Don\'t do anything') : 'Don\'t do anything';
        this.backPic = user ? (user.backPic ? user.backPic : 'https://testfor.blob.core.chinacloudapi.cn/images/c54f9c75-7bee-4d50-a174-9abda5ddbf6d.jpeg') : '';
    }
}
export default UserModel;