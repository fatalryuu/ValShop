import React, {useState} from 'react';
import s from "./Reviews.module.css";
import Review from "./Review/Review";

const Reviews = () => {
    const [reviews, setReviews] = useState([<Review name="Nikita" text="Great" stars={5} key={Math.random() * 1000}/>]);
    const [nameState, setName] = useState("");
    const [textState, setText] = useState("");
    const [starsState, setStars] = useState(0.0);
    const handleSubmit = () => {
        if (nameState !== "" && textState !== "")
            setReviews([<Review name={nameState} text={textState} stars={starsState} key={Math.random() * 1000}/>, ...reviews]);
        setName("");
        setText("");
        setStars(0);
    }
    return (
        <div className={s.wrapper}>
            <h2>Reviews</h2>
            <h5>Honest reviews by our clients</h5>
            <form className={reviews.length > 5 ? s.long_form : s.short_form}>
                <input type="text" placeholder="Your name..." className={s.name} value={nameState}
                       onChange={(e) => setName(e.target.value)} maxLength={8} minLength={2}/>
                <br/>
                <textarea placeholder="Review..." className={s.text} value={textState}
                       onChange={(e) => setText(e.target.value)} maxLength={90} minLength={8}/>
                <br/>
                <input type="number" step={0.5} placeholder="Rate..." className={s.stars} value={starsState}
                       onChange={(e) => setStars(+e.target.value)} max={5} min={0}/>
                <br/>
                <button type="button" className={s.send} onClick={handleSubmit}>Send</button>
                {reviews.map(r => r)}
            </form>
        </div>
    );
};

export default Reviews;