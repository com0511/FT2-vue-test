import firebase from 'firebase'

export const getTitleList = () => {
    return firebase.database()
            .ref('bbs/title')
            .once('value')
            .then(snapshot => snapshot.val())
}

export const getDetails = (id) => {
    return firebase.database()
            .ref(`bbs/description/${id}`)
            .once('value')
            .then(snapshot => snapshot.val())
}

export const addBbs = (titleObj, desObj) => {
    return firebase.database()
            .ref(`bbs/title/`)
            .push(titleObj)
            .then(snapshot => {
                const obj = {...titleObj, ...desObj}
                firebase.database()
                .ref(`bbs/description/${snapshot.key}`)
                .set(obj)
            })
}

export const updateDetails = (id, value) => {
    return firebase.database()
        .ref(`bbs/description/${id}/description`)
        .set(value)
}

export const removeContent = (id) => {
    return firebase.database()
            .ref(`bbs/title/${id}`)
            .remove()
            .then(() => {
                firebase.database()
                .ref(`bbs/description/${id}`)
                .remove()
            })
}