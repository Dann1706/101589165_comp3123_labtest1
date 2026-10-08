const resolvedPromise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let sucess = {
                message : 'delayed success!' 
            }
            resolve(sucess)
        }, 500)
    })
}

const rejectPromise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let error = {
                error : 'delayed exception!'
            }
            reject(error)
        }, 500)
    })
}


resolvedPromise()
    .then(result => {
        return result
    })
    .then(data => {
        console.log(data)
    })
    .catch(error => {
        console.log(error)
    })


rejectPromise()
    .then(result => {
        return result
    })
    .then(data => {
        console.log(data)
    })
    .catch(error => {
        console.log(error)
    })
