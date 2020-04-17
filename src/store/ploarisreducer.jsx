const initialState = {
    editingPage: { elements: [] }
}

export default (state = initialState, { type, payload }) => {
    switch (type) {
    case 'INCREMENT':

        return  state
    default:
        return state
    }
}