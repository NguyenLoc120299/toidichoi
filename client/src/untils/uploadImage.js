
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage'
import { storage } from '../firebase'
export const uploadImage = async (files) => {
    const promises = []
    for (const item of files) {

        const storageRef = ref(storage, `/files/${item.name}`)
        const uploadTask = uploadBytesResumable(storageRef, item)
        promises.push(uploadTask)
    }
    const result = [];
    await Promise.allSettled(promises).then(res => {
        res.forEach(item => {
            if (item.status === 'fulfilled') {
                result.push(item.value)
            }
        })
    })

    const urlPromises = result.map(item => {
        const path = item.ref.toString()
        return getDownloadURL(ref(storage, path))
    })
    const urls = []
    await Promise.allSettled(urlPromises).then(res => {
        res.forEach(item => {
            if (item.status === 'fulfilled') {
                urls.push(item.value)
            }
        })
    })
    return urls;

}
