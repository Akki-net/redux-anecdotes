import axios from 'axios'
const baseURL = "http://localhost:3001/anecdotes"

const getAll = async () => {
    const response = await axios.get(baseURL)
    return response.data
}

const create = async newObj => {
    const response = await axios.post(baseURL, newObj)
    return response.data
}

export default { getAll, create }