import { v4 as uuidv4 } from "uuid";
import { useState } from "react";

import MovieReviewList from "./Components/MovieReviewList";
import MovieReviewStats from "./Components/MovieReviewStats";
import MovieData from "./Data/MovieData";
import ReviewForm from "./Components/ReviewForm";
import NavbarLink from "./Components/NavbarLink";
import { Container } from "react-bootstrap";
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
    <>
      {/* <Container>
        <NavbarLink />
      </Container> */}
      <div className="container">
        <ReviewForm handleAdd={addReview} />
        <MovieReviewStats review={review} />
        <MovieReviewList
          review={review}
          handleDelete={deleteFeedback}
        />
      </div>
    </>
  );
}
export default App;
