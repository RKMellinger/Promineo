import { FaTimes } from "react-icons/fa";
import Cards from "./Cards";
import PropTypes from "prop-types";

// Creates the posted review cards. It takes the text from the data, the review rating, and adds a delete button.

export default function ReviewMovie({ item, handleDelete }) {
  return (
    <Cards>
      <div className="num-display">{item.rating}</div>
      <button
        onClick={() => handleDelete(item.id)}
        className="close">
        <FaTimes color="purple" />
      </button>
      <div className="text-display">{item.text}</div>
    </Cards>
  );
}
ReviewMovie.propTypes = {
  item: PropTypes.object.isRequired,
};
