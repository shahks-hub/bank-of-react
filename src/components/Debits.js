/*==================================================
src/components/Debits.js

The Debits component contains information for Debits page view.
Note: You need to work on this file for the Assignment.
==================================================*/
import React, {Component} from 'react'
import AccountBalance from './AccountBalance';
import {Link} from 'react-router-dom';

class DebitExpense extends Component{
  constructor(props) {  // Create and initialize state,
    super(props)
    this.state = {
      debit:{
        amount: 0.00,
        description: "",
        date: "",
      }
    };
  }

  // Create the list of Debit items
  debitsView = () => {
    const { debits } = this.props;
    return debits.map((debit) => {  // Extract "id", "amount", "description" and "date" properties of each debits JSON array element
      let date = debit.date.slice(0,10);
      return <li key={debit.id}>{debit.amount} {debit.description} {date}</li>
    });
  }

  // When new debit input, capture the new input value and update state
  handleChange = (e) => {
    const updatedDebit = {...this.state.debit};  // Create an object for state
    updatedDebit[e.target.name] = e.target.value;  // add the new submission
    updatedDebit['date'] = new Date().toISOString()// set submission date to current date
    this.setState({debit: updatedDebit})  // Update state with object values
  }

  // When user clicked submit button, store debit data
  handleSubmit = (e) => {
    e.preventDefault()
    this.props.addDebit(this.state.debit)  // Update state in the top-level component (App.js)
  }

  // Render the list of Debit items and a form to input new Debit item
  render(){
    return (
      <div>
        <h1>Debits</h1>

        {this.debitsView()}
       
        <AccountBalance accountBalance={this.props.accountBalance} />
        
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="description" placeholder='Description' style={{width:"350px"}} onChange={this.handleChange}/>
          <br/>
          <input type="any" pattern="^\d+(\.\d{1,2})?$" name="amount" placeholder='Amount in $' 
          title="Please enter the $ amount up to two decimal places." onChange={this.handleChange}/>        
          <button type="submit">Add Debit</button>
        </form>
        <br/>
        <Link to="/">Return to Home</Link>
      </div>
    );
  }
}

export default DebitExpense;