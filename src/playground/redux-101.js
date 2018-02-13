import {createStore} from 'redux';

const store = createStore((state = {count: 0}, action) => {
  switch(action.type){
    case 'INCREMENT':
      const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1;
      return {
        count: state.count + incrementBy
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
store.dispatch({
  type: 'INCREMENT',
  incrementBy: 5  
});

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

store.dispatch({
  type: 'RESET'
});