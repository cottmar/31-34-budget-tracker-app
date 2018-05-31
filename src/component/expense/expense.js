// FOR LAB 32

// import React from 'react';
// import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
// import TravelForm from './../travel-form/travel-form';
// import * as travelActions from '../../action/travel';

// class Travel extends React.Component {
//   render() {
//     const { travel, travelRemove, travelUpdate } = this.props;
//     return (
//       <div className="travel">
//       <p> { travel.content}  </p>
//       <button onClick={() => travelRemove(travel)}>Delete</button>
//       travel={travel}
//       onComplete={travelUpdate}
//       />
//     </div>
//     )
//   }
// }

// Travel.propTypes = {
//   travel: PropTypes.object,
//   travelRemove: PropTypes.func,
//   travelUpdate: PropTypes.func,
// };

// const mapDispatchToProps = dispatch => ({
//   travelRemove: data => dispatch(travelActions.removeAction(data)),
//   travelUpdate: data => dispatch(travelActions.updateAction(data)),
// });

// export default connect(null, mapDispatchToProps)(Travel);
