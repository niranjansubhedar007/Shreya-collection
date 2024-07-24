// "use client";
// import React, { useState, useEffect } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faArrowLeft,
//   faArrowRight,
//   faStar,
//   faStarHalfAlt,
//   faStarHalfStroke,
//   faStarOfDavid,
//   faStar as faStarRegular,
//   faStar as faStarSolid,
// } from "@fortawesome/free-solid-svg-icons";
// import axios from "axios";

// const Review = () => {
//   const [open, setOpen] = useState(false);
//   const [userRating, setUserRating] = useState(0);
//   const [userName, setUserName] = useState("");
//   const [reviewMessage, setReviewMessage] = useState("");
//   const [startIndex, setStartIndex] = useState(0);
//   const [review, setReview] = useState([]);
//   const reviewsPerPage = 3;

//   useEffect(() => {
//     const fetchReview = async () => {
//       try {
//         const response = await axios.get("http://localhost:5000/api/review");
//         setReview(response.data);
//         console.log(response.data);
//       } catch (error) {
//         console.error("Error fetching sections:", error.message);
//       }
//     };
//     fetchReview();
//   }, []);

//   const handlePrev = () => {
//     setStartIndex((prevIndex) =>
//       prevIndex === 0 ? Math.max(review.length - reviewsPerPage, 0) : prevIndex - reviewsPerPage
//     );
//   };

//   const handleNext = () => {
//     setStartIndex((prevIndex) =>
//       prevIndex + reviewsPerPage >= review.length ? 0 : prevIndex + reviewsPerPage
//     );
//   };

//   const openPopup = () => {
//     setOpen(true);
//   };

//   const closePopup = () => {
//     setOpen(false);
//   };

//   const formatDate = (dateString) => {
//     const date = new Date(dateString);
//     const day = String(date.getDate()).padStart(2, "0");
//     const month = String(date.getMonth() + 1).padStart(2, "0");
//     const year = date.getFullYear();
//     return `${day}/${month}/${year}`;
//   };

//   const handleSubmit = async () => {
//     try {
//       const newReview = { userName, reviewStar: userRating, reviewMessage };
//       const response = await axios.post("http://localhost:5000/api/review/addReview", newReview);
//       setReview([...review, response.data]);
//       closePopup();
//     } catch (error) {
//       console.error("Error adding review:", error.message);
//     }
//   };

//   const currentReviews = review.slice(startIndex, startIndex + reviewsPerPage);

//   return (
//     <section className="text-gray-600 body-font font lg:py-16 md:py-10 py-4">
//       <div className="container px-5 py-1 mx-auto">
//         <div className="text-center mb-16">
//           <h1 className="lg:text-3xl md:text-2xl text-xl font-medium title-font text-orange-500 mb-4">
//             CUSTOMERS REVIEWS
//           </h1>
//           <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500">
//             "Real People, Real Reviews. Dive into the unfiltered world of
//             customer feedback where authenticity reigns supreme. We're proud to
//             showcase genuine opinions from individuals who have experienced our
//             products firsthand."
//           </p>
//           <div className="flex mt-6 justify-center">
//             <div className="w-16 h-1 rounded-full bg-orange-700 inline-flex"></div>
//           </div>
//         </div>

//         <div className="flex items-center justify-center mb-8">
//           <div className="grid md:grid-cols-3 lg:grid-cols-3 grid-cols-1 gap-8 ">
//             {currentReviews.map((review) => (
//               <div
//                 key={review._id}
//                 className="max-w-md bg-white p-6 relative rounded-lg shadow-xl"
//               >
//                 <p className="text-base leading-relaxed mb-4 lg:h-32 md:h-52 h-48">
//                   {review.reviewMessage}
//                 </p>
//                 <p className="text-indigo-500 font-bold mb-2">
//                   {review.userName}
//                 </p>
//                 <p className="text-gray-300 absolute top-2 right-2">
//                   {formatDate(review.createdAt)}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>
//         <div className="justify-between flex">
//           <button
//             className="mr-4 text-indigo-500 focus:outline-none"
//             onClick={handlePrev}
//           >
//             <FontAwesomeIcon icon={faArrowLeft} className="w-6 h-6" />
//           </button>
//           <button
//             className="ml-4 text-indigo-500 focus:outline-none float-right"
//             onClick={handleNext}
//           >
//             <FontAwesomeIcon icon={faArrowRight} className="w-6 h-6" />
//           </button>
//         </div>
//         <button
//           onClick={openPopup}
//           className="flex mx-auto text-orange-700 bg-orange-100 border-0 py-2 px-8 focus:outline-none hover:bg-orange-700 hover:text-white rounded lg:text-lg md:text-base text-sm font-semibold mt-3"
//         >
//           WRITE A REVIEW
//         </button>
//       </div>

//       {open && (
//         <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-75 flex items-center justify-center z-50">
//           <div className="bg-white p-6 rounded-lg shadow-xl w-96 mx-auto">
//             <h2 className="text-2xl font-semibold text-gray-800 mb-4">
//               Write Your Review
//             </h2>
//             <input
//               type="text"
//               className="w-full border border-gray-300 rounded-lg p-2 mb-4"
//               placeholder="Your Name"
//               value={userName}
//               onChange={(e) => setUserName(e.target.value)}
//             />
//             <input
//               type="number"
//               min="1"
//               max="5"
//               className="w-full border border-gray-300 rounded-lg p-2 mb-4"
//               placeholder="Rate from 1 to 5"
//               value={userRating}
//               onChange={(e) => setUserRating(Number(e.target.value))}
//             />
//             <textarea
//               className="w-full h-32 border border-gray-300 rounded-lg p-2 mb-4"
//               placeholder="Write your review here..."
//               value={reviewMessage}
//               onChange={(e) => setReviewMessage(e.target.value)}
//             ></textarea>
//             <div className="flex justify-end">
//               <button
//                 className="text-sm text-gray-600 focus:outline-none mr-2"
//                 onClick={closePopup}
//               >
//                 Cancel
//               </button>
//               <button
//                 className="text-sm text-orange-500 font-semibold focus:outline-none"
//                 onClick={handleSubmit}
//               >
//                 Submit
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </section>
//   );
  
