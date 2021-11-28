const filterReducer = (state = '', action) => {
    switch(action.type){
        case 'SET_FILTER':
            {
                return new RegExp(action.data, 'i')
            }
        default:
            return state
    }
}

export const searchWord = data => {
    return {
        type: 'SET_FILTER',
        data
    }
}

export default filterReducer