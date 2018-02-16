import React from 'react';
import {connect} from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';

const ExpenseList = (props) => (
    <div>
        {props.expenses.map((expense, index) => (
            <ExpenseListItem key={index} {...expense} />
        ))}
    </div>
);

const mapStateToProps = ({expenses, filters}) => {
    return {
        expenses: selectExpenses(expenses, filters)
    }
};

export default connect(mapStateToProps)(ExpenseList);