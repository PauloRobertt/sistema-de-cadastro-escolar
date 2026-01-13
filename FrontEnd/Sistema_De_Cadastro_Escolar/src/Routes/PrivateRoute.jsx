import { Navigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

import PropTypes from 'prop-types';

export default function PrivateRoute({ element, isClose }) {
  const isLoggedIn = useSelector((state) => state.auth.authReducer.isLoggedIn);
  const location = useLocation();

  if (isClose && !isLoggedIn) {
    return (
      <Navigate to="/login" state={{ prevPath: location.pathname }} replace />
    );
  }

  return element;
}

PrivateRoute.propTypes = {
  element: PropTypes.element.isRequired,
  isClose: PropTypes.bool,
};

PrivateRoute.defaultProps = {
  isClose: false,
};
