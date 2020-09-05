let nextTodoId = 0
//  const addTodo = text => ({
//   type: 'ADD_TODO',
//   id: nextTodoId++,
//   text
// })

export const addTodo = (text) => {
    console.warn("in action")
    return {
        type: 'ADD_TODO',
        id: 1,
        text
    }
}