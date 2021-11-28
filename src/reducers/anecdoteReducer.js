import anecServices from '../services/anecServices'

const asObject = (anecdote) => {
  return {
    content: anecdote,
    votes: 0
  }
}

const reducer = (state = [], action) => {
  switch (action.type) {
    case 'NEW_VOTE':
      return addVote(state, action.data.id)

    case 'NEW_ANEC':
      return [...state, action.data]

    case 'INIT_ANEC':
      return action.data
  }

  return state
}

export const createVote = id => {
  return {
    type: 'NEW_VOTE',
    data: { id }
  }
}

export const createNew = anec => {
  return async dispatch => {
    const newAnec = await anecServices.create(anec)
    dispatch({
      type: 'NEW_ANEC',
      data: {
        content: newAnec.content,
        votes: newAnec.votes,
        id: newAnec.id
      }
    })
  }
}

const addVote = (state = [], id) => {
  const anec = state.find(s => s.id === id)
  const obj = {
    ...anec,
    votes: anec.votes + 1
  }
  return state.map(s => s.id === id ? obj : s)
}

export const intializeAnec = () => {
  return async dispatch => {
    const anecs = await anecServices.getAll()
    dispatch({
      type: 'INIT_ANEC',
      data: anecs
    })
  }
}

export default reducer