export default function reducer(state = {
    openJoin: false,
    openInvite: false,
    openApprove: false,
    openCancelApply: false,
    applyActivity: {
        activityId: null,
        informEmail: ''
    },
    inviteActivity: {

    },
    approveActivityId: null,
    cancelApplyJoinedId: null,
    validatedSelect: false,
    validatedJoin: false,
}, action) {
    switch (action.type) {
        case 'TOGGLE_JOIN_ACTIVITY':
            return {
                ...state,
                openJoin: action.payload.open,
                applyActivity: {
                    ...state.applyActivity,
                    activityId: action.payload.activityId
                }
            };
        case 'TOGGLE_INVITE_DIALOG':
            return {
                ...state,
                openInvite: action.payload.open,
            };
        case 'TOGGLE_CANCEL_APPLY':
            return {
                ...state,
                openCancelApply: action.payload.open,
                cancelApplyJoinedId: action.payload.joinedId
            };
        case 'EDIT_ACTIVITY_JOIN_EMAIL':
            return {
                ...state,
                applyActivity: {
                    ...state.applyActivity,
                    informEmail: action.payload.val
                },
                validatedJoin: action.payload.isEmail
            }

        case 'TOGGLE_APPROVE_JOIN_DIALOG':
            {
                return {
                    ...state,
                    openApprove: action.payload.open,
                    approveActivityId: action.payload.approveActivityId
                }
            }

        case 'APPROVE_JOIN':
            {
                return {
                    ...state
                }
            }

        default:
            return state;
    }
}
