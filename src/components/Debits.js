/*==================================================
src/components/Debits.js

The Debits component contains information for Debits page view.
Note: You need to work on this file for the Assignment.
==================================================*/
import React, {Component} from 'react'
import {Link} from 'react-router-dom';

class DebitExpense extends Component{
  // Create the list of Debit items
  debitsView = () => {
    const { debits } = this.props;
    return debits.map((debit) => {  // Extract "id", "amount", "description" and "date" properties of each debits JSON array element
      let date = debit.date.slice(0,10);
      return <li key={debit.id}>{debit.amount} {debit.description} {date}</li>
    });
  }
  // Render the list of Debit items and a form to input new Debit item
  render(){
    return (
      <div>
        <h1>Debits</h1>

        {this.debitsView()}

        <form onSubmit={this.props.addDebit}>
          <input type="text" name="description" placeholder='Description' style={{width:"350px"}} />
          <br/>
          <input type="number" name="amount" placeholder='Amount in $' />        
          <input type="date" name="date" placeholder='Date' />
          <button type="submit">Add Debit</button>
        </form>
        <br/>
        <Link to="/">Return to Home</Link>
      </div>
    );
  }
}

export default DebitExpense;