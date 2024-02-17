import React from 'react';
import { IoPersonSharp } from "react-icons/io5";

const StarRating = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  const renderFullStars = () => {
    return Array.from({ length: fullStars }, (_, index) => (
      <span key={index} className="text-yellow-500">&#9733;</span>
    ));
  };

  const renderHalfStar = () => {
    return hasHalfStar ? <span className="text-yellow-500">&#9733;</span> : null;
  };

  return (
    <div className="flex">
      {renderFullStars()}
      {renderHalfStar()}
    </div>
  );
};

const ReviewCard = ({ name, rating, comment, pic}) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-4">
      <div className="flex items-center mb-4 justify-between">
        <div className="flex-shrink-0">
          <StarRating rating={rating} />
        </div>
        <div className="ml-4">
          <h3 className="text-lg font-semibold">{name}</h3>
          <p className="text-gray-500">{`Rating: ${rating}/5`}</p>
        </div>
        <div>
          <img className='rounded-[50%] w-[70px] h-[70px]'src={pic} alt="" />
        </div>
      </div>
      <p className="text-gray-800">{comment}</p>
    </div>
  );
};

const Reviews = () => {
  const reviews = [
    {
      id: 1,
      name: 'John Doe',
      rating: 4.5,
      comment: 'Had an amazing experience with this travel agency. The tour guides were knowledgeable, and the accommodations were excellent.',
      pic:"https://media.istockphoto.com/id/1332100919/vector/man-icon-black-icon-person-symbol.jpg?s=612x612&w=0&k=20&c=AVVJkvxQQCuBhawHrUhDRTCeNQ3Jgt0K1tXjJsFy1eg="
    },
    {
      id: 2,
      name: 'Jane Smith',
      rating: 5,
      comment:'Unforgettable journey! The travel agency organized a perfect itinerary, and every moment was a delight.',
      pic:"https://media.istockphoto.com/id/1332100919/vector/man-icon-black-icon-person-symbol.jpg?s=612x612&w=0&k=20&c=AVVJkvxQQCuBhawHrUhDRTCeNQ3Jgt0K1tXjJsFy1eg="
    },
    {
      id: 3,
      name: 'Julie',
      rating: 5,
      comment: 'Unforgettable journey! The travel agency organized a perfect itinerary, and every moment was a delight.',
      pic:"https://media.istockphoto.com/id/1332100919/vector/man-icon-black-icon-person-symbol.jpg?s=612x612&w=0&k=20&c=AVVJkvxQQCuBhawHrUhDRTCeNQ3Jgt0K1tXjJsFy1eg="
    },
 
    // Add more reviews as needed
  ];

  return (  
    <div className="bg-gray-100 h-[screen] flex justify-center items-center w-[100%] text-justify mt-[30px]">
      <div className="w-[80%]">
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-600">Customer Reviews</h1>
      <div className='md:flex gap-4 justify-between w-full'>
      {reviews.map((review) => (
          <ReviewCard key={review.id} {...review} />
        ))}
      </div>
      </div>
    </div>
  );
};

export default Reviews;
