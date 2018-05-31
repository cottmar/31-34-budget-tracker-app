import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CategoryForm from '../category-form/category-form';
import * as categoryActions from '../../action/category';
import ExpenseForm from '../expense-form/expense-form';
import * as expenseActions from '../../action/expense';
import Expense from '../expense/expense';

class Category extends React.Component {
  render() {
    const {
      category, 
      key,
      expenses,
      categoryRemove,
      categoryUpdate,
      expenseCreate,
    } = this.props; 
    console.log('hiiii', expenses);
    return (
      <div className='category' key={key}>
        <h1> { category.name } </h1>
        <h1> { category.budget } </h1>
        <button onClick={() => categoryRemove(category)}> Destroy! </button>
        <CategoryForm category={category} onComplete={categoryUpdate}/>
        <ExpenseForm category={category} onComplete={expenseCreate}/>
        {
        (expenses[category.id]) ? 
        expenses[category.id].map((currentExpense, i) => <Expense expense={currentExpense} key={i}/>) : null
        }
      </div>
    );
  }
}

Category.propTypes = {
  category: PropTypes.object,
  key: PropTypes.number,
  categoryUpdate: PropTypes.func,
  categoryRemove: PropTypes.func,
};

const mapDispatchToProps = (dispatch) => {
  return {
    categoryUpdate: data => dispatch(categoryActions.update(data)),
    categoryRemove: data => dispatch(categoryActions.remove(data)),
    expenseCreate: data => dispatch(expenseActions.createAction(data)),
  };
};

const mapStateToProps = (state) => {
  return {
    expenses: state.expenses,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Category);
