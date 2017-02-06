class UserModel {
    constructor(user) {
        this.headPic = user ? (user.headPic ? user.headPic : './client/assets/images/default-head-pic.jpg') : './client/assets/images/default-head-pic.jpg';
        this.nickName = user ? (user.nickName ? user.nickName : 'Dinlloner') : 'Dinlloner';
        this.goingOn = user ? (user.goingOn ? user.goingOn : 'Don\'t do anything') : 'Don\'t do anything';
    }
}
export default UserModel;