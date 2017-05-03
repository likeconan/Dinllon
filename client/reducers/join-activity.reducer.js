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
    selectActivities: {
        created: [],
        joined: []
    },
    selectTab: true,
    approveActivityId: null,
    cancelApplyJoin: {
        activityId: null,
        joinedId: null
    },
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
                cancelApplyJoin: action.payload.data
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
        case 'TOGGLE_SELECT_CREATE':
            return {
                ...state,
                selectTab: action.payload
            }
        case 'APPROVE_JOIN':
            {
                return {
                    ...state
                }
            }

        case 'GET_AVAILABLE_ACTIVITIES':
            return {
                ...state,
                selectActivities: action.payload
            }
        default:
            return state;
    }
}
