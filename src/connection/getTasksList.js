export const getTasksList = () => {
    let arr = JSON.parse(localStorage.getItem('event'));
    return arr
}
