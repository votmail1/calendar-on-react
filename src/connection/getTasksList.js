export const getTasksList = () => {
    let arr = JSON.parse(localStorage.getItem('event'));
    return (!Array.isArray(arr) || []) ? [...arr] : [{
        "participants": "",
        "name": "",
        "date": ""
    }];
}
