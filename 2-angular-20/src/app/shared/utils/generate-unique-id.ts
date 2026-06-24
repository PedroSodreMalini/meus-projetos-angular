export const generateUniqueId = () => {
    const timestamp = new Date().getTime().toString(36)
    const number = Math.random().toString(36).substring(2,9)
    return `${timestamp}-${number}`
}