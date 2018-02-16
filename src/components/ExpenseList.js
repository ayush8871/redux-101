import React from 'react';
import {connect} from 'react-redux';

const ExpenseList = (props) => (
    <div>
        List of expenses
        {props.filters.text}
        <h1>{props.expenses.length}</h1>
    </div>
);

const mapStateToProps = ({expenses, filters}) => {
    return {
        expenses,
        filters
    }
};

export default connect(mapStateToProps)(ExpenseList);