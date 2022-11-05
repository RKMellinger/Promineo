import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import MovieReviewList from "./MovieList/MovieReviewList";
import MovieReviewStats from "./MovieList/MovieReviewStats";
import MovieData from "./ReviewMovie/MovieData";
import ReviewForm from "./MovieList/ReviewForm";
import NavbarLink from "./MovieList/NavbarLink";
function App() {
  const [review, setReview] = useState(MovieData);
  const addReview = (newReview) => {
    newReview.id = uuidv4();
    setReview([newReview, ...review]);
  };
  const deleteFeedback = (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      setReview(review.filter((item) => item.id !== id));
    }
  };
  return (
    //This fil brings the major functions together.
    <>
      <div>
        <NavbarLink />
      </div>
      {/* THis JSX holds the overall  */}
      <div className="container">
        <ReviewForm handleAdd={addReview} />
        {/* These are the forms that  create and hold the movie card, comments, and the comments */}
        <MovieReviewStats review={review} />
        {/* Below is the static list for the reviews */}
        <MovieReviewList
          review={review}
          handleDelete={deleteFeedback}
        />
      </div>
    </>
  );
}
export default App;
