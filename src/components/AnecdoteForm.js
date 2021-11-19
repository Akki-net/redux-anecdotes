import React from 'react'
import { useDispatch } from 'react-redux'
import { createNew } from '../reducers/anecdoteReducer'

const AnecdoteForm = () => {
    const dispatch = useDispatch()

    const createAnec = (event) => {
        event.preventDefault()
        const anec = event.target.anecdotes.value
        event.target.anecdotes.value = ''
        dispatch(createNew(anec))
    }

    return (
        <div>
            <h2>create new</h2>
            <form onSubmit={createAnec} >
                <div><input name='anecdotes' required /></div>
                <button>create</button>
            </form>
        </div>
    )
}

export default AnecdoteForm