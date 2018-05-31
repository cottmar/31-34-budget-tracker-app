import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ExpenseForm from '../expense-form/expense-form';
import * as expenseActions from '../../action/expense';


// should have a button that will delete the expense from the appState onClick
// should display the name and price of the component
// should display an ExpenseForm that will enable the user to update the expense in the app state

class Expense extends React.Component {
  render() {
    const {
      expense,
      key,
      expenseRemove,
      expenseUpdate,
    } = this.props;
    return (
      <div className="expense" key={key}>
        <h1> { expense.name } </h1>
        <h1> { expense.price } </h1>
      <button onClick={() => expenseRemove(expense)}>Destroy!</button>
      <ExpenseForm
      expense={expense}
      onComplete={expenseUpdate}
      />
    </div>
    );
  }
}

Expense.propTypes = {
  expense: PropTypes.object,
  key: PropTypes.price,
  expenseRemove: PropTypes.func,
  expenseUpdate: PropTypes.func,
};

const mapDispatchToProps = dispatch => ({
  expenseRemove: data => dispatch(expenseActions.removeAction(data)),
  expenseUpdate: data => dispatch(expenseActions.updateAction(data)),
});

export default connect(null, mapDispatchToProps)(Expense);
