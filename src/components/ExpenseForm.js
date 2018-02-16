import React, { Component } from 'react';
class ExpenseForm extends Component {
    state = {
        description: '',
        note: '',
        amount: ''
    }
    onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState(() => ({description}))
    }
    onNoteChange =(e) => {
        const note = e.target.value;
        this.setState(() => ({note}))
    }
    onAmountChange = (e) => {
        const amount = e.target.value;
        if(amount.match(/^\d*(\.\d{0,2})?$/)){
            this.setState(() => ({
                amount
            }))
        }
    }
    render() { 
        return ( 
            <div>
                <form>
                    <input 
                        type="text"
                        value={this.state.description}
                        onChange={this.onDescriptionChange}
                        autoFocus
                        placeholder="Description"
                    />
                    <input
                        type="text"
                        placeholder="amount"
                        value={this.state.amount}
                        onChange={this.onAmountChange}
                    />
                    <textarea 
                        value={this.state.note}
                        onChange={this.onNoteChange}
                        placeholder="Add a note for your expense (optional)"></textarea>
                    <button>Add Expense</button>
                </form>
            </div>
         )
    }
}
 
export default ExpenseForm;