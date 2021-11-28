import React from 'react'
import { useDispatch } from 'react-redux'
import { createNew } from '../reducers/anecdoteReducer'
import { addNotification } from '../reducers/notificationReducer'
import anecServices from '../services/anecServices'

const AnecdoteForm = () => {
    const dispatch = useDispatch()

    const createAnec = async event => {
        event.preventDefault()
        const anec = event.target.anecdotes.value
        event.target.anecdotes.value = ''
        dispatch(createNew(anec))
        dispatch(addNotification('MY_ANEC', anec))
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