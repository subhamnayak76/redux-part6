import { useSelector, useDispatch } from 'react-redux'
import { createAnn, voteAnnecdote } from './reducers/anecdoteReducer'

const App = () => {
  const anecdotes = useSelector(state =>
    
    state.anecdotes ? [...state.anecdotes].sort((a, b) => b.votes - a.votes) : []
  )
  const dispatch = useDispatch()

  const vote = (id) => {
    console.log('vote', id)
    dispatch(voteAnnecdote(id))
  }

  const add = (event) => {
    event.preventDefault()
    const content = event.target.ann.value
    event.target.ann.value = ''
    dispatch(createAnn(content))
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
        <div><input name="ann" /></div>
        <button type='submit'>create</button>
      </form>
    </div>
  )
}

export default App