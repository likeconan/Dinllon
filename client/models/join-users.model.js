import UserModel from './user.model';

class JoinUsersModel {
    constructor(joins) {
        joins = joins ? [...joins] : [];
        this.applied = joins.filter(jo => jo.status === 1).map((val, key) => {
            val.User = new UserModel(val.User).user
            return val;
        })
        this.approved = joins.filter(jo => jo.status === 2).map((val, key) => {
            val.User = new UserModel(val.User).user
            return val;
        })
    }
}
export default JoinUsersModel;