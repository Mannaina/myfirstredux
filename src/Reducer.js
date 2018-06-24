export const update = (value) => {
    return {
        type: 'UPDATE_TEXT',
        value: value
    }
}

export const updateCheckbox = (male) => {
    return {
        type: 'UPDATE_CHECKBOX',
        male: male
    }
}
export const updateInput = (state = {}, action) => {
    switch (action.type) {
        case 'UPDATE_TEXT':
            return Object.assign({}, state, { text: action.value });
            break;
        case 'UPDATE_CHECKBOX':
            return Object.assign({},state,{male: action.male});
        default:
            return state
            break;
    }
}
