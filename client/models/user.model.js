class UserModel {
    constructor(user) {
        this.user = user ? user : {};
        this.user.headPic = user ? (user.headPic ? user.headPic : './client/assets/images/default-head-pic.jpg') : './client/assets/images/default-head-pic.jpg';
        this.user.nickName = user ? (user.nickName ? user.nickName : 'Dinlloner') : 'Dinlloner';
        this.user.goingOn = user ? (user.goingOn ? user.goingOn : 'Don\'t do anything') : 'Don\'t do anything';
        this.user.backPic = user ? (user.backPic ? user.backPic : './client/assets/images/default-back-pic.jpg') : './client/assets/images/default-back-pic.jpg';
    }
}
export default UserModel;