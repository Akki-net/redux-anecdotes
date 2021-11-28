const getId = () => (100000 * Math.random()).toFixed(0)

const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0
  }
}

const reducer = (state = [], action) => {
  switch(action.type){
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

export const createNew = content => {
  return {
    type: 'NEW_ANEC',
    data: { 
      content,
      id: getId(),
      votes: 0
    }
  }
}

const addVote = (state = [] , id) => {
  const anec = state.find(s => s.id === id)
  const obj = {
    ...anec,
    votes : anec.votes + 1
  }
  return state.map(s => s.id === id ? obj : s)
}

export const intializeAnec = anecs => {
  return {
    type: 'INIT_ANEC',
    data: anecs
  }
}

export default reducer