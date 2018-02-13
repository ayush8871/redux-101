import {createStore} from 'redux';

const store = createStore((state = {count: 0}, action) => {
  switch(action.type){
    case 'INCREMENT':
      return {
        count: state.count + 1
      }
    case 'DECREMENT':
      return {
        count: state.count - 1
      }
    default:
      return state;
  }
});

console.log(store.getState());

// Increment action
store.dispatch({
  type: 'INCREMENT'
});

console.log(store.getState());

// DECREMENT action
store.dispatch({
  type: 'DECREMENT'
});

console.log(store.getState());