import { useSelector, useDispatch } from 'react-redux'
import { createann, voteannecdotes } from './reducers/anecdoteReducer'
// import {reducer } from './reducers/anecdoteReducer'
const App = () => {
  const anecdotes = useSelector(state => 
    [...state].sort((a, b) => b.votes - a.votes)
  )
  const dispatch = useDispatch()

  const vote = (id) => {
    console.log('vote', id)
    dispatch(voteannecdotes(id))
  }
  const add = (event) =>{
    event.preventDefault()
    const content = event.target.ann.value
    event.target.ann.value = ''
    dispatch(createann(content))
  } 
 const sorted = () =>{
    anecdotes.map()
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
      <form onSubmit={add}>
        <div><input name ="ann"/></div>
        <button type='submit'>create</button>
      </form>
    </div>
  )
}

export default App