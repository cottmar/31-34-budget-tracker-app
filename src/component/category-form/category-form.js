import React from 'react';
import PropTypes from 'prop-types';
import autoBind from '../../utils/';

// this is the UI state. Everything but the store is the UI state from now on.
const defaultState = {
  title: '',
};

class CategoryForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.category || defaultState;
    autoBind.call(this, CategoryForm);
  }

  handleChange(event) {
    const { value } = event.target;
    this.setState({ title: value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.onComplete(this.state);
  }

  render() {
    const buttonText = this.props.category ? 'Update' : 'Create';
    return (
      <form 
        onSubmit={this.handleSubmit}
        className='category-form'>

        <input
          type='number'
          name='budget'
          placeholder='Budget'
          value={this.state.budget}
          onChange={this.handleChange}
        />
        <button type='submit'>{buttonText}Category</button>
      </form>
    );
  }
}

CategoryForm.propTypes = {
  onComplete: PropTypes.func,
  category: PropTypes.object, // used to update categories
};

// you could bind your form to state in here

export default CategoryForm;
