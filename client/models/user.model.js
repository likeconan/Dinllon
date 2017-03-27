class UserModel {
    constructor(user) {
        this.user = { ...user };
        this.user.headPic = this.user.headPic ? this.user.headPic : './client/assets/images/default-head-pic.jpg';
        this.user.nickName = this.user.nickName ? this.user.nickName : 'Dinlloner';
        this.user.goingOn = this.user.goingOn ? this.user.goingOn : 'Don\'t do anything';
        this.user.backPic = this.user.backPic ? this.user.backPic : './client/assets/images/default-back-pic.jpg';
    }
}
export default UserModel;