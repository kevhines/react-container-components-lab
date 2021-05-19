// Code MovieReviews Here
import React from 'react';



const MovieReviews = props => {
    return (
      <div className="review-list">{props.reviews.map(review => <div className="review"><li>{review.headline}</li><ul><li>{review.byline}</li><li>{review.summary_short}</li></ul></div>)}</div>
    )
  }

export default MovieReviews;