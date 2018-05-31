import React from 'react';
import PropTypes from 'prop-types';
import autoBind from './../../utils/index';

const emptyState = { content: '' };

export default class ExpenseForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = props.expense || emptyState;
    autoBind.call(this, ExpenseForm);
  }
  handleChange(event) {
    this.setState({ content: event.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();
    const categoryId = this.props.category ? this.props.category.id : this.props.expense.categoryId;

    this.props.onComplete({
      ...this.state,
      categoryId,
    });

    this.setState(defaultState);
  }

  render() {
    const { expense } = this.props;
    const buttonText = expense ? 'Update Expense' : 'Create Expense';

    return (
      <form
        className="expense-form"
        onSubmit={this.handleSubmit}
      >
        <input  
          type="text"
          name="content"
          placholder="rent"
          value={this.state.content}
          onChange={this.handleChange}
        />
      <button type="submit"> {buttonText} </button>
    </form>
    );
  }
}

ExpenseForm.propTypes = {
  onComplete: PropTypes.func,
  category: PropTypes.object,
  expense: PropTypes.object,
};
