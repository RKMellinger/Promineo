import { motion, AnimatePresence } from 'framer-motion';
import ReviewMovie from './ReviewMovie';
import PropTypes from 'prop-types';

//Creates the display brlow the movie card for the posted reviews.

function MovieReviewList({ review, handleDelete }) {
  if (!review || review.length === 0) {
    return <p>No reviews yet</p>;
  }
  return (
   <div className="feedback-list">
   <AnimatePresence>
  {review.map(item => (
  <motion.div key={item.id} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
   <ReviewMovie key={item.id} item={item} handleDelete={handleDelete}     />
  </motion.div>
   ))}
 </AnimatePresence>
 </div>
 );
}
MovieReviewList.propTypes = {
  review: PropTypes.arrayOf(
  PropTypes.shape({
  id: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
   })
  )
};
export default MovieReviewList;