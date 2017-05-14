import { staticServer } from 'utilities';

class UserModel {
    constructor(user) {
        this.user = { ...user };
        this.user.headPic = this.user.headPic ? (this.user.headPic.indexOf(staticServer) === 0 ? this.user.headPic : staticServer + this.user.headPic) : '/default/default-head-pic.jpg';
        this.user.nickName = this.user.nickName ? this.user.nickName : 'Yomer';
        this.user.goingOn = this.user.goingOn ? this.user.goingOn : 'Don\'t do anything';
        this.user.backPic = this.user.backPic ? (this.user.backPic.indexOf(staticServer) === 0 ? this.user.backPic : staticServer + this.user.backPic) : '/default/default-back-pic.jpg';
    }
}
export default UserModel;