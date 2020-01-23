export const getListData = () => {
    return new Promise((resolve, reject) => {
        fetch('https://jsonplaceholder.typicode.com/todos').then(r => r.json()).then(res => resolve(res)).catch(err => reject(err))
    })
}

export const getDetailData = (id) => {
    return new Promise((resolve, reject) => {
        fetch(`https://jsonplaceholder.typicode.com/todos/${id}`).then(r => r.json()).then(res => resolve(res)).catch(err => reject(err))
    })
}