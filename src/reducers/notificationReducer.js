const notification = ''

const notificationReducer = (state = notification, action) => {
    switch (action.type) {
        case 'VOTE': {
            return state.concat(`you voted '${action.content}'`)
        }
        case 'ANECDOTE': {
            return state.concat(`you created anecdote '${action.content}'`)
        }
        default:
            return ''
    }
}

export const addNotification = (value,content) => {
    if(value === 'MY_ANEC') {
        return {
            type: 'ANECDOTE',
            content
        }
    }
    else if (value === 'MY_VOTE') {
        return {
            type: 'VOTE',
            content
        }
    } else {
        return {
            type: 'DEFAULT',
            content
        } 
    }  
}

export default notificationReducer