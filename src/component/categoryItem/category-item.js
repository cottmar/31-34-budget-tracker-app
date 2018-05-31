import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CategoryForm from '../category-form/category-form';
import * as categoryActions from '../../action/category';

class Category extends React.Component {
  render() {
    const {
      category, 
      key,
      categoryRemove,
      categoryUpdate,
    } = this.props; 
    console.log(category, 'LOOKING FOR CAT');
    return (
      <div className='category' key={key}>
        <h1> { category.name } </h1>
        <h1> { category.budget } </h1>
        <button onClick={() => categoryRemove(category)}> Destroy! </button>
        <CategoryForm category={category} onComplete={categoryUpdate}/>
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
  };
};

export default connect(null, mapDispatchToProps)(Category);
