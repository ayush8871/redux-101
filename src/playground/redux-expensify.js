import {createStore, combineReducers} from 'redux';

const demoState = {
    expenses: [{
        id: 'asjdsdfksndfsdf',
        description: 'This is some description',
        note: 'This is not the final cost',
        amount: 54500,
        createdAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'date', // date or amount
        startDate: undefined,
        endDate: undefined
    }
}