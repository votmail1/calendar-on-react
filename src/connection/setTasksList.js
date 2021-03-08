export const setTasksList = (todoList) => {
    localStorage.setItem('event', JSON.stringify(todoList));
}