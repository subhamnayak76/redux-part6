// index.js

import ReactDOM from 'react-dom/client'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import App from './App'
import { anecdoteReducer, filterReducer, createAnn, setFilter } from './reducers/anecdoteReducer'

const reducer = combineReducers({
  anecdotes: anecdoteReducer,
  filter: filterReducer
})

const store = createStore(reducer)

console.log(store.getState())
store.subscribe(() => console.log(store.getState()))
store.dispatch(createAnn('the app state is in redux store'))
store.dispatch(setFilter('ALL'))

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
)