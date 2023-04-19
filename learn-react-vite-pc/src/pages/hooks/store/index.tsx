const initialState = {
    num: 1,
    data: []
}

const reducer = (state = initialState, action: any) => {
    switch (action.type) {
        case 'add':
            console.log(action, 'action')
            return { ...state, num: state.num += action.payload }

        default:
            break;
    }
    return state
}
export { initialState, reducer };