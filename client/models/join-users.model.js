class JoinUsersModel {
    constructor(joins) {
        joins = joins ? [...joins] : [];
        this.applied = joins.filter(jo => jo.status === 1)
        this.approved = joins.filter(jo => jo.status === 2)
    }
}
export default JoinUsersModel;