import {createStore} from 'redux';

const store = createStore((state = {count: 0}, action) => {
  if(action.type === 'INCREMENT'){
    return {
      count: state.count + 1
    }
  }
  return state;
});

console.log(store.getState());

store.dispatch({
  type: 'INCREMENT'
});

console.log(store.getState());