import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { fetchData } from "../redux/greetingReducer/greetingReducer"


const Greeting = () => {
  const greeting = useSelector(state => state.greetings)
  const dispatch = useDispatch()
  useEffect(() => dispatch(fetchData()))
  return (
    <div className="greeting">
      <h1 className="h1-greeting">
        {greeting}
      </h1>
    </div>
  )
}

export default Greeting;