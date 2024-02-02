import React from 'react';
import Review from './Review'; // Import the Review component

const reviews = [
  {
    id: 1,
    name: 'John Doe',
    rating: 4,
    comment: 'Great product! I love it.',
  },
  {
    id: 2,
    name: 'Jane Smith',
    rating: 5,
    comment: 'Excellent service. Highly recommended!',
  },
  // Add more reviews as needed
];

const ReviewSection = () => {
  return (
    <div className="max-w-lg mx-auto mt-8">
      <h1 className="text-3xl font-bold mb-6">Customer Reviews</h1>
      {reviews.map((review) => (
        <Review key={review.id} {...review} />
      ))}
    </div>
  );
};

export default ReviewSection;
