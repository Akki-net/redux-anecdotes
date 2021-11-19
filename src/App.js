import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { createVote, createNew } from './reducers/anecdoteReducer'

const App = () => {
  const anecdotes = useSelector(state => state)
  const dispatch = useDispatch()

  const vote = (id) => {
    console.log('vote', id)
    dispatch(createVote(id))
  }

  const createAnec = (event) => {
    event.preventDefault()
    const anec = event.target.anecdotes.value
    event.target.anecdotes.value = ''
    console.log("check new oone:", createNew(anec))
    dispatch(createNew(anec))
  }

  return (
    <div>
      <h2>Anecdotes</h2>
      {anecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id)}>vote</button>
          </div>
        </div>
      )}
      <h2>create new</h2>
      <form onSubmit={createAnec} >
        <div><input name='anecdotes' required /></div>
        <button>create</button>
      </form>
    </div>
  )
}

export default App