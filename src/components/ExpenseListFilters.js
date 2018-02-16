import React, { Component } from 'react';
import {connect} from 'react-redux';
import {setTextFilter, sortByAmount, sortByDate, setStateDate, setEndDate} from '../actions/filters';
import 'react-dates/initialize';
import {DateRangePicker} from 'react-dates';
class ExpenseListFilters extends Component {
    state = {
        calenderFocused: null
    }
    onDatesChange = ({startDate, endDate}) => {
        this.props.dispatch(setStateDate(startDate));
        this.props.dispatch(setEndDate(endDate));
    }
    onFocusChange = (calenderFocused) => {
        this.setState(() => ({
            calenderFocused
        }))
    }
    render() { 
        return (
            <div>
                <input 
                    type="text" 
                    value={this.props.filters.text}
                    onChange={(e) => this.props.dispatch(setTextFilter(e.target.value))}
                />
                <select 
                    value={this.props.filters.sortBy}
                    onChange={(e) => {
                        if(e.target.value === 'date'){
                            this.props.dispatch(sortByDate());
                        } else if(e.target.value === 'amount'){
                            this.props.dispatch(sortByAmount());
                        }
                    }}
                >
                    <option value="date">Date</option>
                    <option value="amount">Amount</option>
                </select>
                <DateRangePicker
                    startDate={this.props.filters.startDate}
                    startDateId="start"
                    endDate={this.props.filters.endDate}
                    endDateId="end"
                    onDatesChange={this.onDatesChange}
                    focusedInput={this.state.calenderFocused}
                    onFocusChange={this.onFocusChange}
                    numberOfMonths={1}
                    showClearDates={true}
                    isOutsideRange={() => false}
                />
            </div>
        )
    }
}
const mapStateToProps = ({filters}) => {
    return {
        filters
    }
}
export default connect(mapStateToProps)(ExpenseListFilters);