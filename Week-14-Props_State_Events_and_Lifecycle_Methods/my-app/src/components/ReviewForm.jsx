import { useState } from 'react';
import Cards from './Cards';
import Buttons from './Buttons'
import RatingSelect from './RatingSelect';
import Santa from './Santa';

// adds the functionality and puts the main display cards together. 

function ReviewForm({ handleAdd }) {
  const [text, setText] = useState('');
  const [rating, setRating] = useState(10);
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState('');
  const handleTextChange = event => {
  if (text === '') {
    setBtnDisabled(true);
    setMessage(null);
   } else if (text !== '' && text.trim().length <= 10) {
    setMessage('Text must be at least 10 characters');
    setBtnDisabled(true);
  } else {
  setMessage(null);
  setBtnDisabled(false);
  }
  setText(event.target.value);
};
  const handleSubmit = event => {
  event.preventDefault();
  if (text.trim().length > 10) {
  const newFeedback = {
    text,
   rating
   };
  handleAdd(newFeedback);
  setText('');
  }
  // Everything above pushed the user provided data into the posted review array. 
  //Below is the majority of the functions put together rendering most of the page.
};
  return (
    <div className='container'>
    <Cards>
      <Santa/>
     <form onSubmit={handleSubmit}>
     <h2>How would you rate this Movie?</h2>
     <RatingSelect select={rating => setRating(rating)} />
    <div className="input-group">
   <input onChange={handleTextChange} 
    type="text" 
    placeholder="Write a review" 
    value={text} 
    />
   <Buttons type="submit" isDisabled={btnDisabled}>
     Submit
   </Buttons>
  </div>
  {message && <div className="message">{message}</div>}
  </form>
  </Cards>
  </div>
  );
}
export default ReviewForm;