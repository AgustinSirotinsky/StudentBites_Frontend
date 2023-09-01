import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from "react";
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import './FeedReseña.css';


export default function FeedReseña ({ userAvatar, rating, likes, comments })
{
    const [reviews, setReviews] = useState([]);
    const [liked, setLiked] = useState(false);

    useEffect(() => {
        fetch('http://localhost:3000/resenias')
        .then(res => res.json())
        .then((res) => setReviews(res))
        .catch(err => console.log(err));
    }, []);
    
    const toggleLike = () => {
        setLiked(!liked);
    };

    console.log(reviews);
    return (
    <div className="review-card">
        <div className="user-profile">
        </div>
        {reviews && reviews.map((Reseña, index) => {
            if (Reseña.ID === 5)
            {
            return(
            <div className="review-text" key={index}>
                {Reseña.Descripcion} oa
            </div>);}
            return null;
        })}
        <div className="review-content">
            <div className="rating">
                {Array.from({ length: rating }, (_, index) => (<span key={index} className="star">&#9733;</span>))}
            </div>
            <div className="like-section">
                <div className="likes">
                    <button onClick={toggleLike} className="like-button">
                        {liked ? <FaHeart className="liked-icon" /> : <FaRegHeart className="unliked-icon" />}
                    </button>
                </div>
            </div>
            <div className="comments">
                <i className="fa fa-comments"></i>
            </div>
        </div>
    </div>
    );
}
