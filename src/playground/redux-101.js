import {createStore} from 'redux';

// Action Generators - functions that return action objects
const incrementCount = ({incrementBy = 1} = {}) => ({
  type: 'INCREMENT',
  incrementBy
});

const decrementCount = ({decrementBy = 1} = {}) => ({
  type: 'DECREMENT',
  decrementBy
});

const store = createStore((state = {count: 0}, action) => {
  switch(action.type){
    case 'INCREMENT':
      return {
        count: state.count + action.incrementBy
      }
    case 'DECREMENT':
      return {
        count: state.count - action.decrementBy
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
store.dispatch(decrementCount({decrementBy: 10}));

// DECREMENT action
store.dispatch(decrementCount());

// DECREMENT action
store.dispatch(decrementCount({decrementBy: 3}));

// RESET action
store.dispatch({
  type: 'RESET'
});
