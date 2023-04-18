/*==================================================
src/components/Credits.js

The Credits component contains information for Credits page view.
Note: You need to work on this file for the Assignment.
==================================================*/
import React, { Component } from "react";
import { Link } from "react-router-dom";
class Credit extends Component {
  constructor() {
    super();
    this.state = {
      credit: {
        id: "",
        amount: 0.0,
        description: "",
        date: "",
      },
    };
  }
  // Create the list of Credit items
  creditsView = () => {
    const { credit } = this.props;
    return credit.map((cred) => {
      // Extract "id", "amount", "description" and "date" properties of each debits JSON array element
      let date = cred.date.slice(0, 10);
      return (
        <li key={cred.id}>
          {cred.amount} {cred.description} {date}
        </li>
      );
    });
  };
  // When new debit input, capture the new input value and update state
  handleChange = (e) => {
    const updatedCredit = { ...this.state.credit }; // Create an object for state
    updatedCredit[e.target.name] = e.target.value; // add the new submission
    this.setState({ credit: updatedCredit }); // Update state with object values
  };

  // When user clicked submit button, store debit data
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addCredits(this.state.credit); // Update state in the top-level component (App.js)
  };
  render() {
    return (
      <div>
        <h1>Credits</h1>
        {this.creditsView()}

        <form onSubmit={this.props.addCredits}>
          <input
            type="text"
            name="description"
            placeholder="Description"
            style={{ width: "350px" }}
            onChange={this.handleChange}
          />
          <br />
          <input type="any" pattern="^\d+(\.\d{1,2})?$" name="amount" placeholder="Amount in $"
          title="Please enter the $ amount up to two decimal places." />
          <input type="date" name="date" placeholder="Date" />
          <button type="submit" onClick={this.handleSubmit}>
            Add Credit
          </button>
        </form>
        <br />
        <Link to="/">Return to Home</Link>
      </div>
    );
  }
}
export default Credit;
