import PropTypes from "prop-types";
import { Notify } from "./Notification.styled";

const Notification = ({ message, total}) => {
  return (<Notify>{ !total && message}</Notify>)
}

Notification.propTypes = {
  message: PropTypes.string.isRequired,
  total: PropTypes.number.isRequired,
}

export { Notification }