export const isJsonstring = (data) => {
    try {
        JSON.parse(data)
    } catch (error) {
        return false
    }
    return true
}