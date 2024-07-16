import ReactDOM from 'react-dom/client'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import App from './App'
import { anecdoteReducer, filterReducer, createAnecdote, setFilter } from './reducers/anecdoteReducer'

const store = configureStore({
  reducer: {
    anecdotes: anecdoteReducer,
    filter: filterReducer
  }
})

console.log(store.getState())
store.subscribe(() => console.log(store.getState()))
store.dispatch(createAnecdote('the app state is in redux store'))
store.dispatch(setFilter('ALL'))

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
)