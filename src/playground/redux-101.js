import {createStore} from 'redux';

const store = createStore((state = {count: 1}, action) => {
  return state;
});

console.log(store.getState());