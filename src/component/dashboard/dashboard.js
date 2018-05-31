import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as categoryActions from '../../action/category';
import CategoryForm from '../category-form/category-form';
import CategoryItem from '../categoryItem/category-item';

class Dashboard extends React.Component {
  render() {
    // in the component, our state is linked AS PROPS
    const { categories, categoryCreate } = this.props;
    return (
      <div className='dashboard'>
        <CategoryForm onComplete={categoryCreate} />
        {
          categories.map((currentCategory, i) => <CategoryItem category={currentCategory} key={i}/>)
        }
      </div>
    );
  }
}

Dashboard.propTypes = {
  categories: PropTypes.array,
  categoryCreate: PropTypes.func,
};

const mapStateToProps = (state) => {
  // the object we return WILL BECOME PROPS for dashboard
  return {
    categories: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    categoryCreate: data => dispatch(categoryActions.create(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
