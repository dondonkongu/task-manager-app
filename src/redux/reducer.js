const initState = {
    filters: {
        search: '',
        status: 'All',
        priority: []

    },
    todoLists: [
        { id: 1, name: 'learn yoga', completed: true, priority: 'Medium' },
        { id: 2, name: 'learn redux', completed: false, priority: 'High' },
        { id: 3, name: 'learn javascript', completed: true, priority: 'Low' }
    ]
}
const rootReducer = (state = initState, action) => {
    switch (action.type) {
        case 'todoList/addTodo':
            return {
                ...state,
                todoLists: [
                ...state.todoLists,
                action.payload
                ]
            }
        default:
            return state
    }

}
export default rootReducer