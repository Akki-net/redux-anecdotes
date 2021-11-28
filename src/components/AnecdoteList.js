import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { createVote } from '../reducers/anecdoteReducer'
import { addNotification } from '../reducers/notificationReducer'

const AnecdoteList = () => {
    const anecdotes = useSelector(state => {
    if(state.filter !== ''){
        return state.anecdotes.filter(anecdote => {
            if(anecdote.content.search(state.filter) !== -1)
            return anecdote
        })
    }
    return state.anecdotes
    })
    const dispatch = useDispatch()

    const vote = (id) => {
        const myAnec = anecdotes.find(anecdote => anecdote.id === id)
        dispatch(createVote(id))
        dispatch(addNotification('MY_VOTE', myAnec.content))  
    }

    return (
        <div>
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
        </div>
    )
}

export default AnecdoteList