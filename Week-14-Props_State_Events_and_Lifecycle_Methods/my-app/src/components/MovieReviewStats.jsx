import PropTypes from "prop-types";
function MovieReviewStats({ review }) {
  // Calculate Ratings Average
  let average =
    review.reduce((accumulator, current) => {
      return accumulator + current.rating;
    }, 0) / review.length;
  average = average.toFixed(1);
  return (
    <div className="feedback-stats">
      Movie Review Stats:
      <h4>{review.length} Reviews</h4>
      <h4>Average Movie Rating: {isNaN(average) ? 0 : average}</h4>
    </div>
  );
}
MovieReviewStats.propTypes = {
  review: PropTypes.array.isRequired,
};
export default MovieReviewStats;