// };

// export default Review;


"use client";
import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight, faStar as faStarSolid } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

const Review = () => {
  const [open, setOpen] = useState(false);
  const [userRating, setUserRating] = useState(0);
  const [userName, setUserName] = useState("");
  const [reviewMessage, setReviewMessage] = useState("");
  const [startIndex, setStartIndex] = useState(0);
  const [review, setReview] = useState([]);
  const reviewsPerPage = 3;

  useEffect(() => {
    const fetchReview = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/review");
        setReview(response.data);
      } catch (error) {
        console.error("Error fetching sections:", error.message);
      }
    };
    fetchReview();
  }, []);

  const handlePrev = () => {
    setStartIndex((prevIndex) =>
      prevIndex === 0 ? Math.max(review.length - reviewsPerPage, 0) : prevIndex - reviewsPerPage
    );
  };

  const handleNext = () => {
    setStartIndex((prevIndex) =>
      prevIndex + reviewsPerPage >= review.length ? 0 : prevIndex + reviewsPerPage
    );
  };

  const openPopup = () => {
    setOpen(true);
  };

  const closePopup = () => {
    setOpen(false);
    setUserRating(0); // Reset userRating when closing popup
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  const handleSubmit = async () => {
    try {
      const newReview = { userName, reviewStar: userRating, reviewMessage };
      const response = await axios.post("http://localhost:5000/api/review/addReview", newReview);
      setReview([...review, response.data]);
      setUserName("")
      setUserRating("")
      setReviewMessage("")
      closePopup();
    } catch (error) {
      console.error("Error adding review:", error.message);
    }
  };

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <FontAwesomeIcon
          key={i}
          icon={faStarSolid}
          className={i <= rating ? "text-yellow-500 cursor-pointer" : "text-gray-300 cursor-pointer"}
          onClick={() => setUserRating(i)}
        />
      );
    }
    return stars;
  };

  const currentReviews = review.slice(startIndex, startIndex + reviewsPerPage);

  return (
    <section className="text-gray-600 body-font font lg:py-16 md:py-10 py-4">
      <div className="container px-5 py-1 mx-auto">
        <div className="text-center mb-16">
          <h1 className="lg:text-3xl md:text-2xl text-xl font-medium title-font text-orange-500 mb-4">
            CUSTOMERS REVIEWS
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500">
            "Real People, Real Reviews. Dive into the unfiltered world of
            customer feedback where authenticity reigns supreme. We're proud to
            showcase genuine opinions from individuals who have experienced our
            products firsthand."
          </p>
          <div className="flex mt-6 justify-center">
            <div className="w-16 h-1 rounded-full bg-orange-700 inline-flex"></div>
          </div>
        </div>

        <div className="flex items-center justify-center mb-8">
          <div className="grid md:grid-cols-3 lg:grid-cols-3 grid-cols-1 gap-8 w-full">
            {currentReviews.map((reviewItem) => (
              <div
                key={reviewItem._id}
                className="max-w-md bg-white p-6 relative rounded-lg shadow-xl"
              >
              <p className="text-base justify-center text-left mt-5 leading-relaxed mb-4 lg:h-32 md:h-52 h-48">
              {reviewItem.reviewMessage}
              </p>
              <p className="text-indigo-500 font-bold mb-2">
              {reviewItem.userName}
              </p>
              <p className="text-gray-300 absolute top-2 right-2">
              {formatDate(reviewItem.createdAt)}
              </p>
              <p className="flex text-yellow-400">
              {renderStars(reviewItem.reviewStar)}
            </p>
            
              </div>
            ))}
          </div>
        </div>
        <div className="justify-between flex">
          <button
            className="mr-4 text-indigo-500 focus:outline-none"
            onClick={handlePrev}
          >
            <FontAwesomeIcon icon={faArrowLeft} className="w-6 h-6" />
          </button>
          <button
            className="ml-4 text-indigo-500 focus:outline-none float-right"
            onClick={handleNext}
          >
            <FontAwesomeIcon icon={faArrowRight} className="w-6 h-6" />
          </button>
        </div>
        <button
          onClick={openPopup}
          className="flex mx-auto text-orange-700 bg-orange-100 border-0 py-2 px-8 focus:outline-none hover:bg-orange-700 hover:text-white rounded lg:text-lg md:text-base text-sm font-semibold mt-3"
        >
          WRITE A REVIEW
        </button>
      </div>

      {open && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-xl w-96 mx-auto">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Add Review
            </h2>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-lg p-2 mb-4"
              placeholder="Your Name"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
            <div className="flex items-center mb-4">
              {renderStars(userRating)}
            </div>
            <textarea
              className="w-full h-32 border border-gray-300 rounded-lg p-2 mb-4"
              placeholder="Write your review here..."
              value={reviewMessage}
              onChange={(e) => setReviewMessage(e.target.value)}
            ></textarea>
            <div className="flex justify-end">
              <button
                className="text-sm text-gray-600 focus:outline-none mr-2"
                onClick={closePopup}
              >
                Cancel
              </button>
              <button
                className="text-sm text-orange-500 font-semibold focus:outline-none"
                onClick={handleSubmit}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Review;







