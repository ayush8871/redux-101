import {createStore} from 'redux';

// Action Generators - functions that return action objects
const incrementCount = (payload = {}) => ({
  type: 'INCREMENT',
  incrementBy: typeof payload.incrementBy === 'number' ? payload.incrementBy : 1
});

const store = createStore((state = {count: 0}, action) => {
  switch(action.type){
    case 'INCREMENT':
      return {
        count: state.count + action.incrementBy
      }
    case 'DECREMENT':
      const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1;
      return {
        count: state.count - decrementBy
      }
    case 'RESET':
      return{
        count: 0
      }
    default:
      return state;
  }
});

// Do something when state changes
store.subscribe(() => {
  console.log(store.getState());
})

// Increment action
store.dispatch(incrementCount({incrementBy: 10}));

// DECREMENT action
store.dispatch({
  type: 'DECREMENT',
  decrementBy: 15
});

// DECREMENT action
store.dispatch({
  type: 'DECREMENT'
});

// DECREMENT action
store.dispatch({
  type: 'DECREMENT'
});

// RESET action
store.dispatch({
  type: 'RESET'
});