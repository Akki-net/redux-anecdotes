import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addNotification } from '../reducers/notificationReducer'

const Notification = () => {
  const notification = useSelector(state => state.notification)
  const dispatch = useDispatch()

  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }
  
  const showNotification = () => {
    showMagic()
    return (
      <div style={style}>
        {notification}
      </div>
    )
  }

  const showMagic = () => {
    setTimeout(() => dispatch(addNotification('BLA', `I don't know`)), 5000)
  }

  return (
    <div>
      {notification!=='' && showNotification()}
    </div>
  )
  
}

export default Notification