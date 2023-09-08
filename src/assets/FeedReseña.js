import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from "react";
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import './FeedReseña.css';
import Ja from './Ja.jpg';
import StarRating from './StarRating';

export default function FeedReseña ({ userAvatar, rating})
{
    const [reviews, setReviews] = useState([]);
    const [liked, setLiked] = useState(false);

    useEffect(() => {
        fetch('http://localhost:3000/resenias')
        .then(res => res.json())
        .then((res) => setReviews(res))
        .catch(err => console.log(err));
    }, []);
    
    const toggleLike = (ID) => {
        setLiked((prevLiked) => ({
          ...prevLiked,
          [ID]: !prevLiked[ID],
        }));
      };
    console.log(reviews);
    return (
        <div>
      {reviews.map((Reseña) => (
        <div className="review-card" key={Reseña.ID}>
          <div className="user-profile">
            <img src={Ja} className="rounded-circle" width="60" height="60" alt="User Avatar" />
          </div>
          <div className="review-text">
            {Reseña.Descripcion}
          </div>
          <div className="like-section">
            <div className="likes">
              <button onClick={() => toggleLike(Reseña.ID)} className="like-button">
                {liked[Reseña.ID] ? <FaHeart className="liked-icon" /> : <FaRegHeart className="unliked-icon" />}
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
    );
}
