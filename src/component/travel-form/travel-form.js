// FOR LAB 32 

// import React from 'react';
// import PropTypes from 'prop-types';
// import autoBind from './../../utils/index';

// const emptyState = { content: ''};

// export default class TravelForm extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = props.travel || emptyState;
//     autoBind.call(this, TravelForm);
//   }
//   handleChange(event) {
//     this.setState({ content: event.target.value });
//   }
//   handleSubmit(event) {
//     event.preventDefault();
//     const categoryId = this.props.category ? this.props.category.id : this.props.travel.categoryId;

//     this.props.onComplete({
//       ...this.state,
//       categoryId,
//     });

//     this.setState(defaultState);
//   }

//   render() {
//     const { travel } = this.props;
//     const buttonText = travel ? 'Update Travel' : 'Create Travel';

//     return (
//       <form
//         className="travel-form"
//         onSubmit={this.handleSubmit}
//       >
//         <input  
//           type="text"
//           name="concent"
//           placholder="Beach"
//           value={this.state.content}
//           onChange={this.handleChange}
//         />
//       <button type="submit"> {buttonText} </button>
//     </form>
//     )
//   }
// }

// TravelForm.propTypes = {
//   onComplete: PropTypes.func,
//   category: PropTypes.object,
//   travel: PropTypes.object,
// };
